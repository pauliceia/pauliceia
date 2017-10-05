<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <a class="navbar-item" href="/">
        <h1 class="is-size-4">Pauliceia 2.0</h1>
      </a>
    </section>
    <img :src="logo" alt="Logo"/>
    <section id="navMenubd-example" class="navbar-end">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Pesquisar
        </a>
        <sobre class="navbar-item"></sobre>
      </div>
    </section>
  </nav>
</template>

<script>
  import Sobre from "./Sobre.vue"
  import Logo from "../img/logo.png"

  export default {
    name: "navbar",
    components: {
      "sobre": Sobre,
    },
    data() {
      return {
        "logo": Logo,
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
