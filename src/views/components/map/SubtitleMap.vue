<template>
  <section class="boxS" v-show="boxSubtitle">
    <header>
      <h1> {{ $t('map.geocoding.label.title') }} </h1>
      <button @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
    </header>

    <br>

    <p>
      <img src='@/views/assets/images/iconGeolocation.png'/>
      &ensp; {{ $t('map.geocoding.label.found') }}
    </p>
    <p style="page-break-before: always">
      <img src= '@/views/assets/images/iconGeocoding.png'/>
      &ensp; {{ $t('map.geocoding.label.geocoded') }}
    </p>
    <p style="page-break-before: always">
      <img src= '@/views/assets/images/iconExtrapolate.png'/>
      &ensp; {{ $t('map.geocoding.label.extrapolated') }}
    </p>
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
  data () {
    return {}
  },
  methods: {
    closeBox() {
      this.$store.dispatch('map/setBoxSubtitle', false)
    }
  }
}
</script>

<style lang="sass" scoped>
.boxS
  position: absolute
  display: inline-block
  bottom: 50px
  right: 60px
  width: 180px
  height: 180px
  border-radius: 10px
  padding: 10px
  background: rgba(255, 255, 255, 0.8)
  z-index: 99

section
  header
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

    button
      margin: 3px !important
      padding: 2px !important
      background: none
      font-size: 1em
      border: none
      float: right
      display: inline-block

    button:hover
      background: rgba(#000, 0.1)

  p
    img
      position: relative
      top: -10px
      height: 36px
      width: 24px
      float: left
</style>
