import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = "docs";
const MAX_DIFF_CHARS = 35000;
const MAX_EXISTING_DOCS_CHARS = 25000;
const MAX_SOURCE_CHARS = 30000;

function runGit(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function listFilesRecursive(dir, filterFn) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(fullPath, filterFn));
    } else if (!filterFn || filterFn(fullPath)) {
      results.push(fullPath.replace(/\\/g, "/"));
    }
  }
  return results;
}

function readTruncated(filePath, limit) {
  const content = fs.readFileSync(filePath, "utf8");
  if (content.length <= limit) return content;
  return `${content.slice(0, limit)}\n\n... [truncado em ${limit} caracteres]`;
}

function collectExistingDocs() {
  const docFiles = listFilesRecursive(DOCS_DIR, (p) => p.endsWith(".md"));
  if (docFiles.length === 0) return "Nenhum arquivo em docs/ ainda.";

  let total = 0;
  const chunks = [];
  for (const file of docFiles) {
    if (total >= MAX_EXISTING_DOCS_CHARS) break;
    const remaining = MAX_EXISTING_DOCS_CHARS - total;
    const content = readTruncated(file, Math.min(remaining, 8000));
    total += content.length;
    chunks.push(`### ${file}\n\`\`\`markdown\n${content}\n\`\`\``);
  }
  return chunks.join("\n\n");
}

function collectDiffContext() {
  const baseRef = process.env.GITHUB_BASE_REF;
  const eventName = process.env.GITHUB_EVENT_NAME;

  try {
    if (eventName === "pull_request" && baseRef) {
      const diff = runGit([
        "diff",
        `origin/${baseRef}...HEAD`,
        "--",
        ".",
        ":!docs",
        ":!package-lock.json",
      ]);
      if (diff) return diff.slice(0, MAX_DIFF_CHARS);
    }

    const diff = runGit([
      "diff",
      "HEAD~1..HEAD",
      "--",
      ".",
      ":!docs",
      ":!package-lock.json",
    ]);
    return diff.slice(0, MAX_DIFF_CHARS);
  } catch (_error) {
    return "";
  }
}

function collectSourceSnapshot(targetDir) {
  const root = targetDir && fs.existsSync(targetDir) ? targetDir : "src";
  const files = listFilesRecursive(root, (p) =>
    /\.(js|mjs|vue|ts|json)$/i.test(p)
  ).slice(0, 40);

  let total = 0;
  const chunks = [];
  for (const file of files) {
    if (total >= MAX_SOURCE_CHARS) break;
    const remaining = MAX_SOURCE_CHARS - total;
    const content = readTruncated(file, Math.min(remaining, 4000));
    total += content.length;
    chunks.push(`### ${file}\n\`\`\`\n${content}\n\`\`\``);
  }
  return chunks.join("\n\n");
}

function buildPrompt({ diff, existingDocs, sourceSnapshot, targetPath }) {
  return `Você é um bot especialista em documentação técnica para o projeto Pauliceia 2.0 (aplicação web Vue 2 + OpenLayers + Webpack).

Sua tarefa é gerar ou atualizar guias em Markdown dentro da pasta \`docs/\` em Português (pt-BR), de forma clara, objetiva e fiel ao código real.

Regras:
1. Só crie ou atualize arquivos dentro de \`docs/\` com extensão \`.md\` (ex.: \`docs/arquitetura.md\`, \`docs/componentes.md\`, \`docs/guia-desenvolvimento.md\`).
2. Se já existir documentação relevante em \`docs/\`, atualize o arquivo existente mantendo a estrutura coerente em vez de duplicar conteúdo.
3. Não invente funcionalidades, endpoints ou variáveis que não estejam no código/diff fornecido.
4. Se o diff não tiver impacto relevante na documentação (ex.: apenas formatação ou ajuste trivial), retorne \`files: []\`.
5. Responda EXCLUSIVAMENTE em JSON válido no formato:
{
  "files": [
    {
      "path": "docs/exemplo.md",
      "summary": "Resumo curto da alteração",
      "content": "# Título\n\nConteúdo completo em Markdown..."
    }
  ]
}

${targetPath ? `Foco solicitado manualmente: \`${targetPath}\`\n` : ""}
## Documentação atual em \`docs/\`
${existingDocs}

## Alterações recentes (git diff)
${diff ? `\`\`\`diff\n${diff}\n\`\`\`` : "Sem diff disponível (execução manual ou commit inicial)."}

## Amostra do código-fonte
${sourceSnapshot || "Nenhum arquivo-fonte encontrado."}`;
}

function parseJsonResponse(rawText) {
  const cleaned = rawText
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "");
  return JSON.parse(cleaned);
}

async function callGitHubModels(prompt, token, model) {
  const url = "https://models.github.ai/inference/chat/completions";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente de documentação técnica. Responda sempre em JSON válido seguindo exatamente o formato pedido.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const rawBody = await response.text();
  if (!response.ok) {
    throw new Error(
      `Erro na API do GitHub Models (${response.status}): ${rawBody}`
    );
  }

  let data;
  try {
    data = JSON.parse(rawBody);
  } catch (_error) {
    throw new Error(
      `Resposta não-JSON do GitHub Models (HTTP ${response.status}): ${rawBody.slice(0, 500)}`
    );
  }

  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Resposta vazia do GitHub Models.");
  }

  return parseJsonResponse(text);
}

function sanitizeDocPath(rawPath) {
  const normalized = path.posix
    .normalize(rawPath.replace(/\\/g, "/"))
    .replace(/^\/+/, "");
  if (
    !normalized.startsWith(`${DOCS_DIR}/`) ||
    normalized.includes("..") ||
    !normalized.endsWith(".md")
  ) {
    return null;
  }
  return normalized;
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error(
      "GITHUB_TOKEN não encontrado. Verifique se o workflow possui `models: read` em permissions."
    );
    process.exit(1);
  }

  const model = process.env.GITHUB_MODEL || "openai/gpt-4o-mini";
  const targetPath = process.env.TARGET_PATH || "";

  const existingDocs = collectExistingDocs();
  const diff = collectDiffContext();
  const sourceSnapshot =
    targetPath || !diff ? collectSourceSnapshot(targetPath) : "";

  const prompt = buildPrompt({
    diff,
    existingDocs,
    sourceSnapshot,
    targetPath,
  });

  console.log(`Gerando documentação com GitHub Models (${model})...`);
  const result = await callGitHubModels(prompt, token, model);

  if (!Array.isArray(result.files) || result.files.length === 0) {
    console.log("Nenhuma atualização de documentação necessária.");
    return;
  }

  let written = 0;
  for (const item of result.files) {
    const safePath = sanitizeDocPath(item.path || "");
    if (!safePath) {
      console.warn(`Caminho ignorado por segurança: ${item.path}`);
      continue;
    }

    fs.mkdirSync(path.dirname(safePath), { recursive: true });
    fs.writeFileSync(safePath, item.content.trimEnd() + "\n", "utf8");
    console.log(`Atualizado: ${safePath} — ${item.summary}`);
    written += 1;
  }

  console.log(`Concluído. ${written} arquivo(s) atualizado(s) em ${DOCS_DIR}/.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
