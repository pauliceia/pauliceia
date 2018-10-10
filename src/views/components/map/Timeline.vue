<template>
  <div id="contentSlider">
    <div class="sliders" id="slider"></div>
  </div>
</template>

<script>
  import noUiSlider from 'nouislider'
  import { mapState } from 'vuex'
  import Api from '@/middleware/ApiVGI'
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
        style: null,
        startYear: 1886,
        endYear: 1970,
      }
    },
    computed: {
      ...mapState('map', ['years'])
    },
    mounted () {
      let slider = document.getElementById('slider')
      //this.filterUpdate()
      noUiSlider.create(slider, {
        start: [this.startYear, this.endYear],
        connect: true,
        orientation: 'horizontal',
        step: 1,
        tooltips: true,
        direction: 'ltr',
        range: {
          'min': this.startYear,
          'max': this.endYear
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
        const vm = this
        let yearFirst = this.years.first
        let yearLast = this.years.last

        overlayGroup.getLayers().forEach(sublayer => {
          Api().get('/api/temporal_columns/?f_table_name='+sublayer.values_.title).then(function (tc) {

            console.log(tc.data.features[0].properties.end_date)
            console.log(tc.data.features[0].properties.start_date)

            sublayer.getSource().getFeatures().forEach(feature => {

              let startDate = new Date(String(feature.getProperties()[tc.data.features[0].properties.start_date_column_name])).getFullYear()
              let endDate = new Date(String(feature.getProperties()[tc.data.features[0].properties.end_date_column_name])).getFullYear()

              if(startDate-5 < vm.startYear) vm.startYear = startDate-5
              if(endDate+5 > vm.startYear) vm.endYear = endDate+5


              //if(isNaN(startDate)) startDate = 0
              //if(isNaN(endDate)) endDate = (new Date).getFullYear()

              if(isNaN(startDate)) startDate = new Date(String(tc.data.features[0].properties.start_date)).getFullYear()
              if(isNaN(endDate)) endDate = new Date(String(tc.data.features[0].properties.end_date)).getFullYear()

              if (startDate <= yearLast && endDate >= yearFirst) {
                feature.setStyle(vm.style)
              } else {
                feature.setStyle(emptyStyle)
              }
            })
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
