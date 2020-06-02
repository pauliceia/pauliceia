<template>
    <section class="box" v-show="boxGeocoding">

        <header class="header">
            <h1>{{ $t('map.geocoding.form.search') }}:

            <el-popover class="info" placement="top-start" width="450"
                        trigger="hover"
                        type="primary">
                <div v-html="$t('map.geocoding.popupInfo.search')"/>
                <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                </button>
            </el-popover></h1>

            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>

        <form @submit.prevent="search">
            <div class="input-group">
              <el-autocomplete
                class="inline-input"
                style="flex: 1 1 auto"
                v-model="inputSearch"
                ref="geocoding_search"
                :fetch-suggestions="querySearch"
                :placeholder="$t('map.geocoding.placeholder')"
                :trigger-on-focus="false"
                @select="handleSelect"
                >
                <template slot-scope="{ item }">
                  <div class="value">{{ item }}</div>
                </template>
              </el-autocomplete>

              <div class="input-group-append">
                <button class="btn btn-search">
                  {{ $t('map.geocoding.btnText') }}
                </button>
              </div>
              <div class="input-group-append">
                <button type="button" class="btn" @click="setting()">
                  <md-icon>settings</md-icon>
                </button>
              </div>

            </div>
        </form>

        <div class="box-multigeocoding" v-show="multigeocoding">
          <h1>{{ $t('map.geocoding.form.geocoding') }}:

          <el-popover class="info" placement="bottom-start" width="450"
                      trigger="hover" type="primary">
            <div v-html="$t('map.geocoding.popupInfo.geocoding')"/>
            <button type="button" slot="reference" class="btn btn-outline-primary info">
              <md-icon class="icon">error_outline</md-icon>
            </button>
          </el-popover></h1>
          <br>

          <label class="file-select">
            <!-- We can't use a normal button element here, as it would become the target of the label. -->
            <div class="select-button"></div>
            <!-- Now, the file input that we hide. -->
            <input type="file" accept=".csv" @change="handleFileChange"/>
          </label><br><br>

          <form class="headers-form" v-show="headers.length > 0" @submit.prevent="visualizar()">
            <div class="inputs">
              <el-select v-model="street" placeholder="Coluna Rua">
                <el-option
                  v-for="item in headers" :key="item"
                  :label="item" :value="item"
                  :required="true">
                </el-option>
              </el-select>
              <el-select v-model="numberAddress" placeholder="Coluna Número">
                <el-option
                  v-for="item in headers" :key="item"
                  :label="item" :value="item"
                  :required="true">
                </el-option>
              </el-select>
              <el-select v-model="year" placeholder="Coluna Ano">
                <el-option
                  v-for="item in headers" :key="item"
                  :label="item" :value="item"
                  :required="true">
                </el-option>
              </el-select>
            </div>
            <button class="btn btn-download" type="submit">
              Visualizar
            </button>
            <button class="btn btn-download" type="button" v-if="showDownloadButton" @click="download()">
              Download
            </button>
          </form>
        </div>

    </section>
</template>

<script>

import ApiMap from '@/middleware/Map'
import { mapState } from 'vuex'
import GeoJSON from 'geojson'
import shpwrite from 'shp-write'


import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'

import {
    placeStyle,
    placeStyleSearch1,
    placeStyleSearch0,
    placeStyleSearch3
} from '@/views/assets/js/map/Styles'

import {
    CSV2JSON,
    CSVToArray,
    getUrl
} from '@/views/assets/js/map/multiplegeocode'

import {
    overlayGroupGeolocation
} from '@/views/assets/js/map/overlayGroup'

