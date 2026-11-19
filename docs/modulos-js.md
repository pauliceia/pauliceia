**Idioma:** [🇺🇸 English](./js-modules.md) | 🇧🇷 Português

# Módulos JavaScript

Total de arquivos mapeados: **27**.

## Middleware / API
### `src/middleware/ApiGeocoding.js`

### `src/middleware/ApiVGI.js`

### `src/middleware/Dashboard.js`
- **Funções/Métodos:** `createLayer`, `createUserLayer`, `createFeatureTable`, `deleteLayer`

### `src/middleware/Edit.js`
- **Funções/Métodos:** `createChangeset`, `closeChangeset`, `deleteFeature`, `addFeature`

### `src/middleware/Map.js`
- **Funções/Métodos:** `geolocationOne`, `geolocationMultiple`, `getLayers`, `getAttrLayer`, `getKeywords`, `getReferences`, `getAuthors`, `getAuthorsLayers`, `getPlacesList`

### `src/middleware/User.js`
- **Funções/Métodos:** `login`, `getUser`, `register`, `validEmail`, `getUserByToken`

## Router (Rotas)
### `src/router/dashboard.js`
- **Rotas:** `/dashboard`, `/dashboard/profile`, `/dashboard/home`, `/dashboard/newLayer`, `/dashboard/editLayer`, `/dashboard/keywords`, `/dashboard/denunciations`

### `src/router/index.js`
- **Rotas:** `/dashboard`, `/login`

### `src/router/map.js`
- **Rotas:** `/explore`

### `src/router/routes.js`
- **Rotas:** `*`, `/`, `/about`, `/tutorial`, `/home`, `/contact`, `/login`, `/register`, `/valid/social/:token`, `/valid/email/:token`

## Store (Vuex)
### `src/store/index.js`

### `src/store/modules/auth.js`
- **Estrutura Vuex:** `state`, `mutations`, `actions`
- **Funções/Métodos:** `setToken`, `setUser`, `logoff`

### `src/store/modules/dashboard.js`
- **Estrutura Vuex:** `state`, `mutations`, `actions`
- **Funções/Métodos:** `setMyLayers`, `setSharedLayers`

### `src/store/modules/dashboardNewLayer.js`
- **Estrutura Vuex:** `state`, `mutations`, `actions`
- **Funções/Métodos:** `setName`, `setKeywords`, `setReferences`, `setCollaborators`, `setDescription`

### `src/store/modules/edit.js`
- **Estrutura Vuex:** `state`, `mutations`, `actions`
- **Funções/Métodos:** `setLayerId`, `setTypeGeometry`, `setAttr`, `setFeatureSelected`, `setChangesetId`, `setFuncSelected`, `setFeaturesWKT`

### `src/store/modules/index.js`

### `src/store/modules/map.js`
- **Estrutura Vuex:** `state`, `mutations`, `actions`
- **Funções/Métodos:** `setYears`, `setBoxGeocoding`, `setBoxSubtitle`, `setBoxAlert`, `setBoxInfoLayer`, `setBoxNotifications`, `setBoxInfoVector`, `setNewLayers`, `setRemoveLayers`, `setIdInfoLayer`, `setIdInfoFeatureLayer`, `setSidebar`

## Outros
### `src/main.js`
- **Funções/Métodos:** `inserted`

### `src/views/assets/js/indexLayersTest.js`

### `src/views/assets/js/map/Styles.js`

### `src/views/assets/js/map/multiplegeocode.js`
- **Funções/Métodos:** `CSV2JSON`, `CSVToArray`

### `src/views/assets/js/map/overlayGroup.js`

### `src/views/language/index.js`

### `src/views/language/translations/english.js`

### `src/views/language/translations/portuguese.js`

### `src/views/language/translations/termsEN.js`

### `src/views/language/translations/termsPT-BR.js`
