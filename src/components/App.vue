<template>
  <section id="app" class="is-flex">
    <navigation></navigation>
    <ol-map
        id="ol-map"
        :center="[-23.2196655, -45.8880791]"
        :zoom="4"
        :projection="projection">
    </ol-map>
  </section>
</template>

<script>
  import OpenLayers from "openlayers"
  import Navigation from "./Navigation.vue"

  export default {
    name: "app",
    components: {
      "navigation": Navigation,
    },
    data() {
      return {
        projection: OpenLayers.proj.get("EPSG:4326"),
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";
  @import "~openlayers/css/ol.css";

  html, body, #app {
    height: 100%;
    margin: 0;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #app {
    flex-direction: column;
    width: 100%;
  }

  #ol-map {
    flex-grow: 1;
    overflow: auto;
  }
</style>
