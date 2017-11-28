<template>
  <div id="meu-mapa"></div>
</template>

<script>
  /* global ol */

  export default {
    data () {
      return {
        name: 'OlMap',
        olmap: null,
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [-46.63576816, -23.54308645],
          zoom: 14.98
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

  #meu-mapa {
    flex-grow: 1;
    overflow: hidden;
  }
</style>
