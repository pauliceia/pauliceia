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
        startYear: 1886,
        endYear: 1970,
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
      hasAlreadyBeenSavedTheTemporalColumns (f_table_name) {
        // check if a tc exists inside the list by `f_table_name`, it returns a boolean
        return this.loadedTC.some(tc => tc.properties.f_table_name === f_table_name)
      },
      updateFeatureVisibility (vectorLayerFeatures, tc) {
        let minYear = this.years.first
        let maxYear = this.years.last

        vectorLayerFeatures.forEach(feature => {
          let startDate = new Date(String(feature.getProperties()[tc.properties.start_date_column_name])).getFullYear()
          let endDate = new Date(String(feature.getProperties()[tc.properties.end_date_column_name])).getFullYear()

          if(startDate-5 < this.startYear)
            this.startYear = startDate-5

          if(endDate+5 > this.startYear)
            this.endYear = endDate+5

          //if(isNaN(startDate)) startDate = 0
          //if(isNaN(endDate)) endDate = (new Date).getFullYear()

          if(isNaN(startDate))
            startDate = new Date(String(tc.properties.start_date)).getFullYear()

          if(isNaN(endDate))
            endDate = new Date(String(tc.properties.end_date)).getFullYear()

          if (startDate <= maxYear && endDate >= minYear) {
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

          // if the tc has already been loaded, then use it and not request it again
          if (this.hasAlreadyBeenSavedTheTemporalColumns(f_table_name)) {

            for (let tc of this.loadedTC) {
              if (tc.properties.f_table_name === f_table_name) {
                this.updateFeatureVisibility(vectorLayerFeatures, tc)
                break;
              }
            }

          // if the tc has not already been loaded, then request it
          } else {

            Api().get('/api/temporal_columns/?f_table_name=' + f_table_name).then(result => {
              let tc = result.data.features[0]

              // if the tc has not already been saved in the list, then save it
              if (!this.hasAlreadyBeenSavedTheTemporalColumns(f_table_name)) {
                // add a tc to a list of loaded tc in order to avoid to request the tc again
                this.loadedTC.push(tc)
              }

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
