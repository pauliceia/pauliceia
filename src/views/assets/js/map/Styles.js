import icon_ext from './../../images/iconExtrapolate.png'
import icon_geo from './../../images/iconGeocoding.png'
import icon_loc from './../../images/iconGeolocation.png'


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

const emptyStyle = new ol.style.Style({
  display: 'none'
})

export {
  placeStyleSearch1,
  placeStyleSearch3,
  placeStyleSearch0,
  emptyStyle
}
