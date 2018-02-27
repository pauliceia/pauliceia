<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
      <p-geocoding></p-geocoding>
      <p-layersRaster></p-layersRaster>
      <p-layersBase></p-layersBase>
    </ol-map>

  </section>
</template>

<script>
  import OlMap from '@/views/components/map/Ol-map'
  import Timeline from '@/views/components/map/Timeline'
  import Geocoding from '@/views/components/map/Geocoding'
  import LayersRaster from '@/views/components/map/LayersRaster'
  import LayersBase from '@/views/components/map/LayersBase'

  import {
    placeStyle,
    streetsStyle
  } from '@/views/assets/js/map/Styles'

  import {
    overlayGroup
  } from '@/views/assets/js/map/overlayGroup'

  export default {
    components: {
      'ol-map': OlMap,
      'p-timeline': Timeline,
      'p-geocoding': Geocoding,
      'p-layersRaster': LayersRaster,
      'p-layersBase': LayersBase
    },
    created () {

      var vectorLayerPlaces = new ol.layer.Vector({
        title: 'Places',
        source: new ol.source.Vector({
          url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:places&outputFormat=application%2Fjson',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: placeStyle
      });

      var vectorLayerStreets = new ol.layer.Vector({
        title: 'Streets',
        source: new ol.source.Vector({
          url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:streets&outputFormat=application%2Fjson',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: streetsStyle
      });

      overlayGroup.getLayers().push(
        vectorLayerStreets
      )
      overlayGroup.getLayers().push(
        vectorLayerPlaces
      )

    }
  }
</script>

<style lang="sass" scoped>
  .map
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 69px
    background: #fff
</style>
