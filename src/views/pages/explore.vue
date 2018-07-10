<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
      <p-geocoding></p-geocoding>
      <p-layersRaster></p-layersRaster>
      <p-sidebar></p-sidebar>
      
      <p-boxinfolayer></p-boxinfolayer>
      <p-boxinfovector></p-boxinfovector>
      <p-boxnotifications></p-boxnotifications>
    </ol-map>

  </section>
</template>

<script>
  import OlMap from '@/views/components/map/Ol-map'
  import Timeline from '@/views/components/map/Timeline'
  import Geocoding from '@/views/components/map/Geocoding'
  import LayersRaster from '@/views/components/map/LayersRaster'
  import Sidebar from '@/views/components/map/Sidebar'

  import BoxInfoLayer from '@/views/components/map/BoxInfoLayer'
  import BoxInfoVector from '@/views/components/map/BoxInfoVector'
  import BoxInfoNotifications from '@/views/components/map/BoxNotifications'

  import {
    placeStyle,
    streetsStyle
  } from '@/views/assets/js/map/Styles'

  import {
    overlayGroupExternal,
    overlayGroup
  } from '@/views/assets/js/map/overlayGroup'

  export default {
    components: {
      'ol-map': OlMap,
      'p-timeline': Timeline,
      'p-geocoding': Geocoding,
      'p-layersRaster': LayersRaster,
      'p-sidebar': Sidebar,
      'p-boxinfolayer': BoxInfoLayer,
      'p-boxinfovector': BoxInfoVector,
      'p-boxnotifications': BoxInfoNotifications
    },
    created () {
      let vectorLayerStreets = new ol.layer.Vector({
        title: 'Streets',
        source: new ol.source.Vector({
          url: process.env.urlGeoserver+'/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:streets&outputFormat=application/json',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: streetsStyle,
        zIndex: 0
      });

      let vectorLayerPlaces = new ol.layer.Vector({
        title: 'Places',
        source: new ol.source.Vector({
          url: process.env.urlGeoserver+'/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:places&outputFormat=application/json',
          format: new ol.format.GeoJSON(),
          crossOrigin: 'anonymous',
        }),
        style: placeStyle
      });

      let osm = new ol.layer.Tile({
        title: 'OSM',
        source: new ol.source.OSM()
      })

      overlayGroupExternal.getLayers().clear();  
      overlayGroupExternal.getLayers().push(
        osm
      )
      
      overlayGroup.getLayers().clear();
      overlayGroup.getLayers().push(
        vectorLayerStreets
      )
      overlayGroup.getLayers().push(
        vectorLayerPlaces
      )

    }
  }
</script>

<style lang="sass">
  .map
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 85px
    background: #fff
  
  .ol-zoomslider-thumb, .ol-scale-line, .ol-zoom-in, .ol-zoom-out
    background: rgba(#58595b, 0.7) !important
  .ol-zoomslider-thumb:hover, .ol-zoom-in:hover, .ol-zoom-out:hover
    background: rgba(#58595b, 0.9) !important
</style>
