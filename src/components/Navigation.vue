<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="is-size-4">Pauliceia 2.0 </h1>
        <img :src="logo" alt="Logo"/>
      </router-link>
    </section>
    <section class="nav-right nav-menu">
      <span class="nav-item">
          <router-link to="Sobre">Sobre</router-link>
      </span>
    </section>
  </nav>
</template>

<script>
  import Logo from '../img/logo.png'

  export default {
    name: 'navbar',
    data () {
      return {
        'logo': Logo,
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";

  #navbar {
    background-color: $primary;
  }
</style>
