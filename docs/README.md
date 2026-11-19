**Language:** 🇺🇸 English | [🇧🇷 Português](./README.pt-br.md)

# Technical Documentation — Pauliceia 2.0

> Catalog automatically generated from static analysis of `src/` and `package.json`.

## Architecture Summary

| Layer | Count | Reference |
| --- | :---: | --- |
| Vue Components (`.vue`) | 51 | [vue-components.md](./vue-components.md) |
| Middleware / API (`.js`) | 6 | [js-modules.md](./js-modules.md) |
| Router / Routes (`.js`) | 4 | [js-modules.md](./js-modules.md) |
| Store / Vuex (`.js`) | 7 | [js-modules.md](./js-modules.md) |

## Project Scripts

| Command | Script |
| --- | --- |
| `npm run dev` | `webpack-dev-server --progress --config build/webpack.dev.conf.js` |
| `npm run start` | `npm run dev` |
| `npm run build` | `node build/build.js` |
| `npm run lint` | `npm run lint:prettier && npm run lint:eslint` |
| `npm run lint:prettier` | `prettier . --write --log-level warn` |
| `npm run lint:eslint` | `eslint --fix` |