export default {
  data() {
    return {
      inputSearch: '',
      multigeocoding: false,
      placesList: [],
      geojson: '',
      file: null,
      csvjson: '',
      loading: null,
      headers: [],
      street: '',
      numberAddress: '',
      year: '',
      showDownloadButton: false
    }
  },
  computed: {
    ...mapState('map', ['boxGeocoding', 'boxSubtitle']),
    fileName(){
      // get the file name, without the extension (i.e. without the `.csv`)
      let fileName = this.file === null ? null : this.file.name.split('.')[0]

      // if there is a `file`, then it returns the file name, by removing white spaces and special chars
      return fileName === null ? 'default' : fileName.trim().replace(/ /g, '_').toLowerCase().replace(/[^\w]/gi, "")
    }
  },
  async mounted(){
      try {
          let response = await ApiMap.getPlacesList()
          this.placesList = response.data
      } catch(_) {
          this.$alert('Serviço de GEOCODING indisponível, tente mais tarde ou comunique nosso suporte!', 'Erro Interno', {
              confirmButtonText: 'OK',
              type: 'error'
          });
      }
  },
  methods: {
    setting(){
        this.multigeocoding = !this.multigeocoding
    },
    querySearch(queryString, cb) {
        let links = this.placesList
        let results = queryString ? links.filter( link => link.toLowerCase().indexOf(queryString.toLowerCase()) >= 0 ) : links
        cb(results)
    },
    handleSelect(item) {
        this.inputSearch = item
    },
    handleFileChange(event) {
      this._openFullScreen()

      // add default values
      this.headers = []
      this.showDownloadButton = false

      this.file = event.target.files[0]
      this.$emit('input', this.file)

      let reader = new FileReader();

      reader.onload = async file => {
        let text = reader.result;
        let node = document.getElementById('output');
        let csv = text.replace('\r','');
        let headers = csv.split('\n')[0].split(',')

        // check if there is some blank header
        if (headers.some(e => e === '')) {
          this._msgError('Há nome de coluna(s) (i.e. cabeçalho(s)) em branco. Dê um nome a ela(s) ou remova-a(s)!')
          return
        }

        this.headers = headers
        //this.headers = csv.split('\n')[0].split(',').map( header => header.substr(header.indexOf('"')+1, header.lastIndexOf('"')-1).replace('"', '') )
        this.csvjson = CSV2JSON(csv);

        this.loading.close()
      }
      reader.readAsText(event.target.files[0]);
    },
    async visualizar() {
      console.log('\n visualizar()')
      console.log('this.headers: ', this.headers)
      console.log('this.csvjson: ', this.csvjson)

      this._openFullScreen()

      let json = JSON.parse(this.csvjson);
      let jsonResults = [];
      let jsonErros = "Erros: \n \n";
      let CsvTotalStatus = "Status da busca de endereços via CSV: \n \n"
      let errosCount = 0;

      for (let i = 0; i < json.length; i++) {
        let address = json[i][this.street].toLowerCase()+", "+json[i][this.numberAddress]+", "+json[i][this.year];

        console.log(address)

        try {
          let response = await ApiMap.geolocationOne(address);

          if(response.data[1][0].name != "Point not found"){
            let textAddress = ("[{"+'"address":'+'"'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'"'+"}]");
            let geomPoint = response.data[1][0].geom.substr(response.data[1][0].geom.indexOf("(")+1);
            geomPoint = geomPoint.substr(0,geomPoint.indexOf(")"));

            let x = parseFloat(geomPoint.split(' ')[0]);
            let y = parseFloat(geomPoint.split(' ')[1]);
            let geom = ('{'+'"geom":'+'['+x +','+y+'], "confidence":'+response.data[1][0].confidence+'}');

            console.log(geom)

            let jsonAddress = JSON.parse(geom);
            let jsonSlice = json[i];
            let results = Object.assign(jsonSlice, jsonAddress);

            jsonResults.push(JSON.stringify(results));

            if (response.data[1][0].confidence == 1){
              let currentStatus = 'O endereço "'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'" foi Encontrado. \n'
              CsvTotalStatus = CsvTotalStatus.concat(currentStatus);

            } else if (response.data[1][0].confidence == 0){
              let currentStatus = 'O endereço "'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'" foi Extrapolado espacialmente. \n'
              CsvTotalStatus = CsvTotalStatus.concat(currentStatus);

            } else {
              let currentStatus = 'O endereço "'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'" foi Geocodificado. \n'
              CsvTotalStatus = CsvTotalStatus.concat(currentStatus);
            }

          } else {
            errosCount = errosCount + 1
            let erro = 'O endereço "'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'" não foi encontrado. \n'
            jsonErros = jsonErros.concat(erro);
          }
        } catch (_) {
          errosCount = errosCount + 1
          let erro = 'O endereço "'+json[i][this.street]+", "+json[i][this.numberAddress]+", "+json[i][this.year]+'" não foi encontrado. \n'
          jsonErros = jsonErros.concat(erro);
        }
      }

      if (errosCount > 0){
        alert(jsonErros)
      }

      alert(CsvTotalStatus)

      let textJsonResults = ('['+jsonResults+']');
      let final = JSON.parse(textJsonResults);
      let resultGeoJSON = GeoJSON.parse(final, {'Point': "geom"});
      this.geojson = resultGeoJSON

      try {
        let vectorLayer = new ol.layer.Vector({
          title: "multipligeolocation",
          source: new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(resultGeoJSON)
          }),
          name: 'placesSearchMultiple',
          style: placeStyleSearch1,
          zIndex: 999
        });

        overlayGroupGeolocation.getLayers().clear()
        overlayGroupGeolocation.getLayers().push(vectorLayer)

        this.loading.close()
        this.showDownloadButton = true

      } catch (error) {
        this.$alert('Não foi possível ler o arquivo CSV', 'Erro no arquivo', {
          confirmButtonText: 'OK',
          type: 'error'
        });
        this.loading.close()
      }
    },
    download(){
      let options = {
        folder: 'myshapes',
        types: {
          point: this.fileName
        }
      }
      shpwrite.download(this.geojson, options);
    },
    closeBox() {
      this.$store.dispatch('map/setBoxGeocoding', false)
    },
    async search () {
      try {
        //this._openFullScreen()
        let regex = new RegExp(/\s*,( )*\d{4}/);
        let search = this.inputSearch.replace(/( )+/g, ' ');

        if (regex.test(search)) {
          const result = await ApiMap.geolocationOne(search)

          if(result.data[1][0].geom == undefined) {
            let text = "Não encontramos pontos necessarios para a geolocalização nesse logradouro no ano buscado (" + search + ")"

            this.$alert(text, 'Erro', {
              dangerouslyUseHTMLString: true,
              confirmButtonText: 'OK',
              type: 'error'
            });
            this.loading.close()
          }

          if(result.data[1][0].geom != undefined) {
            let myStyle = placeStyleSearch1
            //console.log(result.data[1][0].confidence)
            if (result.data[1][0].confidence == 1){
                //console.log('1')
                myStyle = placeStyleSearch1
            } else {
              if (result.data[1][0].confidence == 0){
                //console.log('0')
                myStyle = placeStyleSearch0
              } else {
                //console.log('0-1')
                myStyle = placeStyleSearch3
                //console.log(myStyle)
              }
            }

            this.$store.dispatch('map/setBoxSubtitle', true)

            let coordPoint = result.data[1][0].geom.substring(6).replace(")", "").split(" ")
            let feature = new ol.Feature(new ol.geom.Point(coordPoint))
            let layerSearch = new ol.layer.Vector({
              source: new ol.source.Vector({
                  features: [feature]
              }),
              name: 'placesSearch',
              style: myStyle,
              zIndex: 999
            });
            overlayGroupGeolocation.getLayers().clear()
            overlayGroupGeolocation.getLayers().push(
                layerSearch
            )
            let extent = ol.extent.createEmpty();
            ol.extent.extend(extent, feature.getGeometry().getExtent());
            this.$root.olmap.getView().fit(extent, this.$root.olmap.getSize());
            //this.loading.close()
          }
        } else {
          this.$alert('<strong>Pesquise por:</strong> rua, número, ano (0000)', 'Formato inválido', {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            type: 'warning'
          });
          this.loading.close()
        }
      } catch (error) {
        if(error.response != undefined && error.response.data != undefined && error.response.data[1][0].alertMsg != undefined) {

          this.$alert(error.response.data[1][0].alertMsg, 'Erro', {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            type: 'error'
          });
          this.loading.close()

        } else {
          let text = "Não encontramos pontos necessarios para a geolocalização nesse logradouro no ano buscado (" + search + ")"

          this.$alert(text, 'Erro', {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            type: 'error'
          });
          this.loading.close()
        }
      }
    },
    _openFullScreen() {
      this.loading = this.$loading({
        lock: true,
        text: 'Geocodificando',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    },
    _msgError(msg){
      if(this.loading != '' && this.loading != null)
        this.loading.close()

      this.$message.error({
        message: msg,
        center: true,
        duration: 10000,
        showClose: true,
      })
    }
  }
}
</script>

