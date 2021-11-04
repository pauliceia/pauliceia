<template>
  <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document" style="">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
            <el-popover placement="top-start" width="450" trigger="hover" type="primary">
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
          <el-input v-model="filterText" class="input-margin" :placeholder="$t('map.addLayer.input')"></el-input>
          <br/>

          <article>
            <div :class="'box-layer-info activated'">
              <div class="infos">
                <template>
                  <v-app>
                    <div class="container-fluid">
                      <v-data-table
                        v-bind:headers="headers"
                        :items="filteredLayers"
                        :rows-per-page-items="rowsPerPage"
                        :custom-sort="customSort"
                        :no-data-text="$t('map.addLayer.table.noData')"
                        v-bind:pagination.sync="pagination"
                        class="elevation-1 layers-table"
                      >

                        <template slot="headers" slot-scope="props">
                          <tr class="text-lg-center">
                            <th v-for="header in props.headers" :key="header.text" class="center"
                              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                              @click="changeSort(header)"
                            >
                              <span v-if="header.sortable">
                                <v-icon>arrow_upward</v-icon>
                              </span>
                              {{ header.text }}
                            </th>
                          </tr>
                        </template>

                        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                        <template slot="items" slot-scope="props">
                          <td :key="props.item.name" class="text-xs-center increase-padding">{{ props.item.name }}</td>

                          <td dark slot="activator" class="increase-padding clickable" @click.native.stop="dialog = true">
                            <v-dialog v-model="dialog" max-width="390">
                              <td dark slot="activator" @click.native.stop="dialog = true">
                                {{ characterLimit(props.item) }}
                              </td>

                              <v-card>
                                <v-card-title class="headline text-lg-center">{{ props.item.name }}</v-card-title>
                                <v-card-text>{{ props.item.description }}</v-card-text>
                              </v-card>
                            </v-dialog>
                          </td>

                          <td class="text-xs-center keyword-center">
                            <el-tag v-for="c in props.item.collaborators" :key="c.id"
                                    class="increase-padding one-per-line clickable">
                              <button @click="updateFilterText(c.name)">
                                {{ c.name }}
                              </button>
                            </el-tag>
                          </td>

                          <td class="text-xs-center keyword-center">
                            <el-tag v-for="k in props.item.keywords" :key="k.id"
                                    class="increase-padding one-per-line clickable" >
                              <button @click="updateFilterText(k.name)">
                                {{ k.name }}
                              </button>
                            </el-tag>
                          </td>

                          <td :key="props.item.created_at" class="text-xs-center increase-padding new-line">
                            {{ dateFormat(props.item.created_at) }}
                          </td>

                          <div class="btns vertically-center">
                            <el-button :type="props.item._is_activated ? 'danger' : 'success'" round
                                        @click="props.item._is_activated ? disabled(props.item) : active(props.item)">
                              {{ props.item._is_activated ? $t('map.addLayer.btns.disable') : $t('map.addLayer.btns.active') }}
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

