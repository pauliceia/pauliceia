import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = "docs";
const SRC_DIR = "src";

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
  return results.sort();
}

function extractLeadingJsDoc(content) {
  const match = content.match(/\/\*\*([\s\S]*?)\*\//);
  if (!match) return "";
  return match[1]
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter((line) => line && !line.startsWith("@"))
    .join(" ")
    .trim();
}

function extractVueInfo(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  const script = scriptMatch ? scriptMatch[1] : "";

  const nameMatch = script.match(/\bname\s*:\s*["']([^"']+)["']/);
  const name = nameMatch ? nameMatch[1] : path.basename(filePath, ".vue");

  const props = [];
  const propsArrayMatch = script.match(/\bprops\s*:\s*\[([^\]]*)\]/);
  if (propsArrayMatch) {
    for (const m of propsArrayMatch[1].matchAll(/["']([^"']+)["']/g)) {
      props.push(m[1]);
    }
  } else {
    const propsObjMatch = script.match(/\bprops\s*:\s*\{([\s\S]*?)\n\s*\}/);
    if (propsObjMatch) {
      for (const m of propsObjMatch[1].matchAll(/^\s*([a-zA-Z0-9_$]+)\s*:/gm)) {
        if (!["type", "default", "required", "validator"].includes(m[1])) {
          props.push(m[1]);
        }
      }
    }
  }

  const emits = new Set();
  for (const m of content.matchAll(/\$emit\(\s*["']([^"']+)["']/g)) {
    emits.add(m[1]);
  }

  const methods = [];
  const methodsMatch = script.match(/\bmethods\s*:\s*\{([\s\S]*?)\n\s*\}/);
  if (methodsMatch) {
    for (const m of methodsMatch[1].matchAll(
      /^\s*(?:async\s+)?([a-zA-Z0-9_$]+)\s*\(/gm
    )) {
      methods.push(m[1]);
    }
  }

  const computed = [];
  const computedMatch = script.match(/\bcomputed\s*:\s*\{([\s\S]*?)\n\s*\}/);
  if (computedMatch) {
    for (const m of computedMatch[1].matchAll(
      /^\s*([a-zA-Z0-9_$]+)\s*(?:\(|:)/gm
    )) {
      computed.push(m[1]);
    }
  }

  return {
    filePath,
    group: path.posix.dirname(filePath),
    name,
    doc: extractLeadingJsDoc(script),
    props,
    emits: [...emits].sort(),
    methods,
    computed,
  };
}

function extractJsInfo(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const functions = new Set();

  for (const m of content.matchAll(
    /(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_$]+)\s*\(/g
  )) {
    functions.add(m[1]);
  }
  for (const m of content.matchAll(
    /^\s*([a-zA-Z0-9_$]+)\s*(?::\s*(?:async\s+)?function|\([^)]*\)\s*\{)/gm
  )) {
    if (!["if", "for", "while", "switch", "catch"].includes(m[1])) {
      functions.add(m[1]);
    }
  }

  const routes = [];
  if (filePath.includes("/router/")) {
    for (const m of content.matchAll(/\bpath\s*:\s*["']([^"']+)["']/g)) {
      routes.push(m[1]);
    }
  }

  const vuexKeys = [];
  if (filePath.includes("/store/")) {
    for (const key of ["state", "getters", "mutations", "actions"]) {
      if (new RegExp(`\\b${key}\\s*[:=]`).test(content)) {
        vuexKeys.push(key);
      }
    }
  }

  let layer = "Outros";
  if (filePath.startsWith("src/middleware/")) layer = "Middleware / API";
  else if (filePath.startsWith("src/router/")) layer = "Router (Rotas)";
  else if (filePath.startsWith("src/store/")) layer = "Store (Vuex)";

  return {
    filePath,
    layer,
    doc: extractLeadingJsDoc(content),
    functions: [...functions],
    routes,
    vuexKeys,
  };
}

function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return map;
}

function generateIndexDoc(vueInfos, jsInfos) {
  let scriptsSection = "_`package.json` não encontrado._";
  if (fs.existsSync("package.json")) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const scripts = Object.entries(pkg.scripts || {});
    if (scripts.length > 0) {
      scriptsSection = [
        "| Comando | Execução |",
        "| --- | --- |",
        ...scripts.map(([k, v]) => `| \`npm run ${k}\` | \`${v}\` |`),
      ].join("\n");
    }
  }

  const byLayer = groupBy(jsInfos, (item) => item.layer);
  const summaryRows = [
    `| Componentes Vue (\`.vue\`) | ${vueInfos.length} | [componentes-vue.md](./componentes-vue.md) |`,
    `| Middleware / API (\`.js\`) | ${(byLayer.get("Middleware / API") || []).length} | [modulos-js.md](./modulos-js.md#middleware--api) |`,
    `| Router / Rotas (\`.js\`) | ${(byLayer.get("Router (Rotas)") || []).length} | [modulos-js.md](./modulos-js.md#router-rotas) |`,
    `| Store / Vuex (\`.js\`) | ${(byLayer.get("Store (Vuex)") || []).length} | [modulos-js.md](./modulos-js.md#store-vuex) |`,
  ].join("\n");

  return `# Documentação Técnica — Pauliceia 2.0

> Catálogo gerado automaticamente a partir da análise estática de \`src/\` e \`package.json\`.

## Resumo da Arquitetura

| Camada | Quantidade | Referência |
| --- | :---: | --- |
${summaryRows}

## Scripts do Projeto

${scriptsSection}
`;
}

function generateVueDoc(vueInfos) {
  const grouped = groupBy(vueInfos, (item) => item.group);
  const toc = [...grouped.entries()]
    .map(([group, items]) => `- \`${group}\` (${items.length})`)
    .join("\n");

  const blocks = [];
  for (const [group, items] of grouped.entries()) {
    blocks.push(`## \`${group}\``);
    blocks.push(
      "| Componente | Arquivo | Props | Eventos (`$emit`) | Métodos |",
      "| --- | --- | --- | --- | --- |"
    );
    for (const info of items) {
      const props = info.props.length
        ? info.props.map((p) => `\`${p}\``).join(", ")
        : "—";
      const emits = info.emits.length
        ? info.emits.map((e) => `\`${e}\``).join(", ")
        : "—";
      const methods = info.methods.length
        ? info.methods.map((m) => `\`${m}\``).join(", ")
        : "—";
      blocks.push(
        `| **${info.name}** | \`${path.posix.basename(info.filePath)}\` | ${props} | ${emits} | ${methods} |`
      );
    }
    blocks.push("");
  }

  return `# Componentes Vue

Total de componentes mapeados: **${vueInfos.length}**.

## Pastas
${toc}

${blocks.join("\n")}
`;
}

function generateJsDoc(jsInfos) {
  const order = ["Middleware / API", "Router (Rotas)", "Store (Vuex)", "Outros"];
  const grouped = groupBy(jsInfos, (item) => item.layer);
  const blocks = [];

  for (const layer of order) {
    const items = grouped.get(layer);
    if (!items || items.length === 0) continue;

    blocks.push(`## ${layer}`);
    for (const info of items) {
      blocks.push(`### \`${info.filePath}\``);
      if (info.doc) blocks.push(`- **Descrição:** ${info.doc}`);
      if (info.vuexKeys.length > 0) {
        blocks.push(
          `- **Estrutura Vuex:** ${info.vuexKeys.map((k) => `\`${k}\``).join(", ")}`
        );
      }
      if (info.routes.length > 0) {
        blocks.push(
          `- **Rotas:** ${info.routes.map((r) => `\`${r}\``).join(", ")}`
        );
      }
      if (info.functions.length > 0) {
        blocks.push(
          `- **Funções/Métodos:** ${info.functions.map((f) => `\`${f}\``).join(", ")}`
        );
      }
      blocks.push("");
    }
  }

  return `# Módulos JavaScript\n\nTotal de arquivos mapeados: **${jsInfos.length}**.\n\n${blocks.join("\n")}`;
}

function main() {
  const vueFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".vue"));
  const jsFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".js"));

  const vueInfos = vueFiles.map(extractVueInfo);
  const jsInfos = jsFiles.map(extractJsInfo);

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(DOCS_DIR, "README.md"),
    generateIndexDoc(vueInfos, jsInfos),
    "utf8"
  );
  fs.writeFileSync(
    path.join(DOCS_DIR, "componentes-vue.md"),
    generateVueDoc(vueInfos),
    "utf8"
  );
  fs.writeFileSync(
    path.join(DOCS_DIR, "modulos-js.md"),
    generateJsDoc(jsInfos),
    "utf8"
  );

  console.log(
    `Documentação estática gerada em ${DOCS_DIR}/ (${vueFiles.length} componentes Vue, ${jsFiles.length} módulos JS).`
  );
}

main();