<style lang="sass">
    .box
        position: absolute
        top: 20px
        right: 60px
        border-radius: 10px
        overflow: auto
        padding: 10px
        background: rgba(#FFF, 0.7)
        z-index: 1
        max-width: 40%
        min-width: 40%

        .header
            width: 100%
            h1
                padding: 5px 5px 1px 5px
                font-size: 1.3em
                font-weight: 400
                font-family: 'Roboto' !important
                display: inline-block
                margin: 0 !important

            .info
                top: -7px !important
                border: none
                position: relative
                border-radius: 30px
            .info:hover
                background: #008ae6 !important

            .btn
                margin: 3px !important
                padding: 2px !important
                background: none
                border: none
                float: right
                display: inline-block
            .btn:hover
                background: rgba(#000, 0.1)

        .btn-search
            background: #f15a29
            border-bottom: 1px solid #f15a29
            color: #FFF

        .btn-search:hover
            background: rgba(#f15a29, 0.7)

        .btn-download
            background: #f15a29
            border-bottom: 1px solid #f15a29
            color: #FFF
        .btn-download:hover
            background: rgba(#f15a29, 0.7)


        .box-multigeocoding
            width: 100%
            background: #FFF
            padding: 25px
            border: 1px solid #CCC
            border-top: none
            .file-select
                padding: 10px 0px 0px 0px
            h1
                padding: 5px 5px 1px 0px
                font-size: 1.3em
                font-weight: 400
                font-family: 'Roboto' !important
                display: inline-block
                margin: 0 !important

            .info
                top: -7px !important
                border: none
                margin: 0
                padding: 0
                border-radius: 30px
            .info:hover
                background: #008ae6

            .btn
            .btn:hover

            .headers-form
                .inputs
                    display: flex
                    margin-bottom: 20px

    input:focus
        border-color: rgba(#58595b, 0.2) !important
        box-shadow: 0px 0px 10px rgba(#58595b, 0.2) !important
</style>