export default {
  watch: {
    filterText(val){
      if (val === '') {
        this.filteredLayers = this.allLayers
      } else {
        let writtenValue = val.toLowerCase()

        this.filteredLayers = this.allLayers.filter(layer => {
          // if layer name matches the written value, then return the layer
          if (layer.name.toLowerCase().indexOf(writtenValue) >= 0)
            return layer

          // if layer description matches the written value, then return the layer
          if (layer.description.toLowerCase().indexOf(writtenValue) >= 0)
            return layer

          // if collaborators match the written value, then return the layer
          let collaborators = layer.collaborators.filter(
            // c - collaborator
            c => c.name !== null && c.name.toLowerCase().indexOf(writtenValue) >= 0
          )
          if (collaborators.length > 0)
            return layer

          // if keywords match the written value, then return the layer
          let keywords = layer.keywords.filter(
            // k - keyword
            k => k.name !== null && k.name.toLowerCase().indexOf(writtenValue) >= 0
          )
          if (keywords.length > 0)
            return layer

          // otherwise, do not return the layer (i.e. default return null)
        })
      }
    }
  },
  computed: {
    ...mapState('map', ['layers']),

    headers() {
      return [
        {
          text: this.$t('map.addLayer.table.lbTitle'),
          align: 'center',
          sortable: true,
          value: 'name'
        },
        { text: this.$t('map.addLayer.table.lbDescription'), sortable: false, value: 'description' },
        { text: this.$t('map.addLayer.table.lbAuthors'), sortable: false, value: 'collaborators' },
        { text: this.$t('map.addLayer.table.lbKeywords'), sortable: false, value: 'keywords' },
        { text: this.$t('map.addLayer.table.lbCreated_at'), sortable: true, value: 'created_at' }
      ]
    }
  },
  data() {
    return {
      filterText: '',
      allLayers: [],
      filteredLayers: [],
      pagination: {
        sortBy: 'name',
      },
      dialog: false,
      rowsPerPage: [3, 5, 10],
      loading: null
    }
  },
  async mounted() {
    this.__openFullLoading()

    try {
      let result = await Map.getLayers(null)

      // all available layers
      this.allLayers = result.data.features.map(layer => {
        // create a flag to change component colors based on it
        layer.properties._is_activated = false
        return layer.properties
      })

      // sort the layers by name
      this.allLayers.sort(
        (a, b) => (a.name > b.name) ? 1 :
                  ((b.name > a.name) ? -1 : 0)
      )

      // initialize the list of layers with all available layers
      // this list can change depending on the filter
      this.filteredLayers = this.allLayers

    } catch (error) {
      this.$alert(this.$t('map.addLayer.msg.errMsg'), this.$t('map.addLayer.msg.errTitle'), {
        confirmButtonText: 'OK',
        type: 'error'
      })
    }

    this.__closeFullLoading()
  },
  methods: {
    disabled(layer) {
      let vectorLayers = overlayGroup.getLayers().getArray()

      for (let vectorLayer of vectorLayers) {
        if (vectorLayer !== undefined && vectorLayer.get('id') !== undefined &&
              vectorLayer.get('id') === layer.id) {
          // remove the layer from the lists
          overlayGroup.getLayers().remove(vectorLayer)
          this.$store.dispatch('map/setRemoveLayers', layer.id)
          layer._is_activated = false
          break
        }
      }
    },
    async active(layer) {
      this.__openFullLoading()

      try {
        let url = process.env.urlGeoserverPauliceia +
                    '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:' +
                    layer.f_table_name + '&outputFormat=application%2Fjson';

        let response = await axios.get(url)

        if (response.data.type !== undefined) {
          let vectorLayer = new ol.layer.Vector({
            title: layer.f_table_name,
            source: new ol.source.Vector({
              url: url,
              format: new ol.format.GeoJSON(),
              crossOrigin: 'anonymous',
            }),
            zIndex: this.layers.length+2,
            id: layer.id
          })

          // add the layer in the lists
          overlayGroup.getLayers().push(vectorLayer)
          this.$store.dispatch('map/setNewLayers', layer.id)
          layer._is_activated = true

          this.__closeFullLoading()
        } else throw {}

      } catch (error) {
        this.__closeFullLoading()

        layer._is_activated = false

        this.$alert("Por favor, confira se a camada foi importada corretamente em nosso sistema ou entre em contato com nosso suporte!", "Erro ao importar a camada", {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'OK',
          type: "error"
        })
      }
    },
    characterLimit(layer) {
      let nCharacters = layer.collaborators.length * 30 + layer.keywords.length * 30

      if(layer.description.length > nCharacters)
        return layer.description.substr(0, nCharacters) + '...';

      return layer.description.substr(0, nCharacters);
    },
    updateFilterText(input) {
      this.filterText = input
    },
    dateFormat(rawTime) {
      let rawDate = rawTime.split(' ')[0]
      let formattedDate = rawDate.split('-').reverse().join('/');
      let hour = rawTime.split(' ')[1]

      return formattedDate + '\n' + hour
    },
    changeSort(header) {
      // if header is not sortable, then ignore it
      if (!header.sortable)
        return;

      if (this.pagination.sortBy === header.value) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = header.value
        this.pagination.descending = false
      }
    },
    customSort(items, index, isDesc) {
      if (index === 'name') {
        items.sort(
          (a, b) => (a.name > b.name) ? 1 :
                    ((b.name > a.name) ? -1 : 0)
        );
      } else if (index === 'created_at') {
        items.sort(
          (a, b) => (a.created_at > b.created_at) ? 1 :
                    ((b.created_at > a.created_at) ? -1 : 0)
        );
      } else {
        return;
      }

      if (isDesc)
        items.reverse();

      return items;
    },
    __openFullLoading() {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    __closeFullLoading() {
      if (this.loading !== null)
        this.loading.close()
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
