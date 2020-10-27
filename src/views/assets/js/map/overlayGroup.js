import 'openlayers/dist/ol-debug.js'


const overlayGroupGeolocation = new ol.layer.Group({
  title: 'overlays_geolocation',
  layers: []
})

const overlayGroupExternal = new ol.layer.Group({
  title: 'overlays_external',
  layers: []
})

const overlayGroupRasters = new ol.layer.Group({
  title: 'overlays_rasters',
  layers: []
})

const overlayGroupOther = new ol.layer.Group({
  title: 'overlays_other',
  layers: []
})

const overlayGroup = new ol.layer.Group({
  title: 'overlays',
  layers: []
})


export {
  overlayGroupGeolocation,
  overlayGroupExternal,
  overlayGroupRasters,
  overlayGroupOther,
  overlayGroup
}
