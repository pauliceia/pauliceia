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
                    <el-input
                        placeholder="Search Here"
                        v-model="filterText">
                    </el-input>
                    <br/>

                    <article v-for="layer in listLayers" :key="layer.id">
                        <div :class="layers.some(id => id == layer.properties.layer_id) ? 'box-layer-info activated' : 'box-layer-info disabled'">
                            <div class="infos">
                                <p><strong>TITLE:</strong> {{ layer.properties.name }}</p>
                                <p><strong>AUTORES:</strong>
                                    <span v-for="author in layer.properties.authors" :key="author.properties.user_id">
                                        {{ getAuthorName(author)[0].properties.name }};
                                    </span> 
                                </p>
                                <p><strong>TAGS:</strong> 
                                    <el-tag v-for="id in layer.properties.keyword" :key="id" style="margin-left: 5px">
                                        {{ getTagName(id)[0].properties.name }}
                                    </el-tag>
                                </p>
                            </div>

                            <div class="btns">
                                <el-button :type="layers.some(id => id == layer.properties.layer_id) ? 'danger' : 'success'" round @click="layers.some(id => id == layer.properties.layer_id) ? disabled(layer) : active(layer)">
                                    {{ layers.some(id => id == layer.properties.layer_id) ? 'Desativar' : 'Ativar' }}
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

import Map from '@/middleware/Map'
import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'

export default {
    watch: {
        filterText(val){
            if(val=='') this.listLayers = this.allLayers
            else {
                this.listLayers = this.allLayers.filter( infoLayer => {
                    infoLayer.properties.authorName = this.allAuthorsLayers.map( item => {
                        if(infoLayer.properties.layer_id == item.properties.layer_id) return this.getAuthorName(item)[0].properties.name
                    })
                    infoLayer.properties.tagName = infoLayer.properties.keyword.map( id => {
                        return this.getTagName(id)[0].properties.name
                    })

                    if( infoLayer.properties.name.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                        infoLayer.properties.authorName.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                        infoLayer.properties.tagName.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0 ) return infoLayer
                } )
            }
        }
    },

    computed: {
      ...mapState('map', ['layers'])
    },

    data() {
      return {
        filterText: '',
        listLayers: [],
        allLayers: [],
        allKeywords: [],
        allAuthorsLayers: [],
        layerON: false
      }
    },

    async mounted() {
        try {
            let layers = await Map.getLayers(null)
            this.allLayers = layers.data.features

            let keywords = await Map.getKeyword()
            this.allKeywords = keywords.data.features

            let authors = await Map.getAuthors()
            this.allAuthors = authors.data.features

            let authors_layers = await Map.getAuthorsLayers()
            this.allAuthorsLayers = authors_layers.data.features

            this.listLayers = this.allLayers.map( layer => {
                layer.properties.authors = this.allAuthorsLayers.filter( item => item.properties.layer_id == layer.properties.layer_id )
                return layer
            })

        } catch (error) {
            this.$alert('Serviço indisponível, tente mais tarde ou comunique nosso suporte!', 'Erro Interno', {
                confirmButtonText: 'OK',
                type: 'error'
            });
        }
    },

    methods: {
        getTagName(id){
            return this.allKeywords.filter( key => key.properties.keyword_id == id)
        },
        getAuthorName(item){
            return this.allAuthors.filter( author => author.properties.user_id == item.properties.user_id )
        },
        disabled(layer) {
            //remove of map
            this.$store.dispatch('map/setRemoveLayers', layer.properties.layer_id)
        },
        active(layer) {
            let vectorLayer = new ol.layer.Vector({
                title: layer.properties.f_table_name,
                source: new ol.source.Vector({
                    url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=postgres:'+layer.properties.f_table_name+'&outputFormat=application%2Fjson',
                    format: new ol.format.GeoJSON(),
                    crossOrigin: 'anonymous',
                })
            });

            overlayGroup.getLayers().push( vectorLayer );
            this.$store.dispatch('map/setNewLayers', layer.properties.layer_id)
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