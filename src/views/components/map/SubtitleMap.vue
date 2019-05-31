<template>
  <section class="boxS" v-show="boxSubtitle">
    <header class="header">
      <h1> {{ $t('map.geocoding.label.title') }} </h1>
      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
    </header>
    <br>
    <p>
      <img src='@/views/assets/images/iconGeolocation.png'
            name="Image1" align="left" width="24" height="36" 
            border="0" class="img-style"/>
      &ensp; {{ $t('map.geocoding.label.found') }}
    </p>

    <p style="page-break-before: always">
      <img src= '@/views/assets/images/iconGeocoding.png'
            name="Image2" align="left" width="24" height="36"
            border="0" class="img-style"/>
      &ensp; {{ $t('map.geocoding.label.geocoded') }}
    </p>

    <p style="page-break-before: always">
      <img src= '@/views/assets/images/iconExtrapolate.png'
            name="Image3" align="left" width="24" height="36" 
            border="0" class="img-style"/>
      &ensp; {{ $t('map.geocoding.label.extrapolated') }}
    </p>
  </section>
</template>

<script>
  import {mapState} from 'vuex'

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
    top: 550px
    right: 60px
    width: 180px
    height: 180px
    border-radius: 10px
    padding: 10px
    background: rgba(255, 255, 255, 0.8)
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
        color: #000000

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

  .img-style
    position: relative
    top: -10px

</style>
