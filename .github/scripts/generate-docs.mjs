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

  return {
    filePath,
    doc: extractLeadingJsDoc(content),
    functions: [...functions],
    routes,
  };
}

function generateIndexDoc(vueFiles, jsFiles) {
  let scriptsSection = "_`package.json` não encontrado._";
  if (fs.existsSync("package.json")) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const scripts = Object.entries(pkg.scripts || {});
    if (scripts.length > 0) {
      scriptsSection = [
        "| Comando | Script |",
        "| --- | --- |",
        ...scripts.map(([k, v]) => `| \`npm run ${k}\` | \`${v}\` |`),
      ].join("\n");
    }
  }

  return `# Documentação — Pauliceia 2.0

> Documentação gerada automaticamente a partir da estrutura de \`src/\` e \`package.json\`.

## Visão geral
- **Componentes Vue (\`.vue\`)**: ${vueFiles.length} — ver [componentes-vue.md](./componentes-vue.md)
- **Módulos JavaScript (\`.js\`)**: ${jsFiles.length} — ver [modulos-js.md](./modulos-js.md)

## Scripts disponíveis
${scriptsSection}
`;
}

function generateVueDoc(vueInfos) {
  const sections = vueInfos.map((info) => {
    const lines = [`## \`${info.name}\``, `- **Arquivo:** \`${info.filePath}\``];
    if (info.doc) lines.push(`- **Descrição:** ${info.doc}`);
    if (info.props.length > 0) {
      lines.push(
        `- **Props:** ${info.props.map((p) => `\`${p}\``).join(", ")}`
      );
    }
    if (info.emits.length > 0) {
      lines.push(
        `- **Eventos emitidos:** ${info.emits.map((e) => `\`${e}\``).join(", ")}`
      );
    }
    if (info.computed.length > 0) {
      lines.push(
        `- **Computed:** ${info.computed.map((c) => `\`${c}\``).join(", ")}`
      );
    }
    if (info.methods.length > 0) {
      lines.push(
        `- **Métodos:** ${info.methods.map((m) => `\`${m}\``).join(", ")}`
      );
    }
    return lines.join("\n");
  });

  return `# Componentes Vue\n\nTotal de componentes mapeados: **${vueInfos.length}**.\n\n${sections.join("\n\n")}\n`;
}

function generateJsDoc(jsInfos) {
  const sections = jsInfos.map((info) => {
    const lines = [`## \`${info.filePath}\``];
    if (info.doc) lines.push(`- **Descrição:** ${info.doc}`);
    if (info.routes.length > 0) {
      lines.push(
        `- **Rotas:** ${info.routes.map((r) => `\`${r}\``).join(", ")}`
      );
    }
    if (info.functions.length > 0) {
      lines.push(
        `- **Funções/Métodos:** ${info.functions.map((f) => `\`${f}\``).join(", ")}`
      );
    }
    return lines.join("\n");
  });

  return `# Módulos JavaScript\n\nTotal de arquivos mapeados: **${jsInfos.length}**.\n\n${sections.join("\n\n")}\n`;
}

function main() {
  const vueFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".vue"));
  const jsFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".js"));

  const vueInfos = vueFiles.map(extractVueInfo);
  const jsInfos = jsFiles.map(extractJsInfo);

  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(DOCS_DIR, "README.md"),
    generateIndexDoc(vueFiles, jsFiles),
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
