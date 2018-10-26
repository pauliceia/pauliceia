<template>
  <section class="boxS" v-show="boxSubtitle">
    <header class="header">
      <h1>Subtitle</h1>
      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
    </header>
    <br>
    Teste2
    <br>
  </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "SubtitleMap",

        props: ['subShow'],

        computed: {
          ...mapState('map', ['boxSubtitle'])
        },

        data: function () {
          return {

          }
        },
        methods: {
          closeBox() {
            this.$store.dispatch('map/setBoxSubtitle', false)
          },
        }
    }
</script>

<style lang="sass" scoped>
  .boxS
    position: absolute
    display: inline-block
    top: 500px
    right: 0px
    width: 200px
    height: 150px
    border-radius: 10px
    padding: 10px
    background: rgba(87,87,87,0.75)
    z-index: 99

    .header
      width: 100%
      border-bottom: 1px solid #f15a29
      h1
        padding: 5px 5px 10px 5px
        font-size: 1.3em
        font-weight: 400
        font-family: 'Roboto' !important
        display: inline-block
        margin: 0 !important
        color: white

      .btn
        margin: 3px !important
        padding: 2px !important
        background: none
        font-size: 1em
        border: none
        float: right
        display: inline-block
      .btn:hover
        background: rgba(#000, 0.1)


</style>
