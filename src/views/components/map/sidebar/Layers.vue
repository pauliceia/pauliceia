<template>
    <md-list-item md-expand>
        <md-icon>list</md-icon>
        <span class="md-list-item-text">{{ $t('map.sidebar.layers.title') }}</span>

        <md-list slot="md-expand">
            <section class="box-layers">

                <div class="row justify-content-center">
                    <button data-toggle="modal" data-target="#modalAddLayer" class="col-md-4 btn btn-success">
                        <md-icon>add_circle</md-icon>
                        <span class="title-button">ADD</span>
                    </button>
                    <button class="col-md-4 btn btn-danger">
                        <md-icon>clear</md-icon>
                        <span class="title-button">DEL</span>
                    </button>
                </div>
                
                <div class="layers-sublink">
                    <md-list-item md-expand>

                        <span class="md-list-item-text">Pauliceia</span>
                        
                        <md-list slot="md-expand">
                            <p-layers-item :status="true" color="success" title="Streets" :group="vectorLayer"></p-layers-item>
                            <p-layers-item :status="false" :editColor="false" color="success" title="Places" :group="vectorLayer"></p-layers-item>
                        </md-list>
                    </md-list-item>

                    <md-list-item md-expand>
                        <span class="md-list-item-text">Others</span>
                        
                        <md-list slot="md-expand">
                            <p-layers-item :status="true" :editColor="false" color="primary" title="OSM" :group="baseLayer" :view="false"></p-layers-item>                      
                        </md-list>
                    </md-list-item>
                </div>
                
            </section>
        </md-list>
    </md-list-item>

</template>
<script>
import LayersItem from '@/views/components/map/sidebar/LayersItem'

import {
    overlayGroup,
    overlayGroupBase,
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    components: {
        'p-layers-item': LayersItem
    },
    data(){
        return {
            vectorLayer: overlayGroup,
            baseLayer: overlayGroupBase,
            rasterLayers: overlayGroupRasters
        }
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 10px 10px 0 10px 
        color: #000

        .btn
            margin-right: 10px
            .md-icon
                margin-right: 5px !important
            .title-button
                margin-left: 0
                font-size: 1.2em
                font-weight: 600
        
        .layers-sublink
            margin-top: 10px

            .md-list
                padding: 20px 10px 5px 20px !important                
</style>