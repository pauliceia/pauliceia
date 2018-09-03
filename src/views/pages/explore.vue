<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
      <p-geocoding></p-geocoding>
      <p-layersRaster></p-layersRaster>
      <p-sidebarLayer></p-sidebarLayer>
      <!--<p-sidebarEdit></p-sidebarEdit>-->
      
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
  import SidebarLayer from '@/views/components/map/SidebarLayer'
  import SidebarEdit from '@/views/components/map/SidebarEdit'

  import BoxInfoLayer from '@/views/components/map/BoxInfoLayer'
  import BoxInfoVector from '@/views/components/map/BoxInfoVector'
  import BoxInfoNotifications from '@/views/components/map/BoxNotifications'

  import {
    pointStyle,
    lineStyle
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
      'p-sidebarLayer': SidebarLayer,
      'p-sidebarEdit': SidebarEdit,
      'p-boxinfolayer': BoxInfoLayer,
      'p-boxinfovector': BoxInfoVector,
      'p-boxnotifications': BoxInfoNotifications
    },

    created () {
      let osm = new ol.layer.Tile({
        title: 'OSM',
        source: new ol.source.OSM()
      })

      // let google = new ol.layer.Tile({
      //   title: "GOOGLE MAPS",
      //   source:new olgm.layer.Google(),
      //   visible: false
      // }); 

      overlayGroupExternal.getLayers().clear()
      overlayGroupExternal.getLayers().push(osm)
      // overlayGroupExternal.getLayers().push(google)
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
