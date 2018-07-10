<template>
    <section class="box-layers">
        <div v-sortable="{ handle: '.handle', onEnd: reorder }">
            <div v-for="layerId in layers.slice().reverse()" :key="layerId">
            <p-layers-item v-if="layerId !== undefined" :status="true" type="line"
                    color="#13ce66" titleInit=""
                    :id="layerId" :group="vectorLayer">
                    <i class="el-icon-rank handle"></i>
                </p-layers-item>
            </div> 
        </div>  

        <p-layers-item :status="false" type="point"
                color="#13ce66" 
                titleInit="Places" :group="vectorLayer"></p-layers-item>
        <p-layers-item :status="true" type="line"
                color="#13ce66" 
                titleInit="Streets" :group="vectorLayer"></p-layers-item>

        <hr class="divisor" /> 
        <p-layers-item :status="true" color="blue" titleInit="OSM" :group="externalLayers" :apps="false"></p-layers-item>                    
                
    </section>
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
    },

    methods: {
        reorder (event) {
            this.layers.splice(event.newIndex, 0, this.layers.splice(event.oldIndex, 1)[0])
            
            this.vectorLayer.getLayers().forEach(sublayer => {
                if(sublayer.values_.id) {
                    sublayer.setZIndex( this.layers.indexOf(sublayer.values_.id)+2 )
                }
            })
        }
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 15px 10px 0 10px 
        color: #FFF

        .divisor
            background: #CCC
            margin-bottom: 25px       
</style>