**Idioma:** [🇺🇸 English](./README.md) | 🇧🇷 Português

# Documentação Técnica — Pauliceia 2.0

> Catálogo gerado automaticamente a partir da análise estática de `src/` e `package.json`.

## Resumo da Arquitetura

| Camada | Quantidade | Referência |
| --- | :---: | --- |
| Componentes Vue (`.vue`) | 51 | [componentes-vue.md](./componentes-vue.md) |
| Middleware / API (`.js`) | 6 | [modulos-js.md](./modulos-js.md) |
| Router / Rotas (`.js`) | 4 | [modulos-js.md](./modulos-js.md) |
| Store / Vuex (`.js`) | 7 | [modulos-js.md](./modulos-js.md) |

## Scripts do Projeto

| Comando | Execução |
| --- | --- |
| `npm run dev` | `webpack-dev-server --progress --config build/webpack.dev.conf.js` |
| `npm run start` | `npm run dev` |
| `npm run build` | `node build/build.js` |
| `npm run lint` | `npm run lint:prettier && npm run lint:eslint` |
| `npm run lint:prettier` | `prettier . --write --log-level warn` |
| `npm run lint:eslint` | `eslint --fix` |
