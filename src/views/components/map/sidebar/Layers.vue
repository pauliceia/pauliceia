<template>
    <section class="box-layers">
        <!--<div v-for="layer in layers" :key="layer.id">
            <p-layers-item :status="layer.status" color="success" :title="layer.title" :group="vectorLayer"></p-layers-item>
            <hr style="padding: 0; margin-top: 0"/>
        </div>-->
        <p-layers-item :status="true" type="line"
                theme="General" color="#13ce66" 
                title="Streets" :group="vectorLayer"></p-layers-item>
        <p-layers-item :status="false" type="point"
                theme="General" color="#13ce66" 
                title="Places" :group="vectorLayer"></p-layers-item>

        <hr class="divisor" /> 

        <p-layers-item :status="true" theme="Base" color="blue" title="OSM" :group="externalLayers" :apps="false"></p-layers-item>                      
                
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
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 15px 20px 0 20px 
        color: #FFF

        .divisor
            background: #CCC
            margin-bottom: 25px       
</style>