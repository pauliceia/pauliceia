import icon_ext from './../../images/iconExtrapolate.png'
import icon_geo from './../../images/iconGeocoding.png'
import icon_loc from './../../images/iconGeolocation.png'

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

const placeStyleSearch1 = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 1,
      src: icon_loc
  }))
})

const placeStyleSearch0 = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 1,
      src: icon_ext
  }))
})

const placeStyleSearch3 = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 45],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 1,
      src: icon_geo
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
  placeStyleSearch1,
  placeStyleSearch3,
  placeStyleSearch0,
  emptyStyle
}
