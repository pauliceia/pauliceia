<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
module.exports = {
  name: "OlMap",
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
  data() {
    return {
      olmap: null,
      view: new ol.View({
        projection: 'EPSG:4326',
        center: this.center,
        zoom: this.zoom,
        maxZoom: 21,
        minZoom: 2
      }),
      layersBase: {
        osm : new ol.layer.Tile({
          source: new ol.source.OSM(),
          visible: true,
          name: 'openstreetmap'
        })
      }
    }
  },
  mounted() {
    this.$root.olmap = new ol.Map({
        target: this.$el,
        loadTilesWhileAnimating: true,
        controls: ol.control.defaults().extend([
          new ol.control.ScaleLine(),
          new ol.control.ZoomSlider()
        ]),
        renderer: 'canvas',
        layers: [this.layersBase.osm],
        view: this.view
    });
  }
}
</script>

<style>
</style>