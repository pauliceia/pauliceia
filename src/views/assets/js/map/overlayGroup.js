import 'openlayers/dist/ol-debug.js'

const overlayGroupBase = new ol.layer.Group({
  title: 'overlays_base',
  layers: []
})

const overlayGroupRasters = new ol.layer.Group({
  title: 'overlays_rasters',
  layers: []
})

const overlayGroupExternal = new ol.layer.Group({
  title: 'overlays_external',
  layers: []
})

const overlayGroup = new ol.layer.Group({
  title: 'overlays',
  layers: []
})

export {
  overlayGroupBase,
  overlayGroupRasters,
  overlayGroupExternal,
  overlayGroup
}
