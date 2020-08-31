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
          <el-input :placeholder="$t('map.addLayer.input')" v-model="filterText"></el-input>
          <br />

          <article v-for="layer in listLayers" :key="layer.id">
            <div
              :class="layers.some(id => id == layer.properties.layer_id) ? 'box-layer-info activated' : 'box-layer-info disabled'">
              <div class="infos">
                <p><strong>{{ $t('map.addLayer.box.lbTitle') }}:</strong> {{ layer.properties.name }}</p>
                <p>
                  <strong>{{ $t('map.addLayer.box.lbAuthors') }}:</strong>
                  <span v-for="author in layer.properties.authors" :key="author.properties.user_id">
                      {{ getAuthorName(author) }};
                  </span>
                </p>
                <p>
                  <strong>{{ $t('map.addLayer.box.lbKeywods') }}:</strong>
                    <el-tag v-for="id in layer.properties.keyword" :key="id" style="margin-left: 5px">
                        {{ getTagName(id)[0].properties.name }}
                    </el-tag>
                </p>
              </div>

              <div class="btns">
                <el-button :type="layers.some(id => id == layer.properties.layer_id) ? 'danger' : 'success'"
                   round :disabled="btnDisabled"
                   @click="layers.some(id => id == layer.properties.layer_id) ? disabled(layer) : active(layer)">
                  {{ layers.some(id => id == layer.properties.layer_id) ? $t('map.addLayer.btns.disable') : $t('map.addLayer.btns.active') }}
                </el-button>
              </div>
            </div>
          </article>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('map.addLayer.close') }}</button>
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
      filterText (val) {
        if (val == '')
          this.listLayers = this.allLayers
        else {
          this.listLayers = this.allLayers.filter(infoLayer => {
            infoLayer.properties.authorName = this.allAuthorsLayers.map(item => {
              if (infoLayer.properties.layer_id == item.properties.layer_id) {
                return this.getAuthorName(item)
                // return this.getAuthorName(item)[0].properties.name  // Beto's version
              }
            })
            infoLayer.properties.tagName = infoLayer.properties.keyword.map(id => {
              return this.getTagName(id)[0].properties.name
            })

            if (infoLayer.properties.name.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
              infoLayer.properties.authorName.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
              infoLayer.properties.tagName.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0)
                return infoLayer
          })
        }
      }
    },
    computed: {
      ...mapState('map', ['layers'])
    },
    data () {
      return {
        loading: '',
        btnDisabled: false,
        filterText: '',
        listLayers: [],
        allLayers: [],
        allKeywords: [],
        allAuthorsLayers: []
      }
    },
    async mounted () {
      try {
        let layers = await Map.getLayers(null)
        this.allLayers = layers.data.features

        let keywords = await Map.getKeywords()
        this.allKeywords = keywords.data.features

        let authors = await Map.getAuthors()
        this.allAuthors = authors.data.features

        let authors_layers = await Map.getAuthorsLayers(null)
        this.allAuthorsLayers = authors_layers.data.features

        this.listLayers = this.allLayers.map(layer => {
          layer.properties.authors = this.allAuthorsLayers.filter(item => item.properties.layer_id == layer.properties.layer_id)
          return layer
        })

      } catch (error) {
        this.$alert(this.$t('map.addLayer.msg.errMsg'), this.$t('map.addLayer.msg.errTitle'), {
          confirmButtonText: 'OK',
          type: 'error'
        });
      }
    },
    methods: {
      getTagName (id) {
        return this.allKeywords.filter(key => key.properties.keyword_id == id)
      },
      // Silas' version
      getAuthorName (item) {
        const result = this.allAuthors.filter(author => author.properties.user_id == item.properties.user_id);

        if (!!result[0]) {
          return result[0].properties.name;
        }

        return '';
      },
      // Beto's version
      // getAuthorName(item){
        //     return this.allAuthors.filter( author => author.properties.user_id == item.properties.user_id )
      // },
      async active(layer) {
        if(this.btnDisabled == false)
            this.btnDisabled = true

        this._openFullScreen()
        const vm = this

        try {
            let url = process.env.urlGeoserver+'/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:'+layer.properties.f_table_name+'&outputFormat=application%2Fjson';

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

              overlayGroup.getLayers().push( vectorLayer )

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
      disabled (layer) {
        if (this.btnDisabled == false)
          this.btnDisabled = true
        overlayGroup.getLayers().forEach(sublayer => {
          if (sublayer != undefined && sublayer.get('id') != undefined && sublayer.get('id') == layer.properties.layer_id) {
            overlayGroup.getLayers().remove(sublayer)
            this.$store.dispatch('map/setRemoveLayers', layer.properties.layer_id)
            this.btnDisabled = false
            return true
          }
        })
      },
      _openFullScreen () {
        this.loading = this.$loading({
          lock: true,
          text: 'Construindo Mapa',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
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
