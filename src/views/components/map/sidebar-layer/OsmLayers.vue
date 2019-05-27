<template>
    <section class="box-layers">
        <p-sidebarLayer-item-static :group="externalLayers" color="#13ce66"></p-sidebarLayer-item-static>
        <p-sidebarLayer-item-rasters color="#13ce66"></p-sidebarLayer-item-rasters>
    </section>
</template>
<script>
// import LayersItem from '@/views/components/map/sidebar-layer/LayersItem'
import LayersItemStatic from '@/views/components/map/sidebar-layer/LayersItemStatic'
import LayersItemRasters from '@/views/components/map/sidebar-layer/LayersItemRasters'
import { mapState } from 'vuex'

import {
    overlayGroup,
    overlayGroupExternal,
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    components: {
        // 'p-sidebarLayer-item': LayersItem,
        'p-sidebarLayer-item-static': LayersItemStatic,
        'p-sidebarLayer-item-rasters': LayersItemRasters
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
        padding: 0
        color: #FFF
</style>
