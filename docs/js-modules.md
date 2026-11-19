**Language:** 🇺🇸 English | [🇧🇷 Português](./modulos-js.md)

# JavaScript Modules

Total mapped files: **27**.

## Middleware / API
### `src/middleware/ApiGeocoding.js`

### `src/middleware/ApiVGI.js`

### `src/middleware/Dashboard.js`
- **Functions/Methods:** `createLayer`, `createUserLayer`, `createFeatureTable`, `deleteLayer`

### `src/middleware/Edit.js`
- **Functions/Methods:** `createChangeset`, `closeChangeset`, `deleteFeature`, `addFeature`

### `src/middleware/Map.js`
- **Functions/Methods:** `geolocationOne`, `geolocationMultiple`, `getLayers`, `getAttrLayer`, `getKeywords`, `getReferences`, `getAuthors`, `getAuthorsLayers`, `getPlacesList`

### `src/middleware/User.js`
- **Functions/Methods:** `login`, `getUser`, `register`, `validEmail`, `getUserByToken`

## Router (Routes)
### `src/router/dashboard.js`
- **Routes:** `/dashboard`, `/dashboard/profile`, `/dashboard/home`, `/dashboard/newLayer`, `/dashboard/editLayer`, `/dashboard/keywords`, `/dashboard/denunciations`

### `src/router/index.js`
- **Routes:** `/dashboard`, `/login`

### `src/router/map.js`
- **Routes:** `/explore`

### `src/router/routes.js`
- **Routes:** `*`, `/`, `/about`, `/tutorial`, `/home`, `/contact`, `/login`, `/register`, `/valid/social/:token`, `/valid/email/:token`

## Store (Vuex)
### `src/store/index.js`

### `src/store/modules/auth.js`
- **Vuex Structure:** `state`, `mutations`, `actions`
- **Functions/Methods:** `setToken`, `setUser`, `logoff`

### `src/store/modules/dashboard.js`
- **Vuex Structure:** `state`, `mutations`, `actions`
- **Functions/Methods:** `setMyLayers`, `setSharedLayers`

### `src/store/modules/dashboardNewLayer.js`
- **Vuex Structure:** `state`, `mutations`, `actions`
- **Functions/Methods:** `setName`, `setKeywords`, `setReferences`, `setCollaborators`, `setDescription`

### `src/store/modules/edit.js`
- **Vuex Structure:** `state`, `mutations`, `actions`
- **Functions/Methods:** `setLayerId`, `setTypeGeometry`, `setAttr`, `setFeatureSelected`, `setChangesetId`, `setFuncSelected`, `setFeaturesWKT`

### `src/store/modules/index.js`

### `src/store/modules/map.js`
- **Vuex Structure:** `state`, `mutations`, `actions`
- **Functions/Methods:** `setYears`, `setBoxGeocoding`, `setBoxSubtitle`, `setBoxAlert`, `setBoxInfoLayer`, `setBoxNotifications`, `setBoxInfoVector`, `setNewLayers`, `setRemoveLayers`, `setIdInfoLayer`, `setIdInfoFeatureLayer`, `setSidebar`

## Other
### `src/main.js`
- **Functions/Methods:** `inserted`

### `src/views/assets/js/indexLayersTest.js`

### `src/views/assets/js/map/Styles.js`

### `src/views/assets/js/map/multiplegeocode.js`
- **Functions/Methods:** `CSV2JSON`, `CSVToArray`

### `src/views/assets/js/map/overlayGroup.js`

### `src/views/language/index.js`

### `src/views/language/translations/english.js`

### `src/views/language/translations/portuguese.js`

### `src/views/language/translations/termsEN.js`

### `src/views/language/translations/termsPT-BR.js`
