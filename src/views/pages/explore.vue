<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
      <p-geocoding></p-geocoding>
      <p-layersRaster></p-layersRaster>
    </ol-map>

  </section>
</template>

<script>
  import OlMap from '@/views/components/map/Ol-map'
  import Timeline from '@/views/components/map/Timeline'
  import Geocoding from '@/views/components/map/Geocoding'
  import LayersRaster from '@/views/components/map/LayersRaster'

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
      'p-layersRaster': LayersRaster
    },
    created () {

      var vectorLayerPlaces = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:places&outputFormat=application%2Fjson',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: placeStyle
      });

      var vectorLayerStreets = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:streets&outputFormat=application%2Fjson',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: streetsStyle
      });

      overlayGroup.getLayers().push(
        new ol.layer.Tile({
          title: 'SP 1930',
          visible: true,
          source: new ol.source.TileWMS({
            url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
            params: {
              'FORMAT': 'image/png',
              'VERSION': '1.1.1',
              tiled: true,
              STYLES: '',
              LAYERS: 'pauliceia:saraBrasil30',
              tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
            }
          })
        })
      )

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
