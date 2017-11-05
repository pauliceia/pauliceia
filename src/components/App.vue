<template>
  <section id="app">
    <navigation></navigation>
    <section class="section">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Navigation from './Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation,
    },
  }
</script>

<style lang="scss" scoped>
  #app {
    section {
      height: 100%;
    }
  }
</style>
