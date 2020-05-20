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
        sliderStartYear: 1886,
        sliderEndYear: 1970,
        // loaded temporal columns
        loadedTC: []
      }
    },
    computed: {
      ...mapState('map', ['years'])
    },
    mounted () {
      let slider = document.getElementById('slider')

      //this.filterUpdate()
      noUiSlider.create(slider, {
        start: [this.sliderStartYear, this.sliderEndYear],
        connect: true,
        orientation: 'horizontal',
        step: 1,
        tooltips: true,
        direction: 'ltr',
        range: {
          'min': this.sliderStartYear,
          'max': this.sliderEndYear
        },
        pips: {
          mode: 'count',
          values: 5,
          density: 4
        },
        format: {
          to: value => {
            return value + ''
          },
          from: value => {
            return value.replace(',-', '')
          }
        }
      })

      slider.noUiSlider.on('update', (values, handle) => {
        this.$store.dispatch('map/setYears', {
          first: values[0],
          last: values[1]
        })

        this.filterUpdate()
      })

    },
    methods: {
      getTemporalColumns (f_table_name) {
        // tcs - array with the selected temporal columns
        let tcs = this.loadedTC.filter(tc => tc.properties.f_table_name === f_table_name)

        // if array is not empty, it returns the only one element inside the array
        if (Array.isArray(tcs) && tcs.length)
          return tcs[0]
        else
          return null
      },
      updateFeatureVisibility (vectorLayerFeatures, tc) {
        let selectedMinYear = this.years.first
        let selectedMaxYear = this.years.last

        vectorLayerFeatures.forEach(feature => {
          // feature properties
          let fProperties = feature.getProperties()

          let startDate = new Date(String(fProperties[tc.properties.start_date_column_name])).getFullYear()
          let endDate = new Date(String(fProperties[tc.properties.end_date_column_name])).getFullYear()

          if(startDate-5 < this.sliderStartYear)
            this.sliderStartYear = startDate-5

          if(endDate+5 > this.sliderStartYear)
            this.sliderEndYear = endDate+5

          //if(isNaN(startDate)) startDate = 0
          //if(isNaN(endDate)) endDate = (new Date).getFullYear()

          if(isNaN(startDate))
            startDate = new Date(String(tc.properties.start_date)).getFullYear()

          if(isNaN(endDate))
            endDate = new Date(String(tc.properties.end_date)).getFullYear()

          if (startDate <= selectedMaxYear && endDate >= selectedMinYear) {
            // removes the style from the feature
            feature.setStyle(null)
          } else {
            // sets an `invisible` style to the feature
            feature.setStyle(emptyStyle)
          }
        })
      },
      filterUpdate () {
        overlayGroup.getLayers().forEach(vectorLayer => {

          let f_table_name = vectorLayer.values_.title
          let vectorLayerFeatures = vectorLayer.getSource().getFeatures()

          // try to get a `tc` again if it has already been loaded
          let tc = this.getTemporalColumns(f_table_name)

          // check if this `tc` has already been loaded (i.e. if `tc` is not null), in order to not request it again
          if (tc) {
            this.updateFeatureVisibility(vectorLayerFeatures, tc)

          // if the `tc` has not already been loaded, then request it to the server
          } else {
            Api().get('/api/temporal_columns/?f_table_name=' + f_table_name).then(result => {
              let tc = result.data.features[0]

              // add the new `tc` to a list of loaded `tc` in order to avoid to request it again
              this.loadedTC.push(tc)

              this.updateFeatureVisibility(vectorLayerFeatures, tc)
            })
          }

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
