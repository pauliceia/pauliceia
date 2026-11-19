import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = "docs";
const SRC_DIR = "src";

const I18N = {
  en: {
    langSwitch: "**Language:** 🇺🇸 English | [🇧🇷 Português](./README.pt-br.md)",
    vueLangSwitch:
      "**Language:** 🇺🇸 English | [🇧🇷 Português](./componentes-vue.md)",
    jsLangSwitch:
      "**Language:** 🇺🇸 English | [🇧🇷 Português](./modulos-js.md)",
    indexFile: "README.md",
    vueFile: "vue-components.md",
    jsFile: "js-modules.md",
    indexTitle: "Technical Documentation — Pauliceia 2.0",
    indexNote:
      "Catalog automatically generated from static analysis of `src/` and `package.json`.",
    archTitle: "Architecture Summary",
    colLayer: "Layer",
    colCount: "Count",
    colRef: "Reference",
    layerVue: "Vue Components (`.vue`)",
    layerMiddleware: "Middleware / API (`.js`)",
    layerRouter: "Router / Routes (`.js`)",
    layerStore: "Store / Vuex (`.js`)",
    scriptsTitle: "Project Scripts",
    colCmd: "Command",
    colRun: "Script",
    noPkg: "_`package.json` not found._",
    vueTitle: "Vue Components",
    vueTotal: (n) => `Total mapped components: **${n}**.`,
    foldersTitle: "Folders",
    colComp: "Component",
    colFile: "File",
    colProps: "Props",
    colEmits: "Events (`$emit`)",
    colMethods: "Methods",
    jsTitle: "JavaScript Modules",
    jsTotal: (n) => `Total mapped files: **${n}**.`,
    labelDesc: "Description",
    labelVuex: "Vuex Structure",
    labelRoutes: "Routes",
    labelFuncs: "Functions/Methods",
    layers: {
      middleware: "Middleware / API",
      router: "Router (Routes)",
      store: "Store (Vuex)",
      other: "Other",
    },
  },
  pt: {
    langSwitch: "**Idioma:** [🇺🇸 English](./README.md) | 🇧🇷 Português",
    vueLangSwitch:
      "**Idioma:** [🇺🇸 English](./vue-components.md) | 🇧🇷 Português",
    jsLangSwitch: "**Idioma:** [🇺🇸 English](./js-modules.md) | 🇧🇷 Português",
    indexFile: "README.pt-br.md",
    vueFile: "componentes-vue.md",
    jsFile: "modulos-js.md",
    indexTitle: "Documentação Técnica — Pauliceia 2.0",
    indexNote:
      "Catálogo gerado automaticamente a partir da análise estática de `src/` e `package.json`.",
    archTitle: "Resumo da Arquitetura",
    colLayer: "Camada",
    colCount: "Quantidade",
    colRef: "Referência",
    layerVue: "Componentes Vue (`.vue`)",
    layerMiddleware: "Middleware / API (`.js`)",
    layerRouter: "Router / Rotas (`.js`)",
    layerStore: "Store / Vuex (`.js`)",
    scriptsTitle: "Scripts do Projeto",
    colCmd: "Comando",
    colRun: "Execução",
    noPkg: "_`package.json` não encontrado._",
    vueTitle: "Componentes Vue",
    vueTotal: (n) => `Total de componentes mapeados: **${n}**.`,
    foldersTitle: "Pastas",
    colComp: "Componente",
    colFile: "Arquivo",
    colProps: "Props",
    colEmits: "Eventos (`$emit`)",
    colMethods: "Métodos",
    jsTitle: "Módulos JavaScript",
    jsTotal: (n) => `Total de arquivos mapeados: **${n}**.`,
    labelDesc: "Descrição",
    labelVuex: "Estrutura Vuex",
    labelRoutes: "Rotas",
    labelFuncs: "Funções/Métodos",
    layers: {
      middleware: "Middleware / API",
      router: "Router (Rotas)",
      store: "Store (Vuex)",
      other: "Outros",
    },
  },
};

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

  return {
    filePath,
    group: path.posix.dirname(filePath),
    name,
    doc: extractLeadingJsDoc(script),
    props,
    emits: [...emits].sort(),
    methods,
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

  let layerKey = "other";
  if (filePath.startsWith("src/middleware/")) layerKey = "middleware";
  else if (filePath.startsWith("src/router/")) layerKey = "router";
  else if (filePath.startsWith("src/store/")) layerKey = "store";

  return {
    filePath,
    layerKey,
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

function generateIndexDoc(vueInfos, jsInfos, t) {
  let scriptsSection = t.noPkg;
  if (fs.existsSync("package.json")) {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const scripts = Object.entries(pkg.scripts || {});
    if (scripts.length > 0) {
      scriptsSection = [
        `| ${t.colCmd} | ${t.colRun} |`,
        "| --- | --- |",
        ...scripts.map(([k, v]) => `| \`npm run ${k}\` | \`${v}\` |`),
      ].join("\n");
    }
  }

  const byLayer = groupBy(jsInfos, (item) => item.layerKey);
  const summaryRows = [
    `| ${t.layerVue} | ${vueInfos.length} | [${t.vueFile}](./${t.vueFile}) |`,
    `| ${t.layerMiddleware} | ${(byLayer.get("middleware") || []).length} | [${t.jsFile}](./${t.jsFile}) |`,
    `| ${t.layerRouter} | ${(byLayer.get("router") || []).length} | [${t.jsFile}](./${t.jsFile}) |`,
    `| ${t.layerStore} | ${(byLayer.get("store") || []).length} | [${t.jsFile}](./${t.jsFile}) |`,
  ].join("\n");

  return `${t.langSwitch}

# ${t.indexTitle}

> ${t.indexNote}

## ${t.archTitle}

| ${t.colLayer} | ${t.colCount} | ${t.colRef} |
| --- | :---: | --- |
${summaryRows}

## ${t.scriptsTitle}

${scriptsSection}
`;
}

function generateVueDoc(vueInfos, t) {
  const grouped = groupBy(vueInfos, (item) => item.group);
  const toc = [...grouped.entries()]
    .map(([group, items]) => `- \`${group}\` (${items.length})`)
    .join("\n");

  const blocks = [];
  for (const [group, items] of grouped.entries()) {
    blocks.push(`## \`${group}\``);
    blocks.push(
      `| ${t.colComp} | ${t.colFile} | ${t.colProps} | ${t.colEmits} | ${t.colMethods} |`,
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

  return `${t.vueLangSwitch}

# ${t.vueTitle}

${t.vueTotal(vueInfos.length)}

## ${t.foldersTitle}
${toc}

${blocks.join("\n")}
`;
}

function generateJsDoc(jsInfos, t) {
  const order = ["middleware", "router", "store", "other"];
  const grouped = groupBy(jsInfos, (item) => item.layerKey);
  const blocks = [];

  for (const layerKey of order) {
    const items = grouped.get(layerKey);
    if (!items || items.length === 0) continue;

    blocks.push(`## ${t.layers[layerKey]}`);
    for (const info of items) {
      blocks.push(`### \`${info.filePath}\``);
      if (info.doc) blocks.push(`- **${t.labelDesc}:** ${info.doc}`);
      if (info.vuexKeys.length > 0) {
        blocks.push(
          `- **${t.labelVuex}:** ${info.vuexKeys.map((k) => `\`${k}\``).join(", ")}`
        );
      }
      if (info.routes.length > 0) {
        blocks.push(
          `- **${t.labelRoutes}:** ${info.routes.map((r) => `\`${r}\``).join(", ")}`
        );
      }
      if (info.functions.length > 0) {
        blocks.push(
          `- **${t.labelFuncs}:** ${info.functions.map((f) => `\`${f}\``).join(", ")}`
        );
      }
      blocks.push("");
    }
  }

  return `${t.jsLangSwitch}

# ${t.jsTitle}

${t.jsTotal(jsInfos.length)}

${blocks.join("\n")}`;
}

function main() {
  const vueFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".vue"));
  const jsFiles = listFilesRecursive(SRC_DIR, (p) => p.endsWith(".js"));

  const vueInfos = vueFiles.map(extractVueInfo);
  const jsInfos = jsFiles.map(extractJsInfo);

  fs.mkdirSync(DOCS_DIR, { recursive: true });

  for (const t of [I18N.en, I18N.pt]) {
    fs.writeFileSync(
      path.join(DOCS_DIR, t.indexFile),
      generateIndexDoc(vueInfos, jsInfos, t),
      "utf8"
    );
    fs.writeFileSync(
      path.join(DOCS_DIR, t.vueFile),
      generateVueDoc(vueInfos, t),
      "utf8"
    );
    fs.writeFileSync(
      path.join(DOCS_DIR, t.jsFile),
      generateJsDoc(jsInfos, t),
      "utf8"
    );
  }

  console.log(
    `Documentação multilíngue (EN / PT-BR) gerada em ${DOCS_DIR}/ (${vueFiles.length} componentes Vue, ${jsFiles.length} módulos JS).`
  );
}

main();
