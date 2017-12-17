<template>
  <ol-map>
    <boxmap></boxmap>
  </ol-map>
</template>

<script>
  import OlMap from '../components/Mapa.vue'
  import BoxMap from '../components/BoxMap.vue'

  export default {
    components: {
      OlMap,
      'boxmap': BoxMap,
    }
  }
</script>
