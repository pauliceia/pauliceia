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
    emptyStyle
  } from '@/views/assets/js/map/Styles'

  import 'nouislider/distribute/nouislider.css'

  export default {
    name: 'Timeline',
    data () {
      return {
        style: null
      }
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

        console.log(overlayGroup)
        overlayGroup.getLayers().forEach(sublayer => {
          this.style = sublayer.getStyle()
          //console.log(sublayer)

          sublayer.getSource().getFeatures().filter(features => {
            let last_year = features.get('last_year')
            if (last_year === null) last_year = 1940
            if (features.get('first_year') <= yearLast && last_year >= yearFirst) {
              features.setStyle(this.style)
            } else {
              features.setStyle(emptyStyle)
            }
          })
        })
      }
    }
  }
</script>

<style>
  #contentSlider {
    position: absolute;
    display: flex;
    z-index: 2;
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
