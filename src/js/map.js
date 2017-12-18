const overlayGroupBase = new ol.layer.Group({
  'title': 'Base maps',
  layers: [
    new ol.layer.Tile({
      title: 'OSM',
      type: 'base',
      source: new ol.source.OSM()
    })
  ]
})

const overlayGroup = new ol.layer.Group({
  title: 'Overlays',
  layers: []
})

export {
  overlayGroupBase,
  overlayGroup,
}
