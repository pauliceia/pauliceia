<template>
  <div>
    <div id="contentSlider">
      <!-- Renderiza o primeiro tipo de controle deslizante se useDoubleSlider for verdadeiro -->
      <div v-if="useDoubleSlider" class="sliders" id="doubleSlider"></div>

      <!-- Renderiza o segundo tipo de controle deslizante se useDoubleSlider for falso -->
      <div v-else class="sliders" id="singleSlider"></div>

    </div>
    

    <!-- Botão para alternar entre os tipos de controle deslizante -->
    <div class = "button">
      <button @click="toggleSliderType" id = "changeButton" >
      {{ useDoubleSlider ?  'Mudar régua' : 'Mudar régua' }}
      </button>
    </div>    

  </div>
</template>

<script>
  import Vue from 'vue'
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

  function extractYearFromDateAsString(date, default_value){
    let year = default_value
    let splittedDate = date.split('/')

    // if there is a complete date (i.e. day, month and year), I create a date object and I get its year
    if (splittedDate.length === 3) {
      year = new Date(date).getFullYear()

    // if there is just one value, I consider it as a year
    } else if (splittedDate.length === 1) {
      year = parseInt(date)

    // if there are two values, then there are month and year
    } else if (splittedDate.length === 2) {
      // I check if the first or second position is the year, by checking which one contains 4 characters
      if (splittedDate[0].length === 4)
        year = parseInt(splittedDate[0])

      else if (splittedDate[1].length === 4)
        year = parseInt(splittedDate[1])
    }

    return year
  }

  export default {
    name: 'Timeline',
    data () {
      return {
        sliderStartYear: 1886,
        sliderEndYear: 1970,
        useDoubleSlider: true,        
        // loaded temporal columns
        loadedTC: []
      }
    },
    computed: {
      ...mapState('map', ['years']),
      selectedStartYear() {
        return this.years.first
      },
      selectedEndYear(){
        return this.useDoubleSlider ? this.years.last : this.years.first
      }
    },
    
    mounted() {
      this.initializeSlider();
    },
    
    methods: {           

      toggleSliderType() {
        console.log('Clicou no botão de alternância');
        this.useDoubleSlider = !this.useDoubleSlider;
        Vue.nextTick(() => {
          this.initializeSlider();
          console.log('Slider atualizado:', this.useDoubleSlider ? 'Duplo' : 'Simples');
        });
      },

      initializeSlider() {
      console.log('Chamando initializeSlider');
      let sliderId = this.useDoubleSlider ? 'doubleSlider' : 'singleSlider';
      console.log('Slider ID:', sliderId);
      let slider = document.getElementById(sliderId);
      console.log('Slider Element:', slider);

      // Verificar se o slider já está inicializado
      if (slider.noUiSlider) {        
        slider.noUiSlider.destroy();
      }


  // Configurações comuns a ambos os tipos de controles deslizantes
      let commonSliderOptions = {
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
            return value + '';
          },
          from: value => {
            return value.replace(',-', '');
          }
        }
      };

      // Configurações específicas para cada tipo de controle deslizante
      let sliderSpecificOptions = this.useDoubleSlider
        ? { start: [this.sliderStartYear, this.sliderEndYear] }
        : { start: [this.sliderStartYear] };

      // Configurações comuns e específicas combinadas
      let sliderOptions = { ...commonSliderOptions, ...sliderSpecificOptions };

      // Criar o controle deslizante
      noUiSlider.create(slider, sliderOptions);

      // Atualização na régua quando os controles deslizantes são utilizados
      slider.noUiSlider.on('update', (values, handle) => {
        this.$store.dispatch('map/setYears', {
          first: values[0],
          last: this.useDoubleSlider ? values[1] : values[0]
        });

        this.filterUpdate();
      });
    },

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
        vectorLayerFeatures.forEach(feature => {
          // feature and temporal column properties
          let fProperties = feature.getProperties()
          let tcProperties = tc.properties

          // When I convert a date with hyphens, the generated date object is related to the previous date.
          // For this reeason, I need to replace all occurrences of hyphens by slashs
          // Discussion: https://stackoverflow.com/a/31732581/8447990
          let startDate = String(fProperties[tcProperties.start_date_column_name]).replace(/-/g, '\/')
          let endDate = String(fProperties[tcProperties.end_date_column_name]).replace(/-/g, '\/')

          // Extracting the year from the dates as strings.
          // The default values are the values from the slider temporal bounding
          let startYear = extractYearFromDateAsString(startDate, this.sliderStartYear)
          let endYear = extractYearFromDateAsString(endDate, this.sliderEndYear)

          // if for some reason, the `startYear` or `endYear` return a `NaN` value,
          // then I use the feature temporal bounding
          // (e.g. when `endDate` is an invalid string (e.g. "null"), then finding a year is not possible)
          if(isNaN(startYear))
            startYear = new Date(String(tcProperties.start_date).replace(/-/g, '\/')).getFullYear()
          if(isNaN(endYear))
            endYear = new Date(String(tcProperties.end_date).replace(/-/g, '\/')).getFullYear()

          // check if the feature is inside the selected period
          if (startYear <= this.selectedEndYear && endYear >= this.selectedStartYear) {
            // the feature style is removed, in other words, the feature is showed on the map
            feature.setStyle(null)
          } else {
            // an `invisible` style is set to the feature, in other words, the feature is hidden from the map
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


  #playButton {
    border-radius: 7.5px;
    line-height: 1;
    color: #FFF;
    font-size: 30px;
    background: #f15a29;
    font-family: IrisUPC ;
    position: absolute;
    display: flex;
    z-index: 4;
    bottom: 51px;
    left: 25%;
  }
  #changeButton  {
    border-radius: 7.5px;
    line-height: 1;
    color: #FFF;
    font-size: 30px;
    background: #f15a29;
    font-family: IrisUPC ;
    position: absolute;
    display: flex;
    z-index: 4;
    bottom: 51px;
    right: 24%;
  }


</style>
