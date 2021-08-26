<template>
  <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document" style="">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
            <el-popover placement="top-start" width="450"
              trigger="hover" type="primary">
              <div v-html="$t('map.addLayer.search')"/>
              <button type="button" slot="reference" class="btn btn-outline-primary pop-over">
                  <md-icon class="icon">error_outline</md-icon>
              </button>
            </el-popover>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <el-input class="input-margin"
            :placeholder="$t('map.addLayer.input')"
            v-model="filterText">
          </el-input>
          <br/>

          <article>
            <div :class="'box-layer-info activated'">
              <div class="infos">
                <template>
                  <v-app>
                    <div class="container-fluid">
                      <v-data-table
                        v-bind:headers="headers"
                        :items="listLayers"
                        :rows-per-page-items= rowsPerPage
                        :custom-sort="customSort"
                        :no-data-text="$t('map.addLayer.table.noData')"
                        v-bind:pagination.sync="pagination"
                        class="elevation-1 layers-table"
                      >

                        <template slot="headers" slot-scope="props">
                          <tr class="text-lg-center">
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

                        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                        <template slot="items" slot-scope="props">
                          <td :key="props.item.properties.name" class="text-xs-center increase-padding">{{ props.item.properties.name }}</td>
                          
                          <td dark slot="activator" class="increase-padding clickable" @click.native.stop="dialog = true">
                            <v-dialog v-model="dialog" max-width="390">
                              <td dark slot="activator" @click.native.stop="dialog = true">
                                {{ characterLimit(props.item.properties) }} 
                              </td>

                              <v-card>
                                <v-card-title class="headline text-lg-center">{{ props.item.properties.name }}</v-card-title>
                                <v-card-text>{{ props.item.properties.description }}</v-card-text>
                              </v-card>
                            </v-dialog>
                          </td>

                          <td class="text-xs-center keyword-center">   
                            <el-tag class="increase-padding one-per-line clickable" v-for="name in props.item.properties.authors" :key="name">
                              <div @click="updateFilterText(name)">
                                {{ name }}
                              </div>
                            </el-tag>
                          </td>

                          <td class="text-xs-center keyword-center">
                            <el-tag class="increase-padding one-per-line clickable" v-for="name in props.item.properties.keyword" :key="name">
                              <div @click="updateFilterText(name)">
                                {{ name }}
                              </div>
                            </el-tag>
                          </td>

                          <td :key="props.item.properties.created_at" class="text-xs-center increase-padding new-line">{{ dateFormat(props.item.properties.created_at) }}</td>

                          <div class="btns vertically-center">
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
      if (val === '') {
        this.listLayers = this.allLayers
      }else {
        let inputArray = []

        inputArray = val.split(', ') 
        this.listLayers = this.filterLayer(inputArray)
      }
    }
  },
  computed: {
    ...mapState('map', ['layers']),

    headers(){
      return[
        {
          text: this.$t('map.addLayer.table.lbTitle'),
          align: 'center',
          sortable: true,
          value: 'name'
        },
        { text: this.$t('map.addLayer.table.lbDescription'), sortable: false, value: 'description' },
        { text: this.$t('map.addLayer.table.lbAuthors'), sortable: false, value: 'authors' },
        { text: this.$t('map.addLayer.table.lbKeywords'), sortable: false, value: 'keyword' },
        { text: this.$t('map.addLayer.table.lbCreated_at'), sortable: true, value: 'created_at' }
      ]
    },
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
      allKeywords: [],
      allAuthorsLayers: [],
      dialog: false,
      rowsPerPage: [3, 5, 10]
    }
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
      let nCharacters = itemProperties.authors.length * 30 + itemProperties.keyword.length * 30

      if(itemProperties.description.length > nCharacters){
        return itemProperties.description.substr(0, nCharacters) + '...'
      }else{
        return itemProperties.description.substr(0, nCharacters)
      }
    },
    updateFilterText(input){
      if(this.filterText.includes(input)){
        this.filterText = this.filterText.replace(input + ", ", "")   
      }else{
        this.filterText += input + ', '
      }
    },
    dateFormat(rawTime){
      let rawDate = rawTime.split(' ')[0]
      let formattedDate = rawDate.split('-').reverse().join('/');
      let hour = rawTime.split(' ')[1]

      return formattedDate + '\n' + hour
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
    },
    filterLayer(inputArray){
      //Apply filters to allLayers. This makes it possible to apply the remaining filters after deleting search keywords.
      this.listLayers = this.allLayers.filter(layer => (layer.properties.name.toLowerCase().indexOf
        (inputArray[0].toLowerCase()) >= 0 || layer.properties.authors.toString().toLowerCase()
        .indexOf(inputArray[0].toLowerCase()) >= 0 || layer.properties.keyword.toString().toLowerCase()
        .indexOf(inputArray[0].toLowerCase()) >= 0 )
      )

      //Apply filters of subsequent keywords into listLayers. 
      for(var val in inputArray){
        this.listLayers = this.listLayers.filter(layer => (layer.properties.name.toLowerCase().indexOf
          (inputArray[val].toLowerCase()) >= 0 || layer.properties.authors.toString().toLowerCase()
          .indexOf(inputArray[val].toLowerCase()) >= 0 || layer.properties.keyword.toString().toLowerCase()
          .indexOf(inputArray[val].toLowerCase()) >= 0 )
        ) 
      }
      return this.listLayers
    }
  }
}
</script>

