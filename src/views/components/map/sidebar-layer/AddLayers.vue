<template>
  <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document" style="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <el-input class="inputMargin"
            :placeholder="$t('map.addLayer.input')"
            v-model="filterText">
          </el-input>
          <br/>

          <article>
            <div :class="layers.some(id => id == layer.properties.layer_id) ? 'box-layer-info activated' : 'box-layer-info disabled'">
              <div class="infos">
                <template>
                  <v-app>
                    <div class="container-fluid centerTable">
                      <v-data-table
                        v-bind:headers="headers"
                        :items="listLayers"
                        :rows-per-page-items= "[5, 10]"
                        :custom-sort="customSort"
                        :loading="loading"
                        v-bind:pagination.sync="pagination"
                        class="elevation-1 layersTable"
                      >

                        <template slot="headers" slot-scope="props">
                          <tr class="text-lg-center clearPadding">
                            <th class="center" v-for="header in props.headers" :key="header.text"
                              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                              @click="changeSort(header.value)"
                            >
                              <span v-if="header.sortable == true">
                                <v-icon>arrow_upward</v-icon>
                              </span>
                              {{ header.text }}
                            </th>
                          </tr>
                        </template>

                        <template slot="items" slot-scope="props">
                          <td :key="props.item.properties.name" class="text-xs-center reducePadding grayColumn">{{ props.item.properties.name }}</td>
                          
                          <v-dialog v-model="dialog" max-width="390">
                            <td dark slot="activator" class="reducePadding clearBackground" @click.native.stop="dialog = true">
                              {{ characterLimit(props.item.properties) }} 
                            </td>

                            <v-card>
                              <v-card-title class="headline">{{ props.item.properties.name }}</v-card-title>
                              <v-card-text>{{ props.item.properties.description }}</v-card-text>
                            </v-card>
                          </v-dialog>

                          <td class="text-xs-center reducePadding" style="padding: 0px; background-color: #e3e3e3; border-left: solid; border-color: #ffd6cc;">   
                            <el-tag class="reducePadding" v-for="name in props.item.properties.authors" :key="name">
                              <div @click="updateFilterText(name)">
                                {{ name }}
                              </div>
                            </el-tag>
                          </td>

                          <td class="text-xs-center reducePadding">
                            <el-tag class="reducePadding" v-for="name in props.item.properties.keyword" :key="name">
                              <div @click="updateFilterText(name)">
                                {{ name }}
                              </div>
                            </el-tag>
                          </td>

                          <td :key="props.item.properties.created_at" class="text-xs-center reducePadding grayColumn">{{ dateFormat(props.item.properties.created_at) }}</td>

                          <div class="btns">
                            <el-button :type="layers.some(id => id == props.item.properties.layer_id) ? 'danger' : 'success'"
                                          round @click="layers.some(id => id == props.item.properties.layer_id) ? disabled(props.item) : active(props.item)"
                                          :disabled="btnDisabled" >
                              {{ layers.some(id => id == props.item.properties.layer_id) ? $t('map.addLayer.btns.disable') : $t('map.addLayer.btns.active') }}
                            </el-button>
                          </div>
                        </template>
                      </v-data-table>
                    </div>
                  </v-app>
                </template>
              </div>
            </div>
          </article>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">
            {{ $t('map.addLayer.close') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

import Map from '@/middleware/Map'
import {
  overlayGroup
} from '@/views/assets/js/map/overlayGroup'
import Vue from 'vue'

export default {
    watch: {
      filterText(val){
        if (val === '' || val === '+') {
          this.listLayers = this.allLayers
        }else {
          let inputArray = []

          if(val.includes('+')){
            inputArray = val.split('+') 
          }else{
            inputArray.push(val)
          }

          for(var val in inputArray){
            this.listLayers = this.allLayers.filter(layer => (layer.properties.name.toLowerCase().indexOf(inputArray[val].toLowerCase()) >= 0 ||
                  layer.properties.authors.toString().toLowerCase().indexOf(inputArray[val].toLowerCase()) >= 0 ||
                  layer.properties.keyword.toString().toLowerCase().indexOf(inputArray[val].toLowerCase()) >= 0 )
            )  
          }
        }
      }
    },
    computed: {
      ...mapState('map', ['layers']),
    },
    data() {
      return {
        loading: '',
        btnDisabled: false,
        filterText: '',
        listLayers: [],
        pagination: {
          sortBy: 'name', 
        },
        allLayers: [],
        headers: [
          {
            text: '',
            align: 'center',
            sortable: true,
            value: 'name'
          },
          { text: '', sortable: false, value: 'description' },
          { text: '', sortable: false, value: 'authors' },
          { text: '', sortable: false, value: 'keyword' },
          { text: '', sortable: true, value: 'created_at' }
        ],
        allKeywords: [],
        allAuthorsLayers: []
      }
    },
    async updated(){
      //Set header text based on website language.
      this.headers[0].text = this.$t('map.addLayer.box.lbTitle')
      this.headers[1].text = this.$t('map.addLayer.box.lbDescription')
      this.headers[2].text = this.$t('map.addLayer.box.lbAuthors')
      this.headers[3].text = this.$t('map.addLayer.box.lbKeywords')
      this.headers[4].text = this.$t('map.addLayer.box.lbCreated_at')

      //Apply CSS to Vuetify Dinamic Components
      document.getElementsByClassName('datatable__actions')[0].style.width = '80%'
      document.getElementsByClassName('datatable__actions')[0].style.padding = '0px'
      document.getElementsByClassName('datatable__actions')[0].style.height = '100%'
      document.getElementsByTagName('td')[25].style.padding= '0px'
      document.getElementsByClassName('btn-secondary')[0].style.margin= '5px'
    },
    async mounted() {
      
      try {
        let result = await Map.getLayers(null)
        this.allLayers = result.data.features

        result = await Map.getKeywords()
        this.allKeywords = result.data.features

        result = await Map.getAuthors()
        this.allAuthors = result.data.features

        result = await Map.getAuthorsLayers(null)
        this.allAuthorsLayers = result.data.features

        // add a list of authors and keywords names inside each layer
        this.allLayers.forEach(layer => {
          layer.properties.authors = this.allAuthorsLayers.filter(
            // get all authors ids by layer_id
            author => layer.properties.layer_id == author.properties.layer_id
          ).map(
            // for each author I've got I return his name instead of the id
            author => this.getAuthorById(author.properties.user_id)[0].properties.name
          )

          // rewrite `keyword` property to have a list of keywords names, instead of a list of ids
          layer.properties.keyword = layer.properties.keyword.map(
            id => this.getKeywordById(id)[0].properties.name
          )
        })

        // initialize the list of layers with all available layers
        this.listLayers = this.allLayers

      } catch (error) {
        this.$alert(this.$t('map.addLayer.msg.errMsg'), this.$t('map.addLayer.msg.errTitle'), {
          confirmButtonText: 'OK',
          type: 'error'
        })
      }
    },
    methods: {
      getKeywordById(id){
        return this.allKeywords.filter(key => key.properties.keyword_id === id)
      },
      characterLimit(itemProperties){
        let nCharacters = itemProperties.authors.length * 20 + itemProperties.keyword.length * 20

        if(itemProperties.description.length > nCharacters){
          return itemProperties.description.substr(0, nCharacters) + '...'
        }else{
          return itemProperties.description.substr(0, nCharacters)
        }
      },
      updateFilterText(input){
        if(this.filterText.includes(input)){
          if(this.filterText.includes('+')){
            this.filterText = this.filterText.replace('+' + input, "")
          }else{
            this.filterText = this.filterText.replace(input, "")
          }          
          console.log(this.filterText)
        }else{
          if(this.filterText === ''){
            this.filterText = input
          }else{
            this.filterText += '+' + input
          }
        }
      },
      dateFormat(rawTime){
        let rawDate = rawTime.split(' ')[0]
        let formattedDate = rawDate.split('-').reverse().join('/');

        let hour = rawTime.split(' ')[1]

        return this.$t('map.addLayer.box.day') + formattedDate + ' ' + this.$t('map.addLayer.box.hour') + hour
      },
      getAuthorById(id){
        return this.allAuthors.filter(author => author.properties.user_id === id)
      },
      disabled(layer) {
        if(this.btnDisabled == false)
          this.btnDisabled = true

        overlayGroup.getLayers().forEach(sublayer => {
          if(sublayer != undefined && sublayer.get('id') != undefined && sublayer.get('id') == layer.properties.layer_id) {
            overlayGroup.getLayers().remove(sublayer)
            this.$store.dispatch('map/setRemoveLayers', layer.properties.layer_id)
            this.btnDisabled = false
            return true
          }
        })
      },
      async active(layer) {
        if(this.btnDisabled == false)
          this.btnDisabled = true

        this._openFullScreen()
        const vm = this

        try {
          let url = process.env.urlGeoserverPauliceia+'/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:'+layer.properties.f_table_name+'&outputFormat=application%2Fjson';

          let response = await axios.get(url)

          if(response.data.type != undefined) {
            let vectorLayer = new ol.layer.Vector({
              title: layer.properties.f_table_name,
              source: new ol.source.Vector({
                url: url,
                format: new ol.format.GeoJSON(),
                crossOrigin: 'anonymous',
              }),
              zIndex: vm.layers.length+2,
              id: layer.properties.layer_id
            })

            overlayGroup.getLayers().push(vectorLayer)

            setTimeout( _ => {
              this.$store.dispatch('map/setNewLayers', layer.properties.layer_id)
              this.loading.close()
              this.btnDisabled = false
            }, 500)
          } else throw {}

        } catch(error) {
          this.loading.close()
          this.btnDisabled = false
          this.$alert("Por favor, confira se a camada foi importada corretamente em nosso sistema ou entre em contato com nosso suporte!", "Erro ao importar a camada", {
            dangerouslyUseHTMLString: true,
            confirmButtonText: 'OK',
            type: "error"
          })
        }
      },

      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },

      _openFullScreen() {
        this.loading = this.$loading({
          lock: true,
          text: 'Construindo Mapa',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      },

      customSort: function(items, index, isDesc){
        if(index === 'name'){
          items.sort(
          (a, b) => (a.properties.name > b.properties.name) ? 1 :
                    ((b.properties.name > a.properties.name) ? -1 : 0)
          )
        }else if(index === 'created_at'){
          items.sort(
          (a, b) => (a.properties.created_at > b.properties.created_at) ? 1 :
                    ((b.properties.created_at > a.properties.created_at) ? -1 : 0)
          )
        }else{
          return
        }

        if(isDesc){
          items.reverse();
        }

        return items
      }
    }
}
</script>

<style lang="sass" scoped>
  .modal-content

    .modal-body
      padding: 0rem
      
      .inputMargin
        margin-bottom: 5px !important

      .btns
        display: block
        padding: 10px

      .title-box
        color: #58595b !important

      .reducePadding
        padding: 5px
        padding-top: 0px

      .centerTable
        padding: 0
        padding-top: 10px;
        margin-left: 0px;

      .box-layer-info
        padding-left: 10px
        padding-right: 10px
        margin: 0px 0 0 0
        border-radius: 10px
        display: flex
        justify-content: center

        .infos
          width: 100%
          height: 60%;
          overflow: hidden;

          strong
            color: #333
            font-size: 0.9em

          p
            margin: 5px

          .application--wrap
            min-height: 0px
            
      .modal-dialog
        min-height: '0px' !important

        .btns
          display: flex
          align-items: center
          align-content: center
          width: 25%

      .box-layer-info.activated
        background: #d6f5d6

      .box-layer-info.disabled
        background: #ffd6cc
        height: 80%

      .layersTable
        display: block
        width: 100%;
        height: 100%;
        max-width: 100%;
        padding: 0px;
        margin: auto;

      .text-xs-center
        border: solid !important
        border-color: #ffd6cc !important
        border-top: none !important
        border-bottom: none !important

      .grayColumn
        background-color: #e3e3e3 !important;

      .clearPadding
        height: 35px;
        padding: 0px;

      .center
        padding: 10px;

    .modal-footer
      padding: 0px
</style>
