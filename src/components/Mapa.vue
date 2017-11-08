<template>
  <div id="mapa"></div>
</template>

<script>
  /* global ol */

  export default {
    data () {
      return {
        name: 'OlMap',
        olmap: null,
        view: new ol.View({
          projection: 'EPSG:4326'
        }),
        layersBase: {
          osm: new ol.layer.Tile({
            source: new ol.source.OSM(),
            visible: true,
            name: 'openstreetmap'
          })
        }
      }
    },
    mounted () {
      this.$root.olmap = new ol.Map({
        target: this.$el,
        layers: [
          this.layersBase.osm
        ],
        view: this.view
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~openlayers/css/ol.css";

  #mapa {
    height: 100%;
  }
</style>