<style>
  /* This CSS section apply styles to Vuetify components. It wasn't possible to access these components using scoped styles*/

  .infos .application--wrap{
    min-height: 0px;
  }

  .layers-table tbody tr:nth-child(odd) {
    background: #eee;
  }

  .layers-table .v-datatable__actions{
    justify-content: center;
  }

  .layers-table .v-datatable__actions__select{
    display: contents;
    justify-content: inherit;
    margin-right: 0px;
  }

  .layers-table .v-datatable__actions__range-controls .v-btn{
    margin: 0px !important;
  }
  
  .layers-table .v-datatable__actions__range-controls .v-btn{
    margin: 0px !important;
  }

  table.v-table thead tr{
    height: 40px;
  }

  table.v-table tbody td:first-child, table.v-table tbody td:not(:first-child), table.v-table tbody th:first-child, table.v-table tbody th:not(:first-child), table.v-table thead td:first-child, table.v-table thead td:not(:first-child), table.v-table thead th:first-child, table.v-table thead th:not(:first-child){
    padding: 3px;
  }
</style>

<style lang="sass" scoped>
  .modal-content

    .modal-header
      .pop-over
        border: none
        margin: 0
        margin-left: 5px
        margin-top: 2px
        padding: 0px
        border-radius: 30px   
      .pop-over:hover
        background: #008ae6

    .modal-body
      padding: 0rem
      
      .input-margin
        margin-bottom: 5px !important

      .title-box
        color: #58595b !important

      .container-fluid
        padding: 0
        padding-top: 1px;
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
            
      .modal-dialog
        min-height: '0px' !important

      .box-layer-info.activated
        background: #d6f5d6

      .box-layer-info.disabled
        background: #ffd6cc
        height: 80%

      .layers-table
        display: block
        width: 100%;
        height: 100%;
        max-width: 100%;
        padding: 0px;
        margin: auto;

        .increase-padding
          padding: 0px
          padding-right: 5px
          padding-left: 5px 

        .one-per-line
          display: block
          max-width: fit-content
          margin: auto

        .clickable
          cursor: pointer

        .new-line
          white-space: pre-line

        .text-xs-center
          border: solid !important
          border-color: #ffd6cc !important
          border-top: none !important
          border-bottom: none !important
          vertical-align: middle

        .keyword-center
          width: 250px

        .center
          padding: 10px;

        .btns
          padding-right: 10px
          padding-left: 10px

        .vertically-center
          display: table-cell
          vertical-align: middle

    .modal-footer
      padding: 0px
</style>
