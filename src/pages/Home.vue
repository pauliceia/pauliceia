<template>
  <section class="container">
    <ol-map></ol-map>
  </section>
</template>

<script>
  import OlMap from '../components/Mapa.vue'

  export default {
    components: {
      OlMap,
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  section {
    height: 100%;
  }
</style>
