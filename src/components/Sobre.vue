<template>
  <a id="sobre" v-on:click="toggle_sobre">
    Sobre
    <div id="sobre-desc" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Pauliceia 2.0</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          O objetivo do Pauliceia 2.0 é desenvolver e disponibilizar na internet
          uma base cartográfica digital histórica da cidade de São Paulo
          (1870-1940), associada a uma interface que permita a interatividade de
          pesquisadores, que poderão alimentar a base com dados espaciais de
          suas próprias investigações.
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: "sobre",
    methods: {
      toggle_sobre: function () {
        document.getElementById("sobre-desc").classList.toggle("is-active")
      },
    },
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
</style>
