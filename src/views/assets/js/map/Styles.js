// const placeStyle = new ol.style.Style({
//   image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
//     anchor: [0.5, 46],
//     anchorXUnits: 'fraction',
//     anchorYUnits: 'pixels',
//     src: 'https://openlayers.org/en/v4.4.2/examples/data/icon.png'
//   }))
// })

import icon from './../../images/iconLocation.png'

const pointStyle = new ol.style.Style({
  image: new ol.style.Circle({
      radius: 8,
      stroke: new ol.style.Stroke({
          color: 'white',
          width: 2
      }),
      fill: new ol.style.Fill({
          color: '#ff9999'
      })
  })
});

const polygonStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: '#000000',
    width: 3
  }),
  fill: new ol.style.Fill({
    color: 'rgba(255,255,255,0.2)'
  })
});

const placeStyleSearch = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 1,
      src: icon
  }))
})

const lineStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    //NOT put 'string color', put 'hexadecimal color'
    color: '#0000ff',
    width: 3
  })
})

const emptyStyle = new ol.style.Style({
  display: 'none'
})

export {
  pointStyle,
  polygonStyle,
  lineStyle,
  placeStyleSearch,
  emptyStyle
}
