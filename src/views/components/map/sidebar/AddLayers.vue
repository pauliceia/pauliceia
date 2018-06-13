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

                    <article v-for="layer in allLayers" :key="layer.id">
                        <span :test="layerON = layers.some(id => id == layer.id)" />
                        
                        <div :class="layerON ? 'box-layer-info activated' : 'box-layer-info disabled'">
                            <div class="infos">
                                <p><strong>TITLE:</strong> {{ layer.title }}</p>
                                <p><strong>AUTORES:</strong>
                                    <span v-for="author in layer.authors" :key="author">
                                        {{ author }}; 
                                    </span> 
                                </p>                            
                                <p><strong>TAGS:</strong> 
                                    <el-tag v-for="tag in layer.tags" :key="tag" style="margin-left: 5px">
                                        {{ tag }}
                                    </el-tag>
                                </p>
                            </div>

                            <div class="btns">
                                <el-button :type="layerON ? 'danger' : 'success'" round>
                                    {{ layerON ? 'Destivar' : 'Ativar' }}
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

import DataJson from '@/views/assets/js/indexLayersTest'

export default {
    watch: {
        filterText(val){
            if(val=='') this.allLayers = DataJson
            else this.allLayers = DataJson.filter( infoLayer => 
                infoLayer.title.toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                infoLayer.authors.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0 ||
                infoLayer.tags.toString().toLowerCase().indexOf(val.toLowerCase()) >= 0
            )
        }
    },

    computed: {
      ...mapState('map', ['layers'])
    },

    data() {
      return {
        filterText: '',
        allLayers: [],
        layerON: false
      }
    },

    mounted() {
        this.allLayers = DataJson
    }
  };
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