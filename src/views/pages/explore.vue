<template>
  <section>

    <ol-map class="map">
      <p-timeline></p-timeline>
      <p-geocoding></p-geocoding>
      <p-sidebarLayer></p-sidebarLayer>
      <!--<p-sidebarEdit></p-sidebarEdit>-->
      
      <p-boxinfolayer></p-boxinfolayer>
      <p-boxinfovector></p-boxinfovector>
      <p-boxnotifications></p-boxnotifications>
      <p-subtitle :subShow="true"></p-subtitle>
      <p-alert></p-alert>
    </ol-map>

  </section>
</template>

<script>
  import OlMap from '@/views/components/map/Ol-map'
  import Timeline from '@/views/components/map/Timeline'
  import Geocoding from '@/views/components/map/Geocoding'
  import SidebarLayer from '@/views/components/map/SidebarLayer'
  import SidebarEdit from '@/views/components/map/SidebarEdit'
  import BoxInfoLayer from '@/views/components/map/BoxInfoLayer'
  import BoxInfoVector from '@/views/components/map/BoxInfoVector'
  import BoxInfoNotifications from '@/views/components/map/BoxNotifications'
  import SubtitleMap from '@/views/components/map/SubtitleMap'
  import MapAlert from '@/views/components/map/mapAlert'

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
      'p-sidebarLayer': SidebarLayer,
      'p-sidebarEdit': SidebarEdit,
      'p-boxinfolayer': BoxInfoLayer,
      'p-boxinfovector': BoxInfoVector,
      'p-boxnotifications': BoxInfoNotifications,
      "p-subtitle": SubtitleMap,
      "p-alert": MapAlert
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
    top: 84px
    background: #fff
  
  .ol-zoom
    display: flex !important
    top: auto !important
    bottom: 53px
    left: 35px
  .ol-zoom-in, .ol-zoom-out
    background: rgba(77,77,77, 0.7) !important
    border-radius: 3px !important
    font-size: 1.5em !important
  .ol-zoom-in
    margin-right: 5px !important
  .ol-zoom-in:hover, .ol-zoom-out:hover
    background: rgba(77,77,77, 0.9) !important

  .ol-scale-line
    left: 32px !important
    background: rgba(#FFF, 0.7)
    bottom: 15px
    .ol-scale-line-inner
      width: auto !important
      color: rgb(77,77,77)
      font-size: 0.9em
      padding: 0 5px 0 5px
      border-color: rgb(77,77,77)
</style>
