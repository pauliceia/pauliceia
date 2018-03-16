<template>
  <div id="contentSlider">
    <div class="sliders" id="slider"></div>
  </div>
</template>

<script>
  import noUiSlider from 'nouislider'
  import { mapState } from 'vuex'
  import {
    overlayGroup
  } from '@/views/assets/js/map/overlayGroup'
  import {
    placeStyle,
    streetsStyle,
    emptyStyle
  } from '@/views/assets/js/map/Styles'

  export default {
    name: 'Timeline',
    data () {
      return {}
    },
    computed: {
      ...mapState('map', ['years'])
    },
    mounted () {
      let slider = document.getElementById('slider')

      noUiSlider.create(slider, {
        start: [1868, 1940],
        connect: true,
        orientation: 'horizontal',
        step: 1,
        //margin: 20, // Handles must be at least 300 apart
        //limit: 50, // ... but no more than 600
        tooltips: true,
        direction: 'ltr',
        range: {
          'min': 1868,
          'max': 1940
        },
        pips: {
          mode: 'count',
          values: 5,
          density: 4
        },
        format: {
          to: function (value) {
            return value + ''
          },
          from: function (value) {
            return value.replace(',-', '')
          }
        }
      })

      const vm = this
      slider.noUiSlider.on('update', function (values, handle) {
        vm.$store.dispatch('map/setYears', {
          first: values[0],
          last: values[1]
        })
        vm.filterUpdate()
      })

    },
    methods: {
      filterUpdate () {
        let yearFirst = this.years.first
        let yearLast = this.years.last

        let filtered, filtered2

        overlayGroup.getLayers().forEach(sublayer => {
          if (sublayer.get('title') === 'Streets') {
            filtered2 = sublayer.getSource().getFeatures().filter(featuresStreets => {
              let last_year2 = featuresStreets.get('last_year')
              if (last_year2 === null) last_year2 = 1940
              if (featuresStreets.get('first_year') <= yearLast && last_year2 >= yearFirst) {
                featuresStreets.setStyle(streetsStyle)
              }
              else {
                featuresStreets.setStyle(emptyStyle)
              }
            })
          } else if (sublayer.get('title') === 'Places') {
            filtered = sublayer.getSource().getFeatures().filter(featuresPlaces => {
              let last_year2 = featuresPlaces.get('last_year')
              if (last_year2 === null) last_year2 = 1940
              if (featuresPlaces.get('first_year') <= yearLast && last_year2 >= yearFirst) {
                featuresPlaces.setStyle(placeStyle)
              }
              else {
                featuresPlaces.setStyle(emptyStyle)
              }
            })
          }
        })
      }
    }
  }
</script>

<style>
  @import "~nouislider/distribute/nouislider.css";

  #contentSlider {
    position: absolute;
    display: flex;
    z-index: 10;
    bottom: 35px;
    height: 65px;
    width: 40%;
    background-color: rgba(255, 255, 255, 0.7);
    right: 30%;
    border-radius: 10px;
  }

  #contentSlider .sliders{
    position: relative;
    width: 84%;
    height: 10px;
    margin-left: 8%;
    bottom: -10px;
  }

  #contentSlider .sliders .noUi-connect{
    background: #58595b !important;
  }
        
</style>
