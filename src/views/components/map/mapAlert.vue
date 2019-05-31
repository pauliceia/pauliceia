<template>
  <section class="boxS" v-show="boxAlert">
    <header class="header">
      <img src="@/views/assets/images/logo.png" class="img">
      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
      <br>
    </header>
    <p><b> 
      {{ $t('map.betaVersionModal.welcome') }}
    </b></p>
    <p class="text1">
      {{ $t('map.betaVersionModal.betaVersion') }}
    </p>
    <div v-html="$t('map.betaVersionModal.body')"/>
    <p style="text-align: right">
      {{ $t('map.betaVersionModal.footnote') }}
    </p>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Vue from 'vue'

  export default {
    name: "mapAlert",

    computed: {
      ...mapState('map', ['boxAlert'])
    },

    data() {
      return {
      }
    },
    methods: {
      closeBox() {
        this.$store.dispatch('map/setBoxAlert', false)
      },
    }
  }
</script>

<style lang="sass" scoped>
  .boxS
    position: absolute
    display: inline-block
    vertical-align: middle
    top: 125px
    left: 20%
    width: 60%
    border-radius: 10px
    padding: 30px
    background: rgba(255, 255, 255, 0.95)
    z-index: 99


    .header
      width: 100%
      border-bottom: 0px solid #f15a29
      display: flex
      justify-content: center
      padding-bottom: 20px
      h1
        padding: 5px 5px 10px 5px
        font-size: 1.3em
        font-weight: 400
        font-family: 'Roboto' !important
        display: inline-block
        margin: 0 !important
        color: #000000

      .img
        width: 250px
        height: 120px

      .btn
        margin: 3px !important
        padding: 2px !important
        background: none
        font-size: 1em
        border: none
        float: right
        right: 20px
        position: absolute

      .btn:hover
        background: rgba(#000, 0.1)

    .text1
      color: #ff6107
      font-size: 30px
      text-align: center
      padding: 5px

</style>
