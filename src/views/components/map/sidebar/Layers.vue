<template>
    <md-list-item md-expand>
        <md-icon>list</md-icon>
        <span class="md-list-item-text">{{ $t('map.sidebar.layers.title') }}</span>

        <md-list slot="md-expand">
            <section class="box-layers">

                <div class="row justify-content-center">
                    <button data-toggle="modal" data-target="#modalAddLayer" class="btn btn-success">
                        <md-icon>add_circle</md-icon>
                        <span class="title-button">{{ $t('map.sidebar.layers.btn') }}</span>
                    </button>
                </div>
                
                <div class="layers-sublink">
                    <md-list-item md-expand>
                        <span class="md-list-item-text">Selected</span>
                        
                        <md-list slot="md-expand">
                            <!--<div v-for="layer in layers" :key="layer.id">
                                <p-layers-item :status="layer.status" color="success" :title="layer.title" :group="vectorLayer"></p-layers-item>
                                <hr style="padding: 0; margin-top: 0"/>
                            </div>-->

                            <p-layers-item :status="true" :editColor="true" color="success" title="Streets" :group="vectorLayer"></p-layers-item>
                        </md-list>
                    </md-list-item>

                    <md-list-item md-expand>
                        <span class="md-list-item-text">DEFAULT</span>
                        
                        <md-list slot="md-expand">
                            <p-layers-item :status="true" :editColor="false" color="primary" title="OSM" :group="externalLayers" :view="false"></p-layers-item>                      
                        </md-list>
                    </md-list-item>
                </div>
                
            </section>
        </md-list>
    </md-list-item>

</template>
<script>
import LayersItem from '@/views/components/map/sidebar/LayersItem'
import { mapState } from 'vuex'

import {
    overlayGroup,
    overlayGroupExternal,
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    components: {
        'p-layers-item': LayersItem
    },
    computed: {
      ...mapState('map', ['layers'])
    },
    data(){
        return {
            vectorLayer: overlayGroup,
            rasterLayers: overlayGroupRasters,
            externalLayers: overlayGroupExternal
        }
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 10px 10px 0 10px 
        color: #000

        .btn
            .md-icon
                margin-right: 5px !important
            .title-button
                margin-left: 0
                font-size: 1em
                font-weight: 600
        
        .layers-sublink
            margin-top: 10px

            .md-list
                padding: 20px 10px 5px 20px !important                
</style>