import 'openlayers/dist/ol-debug.js'

const overlayGroupBase = new ol.layer.Group({
  'title': 'Base maps',
  layers: []
})

const overlayGroupRasters = new ol.layer.Group({
  title: 'Overlays Rasters',
  layers: []
})

const overlayGroup = new ol.layer.Group({
  title: 'Overlays',
  layers: []
})

export {
  overlayGroupBase,
  overlayGroupRasters,
  overlayGroup,
}
