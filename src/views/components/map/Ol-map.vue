<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import {
    overlayGroupGeolocation,
    overlayGroupExternal,
    overlayGroupRasters,
    overlayGroupOther,
    overlayGroup
  } from '@/views/assets/js/map/overlayGroup'

  export default {
    name: 'OlMap',
    props: {
      center: {
        type: Array,
        default: _ => [-46.63665134071729, -23.543103484961193]
      },
      zoom: {
        type: [Number, String],
        default: '15'
      }
    },
    data () {
      return {
        olmap: null,
        view: new ol.View({
          projection: 'EPSG:4326',
          center: this.center,
          zoom: this.zoom,
          maxZoom: 21,
          minZoom: 2
        })
      }
    },
    mounted () {
      this.$root.olmap = new ol.Map({
        target: this.$el,
        loadTilesWhileAnimating: true,
        controls: ol.control.defaults().extend([
          new ol.control.ScaleLine()
        ]),
        layers: [
          overlayGroupExternal,
          overlayGroupRasters,
          overlayGroupOther,
          overlayGroup,
          overlayGroupGeolocation
        ],
        view: this.view
      })
    }
  }
</script>

<style lang="sass" scoped>
</style>
