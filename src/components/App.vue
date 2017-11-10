<template>
  <section class="is-flex">
    <navigation></navigation>
    <router-view></router-view>
  </section>
</template>

<script>
  import Navigation from './Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss" scoped>
  section {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
