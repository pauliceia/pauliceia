<template>
  <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <el-input v-model="filterText" :placeholder="$t('map.addLayer.input')"></el-input>
          <br>

          <!-- `:set` is just a placeholder to create a local variable -->
          <!-- isLayerActivated - check if this layer is inside the cache -->
          <article v-for="layer in filteredLayers" :key="layer.id"
                  :set="isLayerActivated = layers.includes(layer.id)">
            <div :class="isLayerActivated ? 'box-layer-info activated' : 'box-layer-info disabled'">
              <div class="infos">
                <p><strong>{{ $t('map.addLayer.box.lbTitle') }}:</strong> {{ layer.name }}</p>
                <p>
                  <strong>{{ $t('map.addLayer.box.lbAuthors') }}:</strong>
                  <span v-for="collaborator in layer.collaborators" :key="collaborator.id">
                    {{ collaborator.name !== null ? collaborator.name : collaborator.username }};
                  </span>
                </p>
                <p>
                  <strong>{{ $t('map.addLayer.box.lbKeywods') }}:</strong>
                  <el-tag v-for="keyword in layer.keywords" :key="keyword.id" style="margin-left: 5px">
                    {{ keyword.name }}
                  </el-tag>
                </p>
              </div>

              <div class="btns">
                <el-button v-if="isLayerActivated" type='danger' @click="disabled(layer)" round>
                  {{ $t('map.addLayer.btns.disable') }}
                </el-button>
                <el-button v-else type='success' @click="active(layer)" round>
                  {{ $t('map.addLayer.btns.active') }}
                </el-button>
              </div>
            </div>
          </article>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
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
    ...mapState('map', ['layers'])
  },
  data() {
    return {
      allLayers: [],
      filterText: '',
      filteredLayers: [],
      loading: null
    }
  },
  async mounted() {
    this.__openFullLoading()

    try {
      let result = await Map.getLayers(null)

      // all available layers
      this.allLayers = result.data.features.map(layer => {
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

          this.__closeFullLoading()
        } else throw {}

      } catch (error) {
        this.__closeFullLoading()

        this.$alert("Por favor, confira se a camada foi importada corretamente em nosso sistema ou entre em contato com nosso suporte!", "Erro ao importar a camada", {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'OK',
          type: "error"
        })
      }
    },
    __openFullLoading(){
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    __closeFullLoading(){
      if (this.loading !== null)
        this.loading.close()
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-content

  .modal-body

    .btn
      display: block
      margin: 20px 0 10px 0

    .title-box
      color: #58595b !important

    .box-layer-info
      padding: 10px
      margin: 10px 0 0 0
      border-radius: 10px
      display: flex
      justify-content: center

      .infos
        width: 75%

        strong
          color: #333
          font-size: 0.9em

        p
          margin: 5px

      .btns
        display: flex
        align-items: center
        align-content: center
        width: 25%

    .box-layer-info.activated
      background: #d6f5d6

    .box-layer-info.disabled
      background: #ffd6cc
</style>
