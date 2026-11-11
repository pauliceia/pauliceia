# Pauliceia 2.0 — Front-end

![Vue.js](https://img.shields.io/badge/Vue.js-2.7.16-4FC08D?logo=vuedotjs&logoColor=white)
![OpenLayers](https://img.shields.io/badge/OpenLayers-9.2.4-1F6B75?logo=openlayers&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5.94.0-8DD6F9?logo=webpack&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.6.0-339933?logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%3E%3D10.8.2-CB3837?logo=npm&logoColor=white)

Web front-end application for the **Pauliceia 2.0** platform, an open and collaborative historical mapping project of the city of São Paulo (1870–1940), developed in partnership between **UNIFESP**, **INPE**, **Arquivo Público do Estado de São Paulo**, and **Emory University** (supported by FAPESP).

The interface enables users to explore georeferenced historical maps, search historical addresses across time (historical geocoding), filter features by time period, and contribute new cartographic layers (_Volunteered Geographic Information_ — VGI).

---

## 🛠️ Core Technologies

- **Vue.js 2.7** + **Vuex** + **Vue Router** (SPA architecture and state management)
- **OpenLayers 9** (rendering and manipulation of vector and raster geographic layers)
- **Element UI**, **Vue Material**, and **Bootstrap 5** (UI components and layout)
- **Axios** (integration with VGI API, Geocoding API, and GeoServer)
- **Webpack 5** (bundling, development server, and production builds)
- **ESLint 9** + **Prettier** + **EditorConfig** (code standardization and quality)

---

## 📋 Dependencies

Make sure you have the following installed:

- **Node.js**: `>= 22.6.0`
- **NPM**: `>= 10.8.2`

You can install these versions globally or manage multiple Node versions using [NVM](https://github.com/nvm-sh/nvm).

---

## ⚙️ Install & Configuration

Create the `config/prod.env.js` configuration file from the example template and install dependencies:

```bash
$ cp config/prod.env.js.EXAMPLE config/prod.env.js
$ npm i
```

### Environment Variables (`config/prod.env.js`)

| Variable                | Description                                         | Default Value (Example)                                  |
| :---------------------- | :-------------------------------------------------- | :------------------------------------------------------- |
| `NODE_ENV`              | Execution environment                               | `"production"`                                           |
| `urlVGI`                | Collaborative data REST API (VGI) endpoint          | `"http://www.pauliceia.dpi.inpe.br/api/vgi"`             |
| `urlGeocoding`          | Historical geocoding service endpoint               | `"http://www.pauliceia.dpi.inpe.br/api/geocoding"`       |
| `urlGeoserverPauliceia` | Primary GeoServer workspace (official & VGI layers) | `"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"` |
| `urlGeoserveOther`      | Secondary GeoServer workspace                       | `"http://www.pauliceia.dpi.inpe.br/geoserver/other"`     |
| `keyCripto`             | Auxiliary key used for client-side routines         | `"keytest"`                                              |

---

## 🚀 Run & Available Scripts

Run locally in development mode with hot-reload:

```bash
$ npm start
# or
$ npm run dev
```

Access the application at: **http://localhost:8080**

### All Scripts (`package.json`)

| Command                     | Description                                                                              |
| :-------------------------- | :--------------------------------------------------------------------------------------- |
| `npm start` / `npm run dev` | Starts the development server (`webpack-dev-server`) with hot-reload on `localhost:8080` |
| `npm run build`             | Builds the optimized and minified production bundle into `dist/`                         |
| `npm run build --report`    | Builds for production and opens the visual bundle analyzer report                        |
| `npm run lint`              | Runs Prettier formatting and ESLint static analysis/autofix in sequence                  |
| `npm run lint:prettier`     | Automatically formats project files using Prettier                                       |
| `npm run lint:eslint`       | Checks and autofixes code issues using ESLint 9                                          |

---

## 📚 Documentation & Architecture

To understand how the source code is organized (`src/middleware`, `src/store`, `src/router`, `src/views`) and how the front-end interacts with OpenLayers and platform APIs, check out:

- 🏛️ **[Architecture & Folder Structure (`docs/architecture.md`)](docs/architecture.md)**

---

## 🤝 Contributing

Contributions are welcome! Before opening an Issue, creating a branch, or submitting a Pull Request:

1. Read our centralized naming conventions and contribution workflow in **[CONTRIBUTING.md (`pauliceia/issues`)](https://github.com/pauliceia/issues/blob/master/CONTRIBUTING.md)**.
2. Make sure your code adheres to the project's formatting and lint rules by running `npm run lint` before pushing changes.
