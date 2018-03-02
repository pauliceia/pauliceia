<template>
    <div class="switches">
        <switches v-model="btnOSM" theme="bootstrap" color="primary"></switches> 
        <span>OSM</span>
    </div>
</template>

<script>
import Switches from 'vue-switches'

import {
    overlayGroupBase
} from '@/views/assets/js/map/overlayGroup'

export default {
    name: "LayersBase",
    components: {
        Switches
    },
    data() {
        return {
            btnOSM: true,
            osm: new ol.layer.Tile({
                title: 'OSM',
                type: 'base',
                source: new ol.source.OSM()
            })
        }
    },
    created() {
        if(this.btnOSM) overlayGroupBase.getLayers().push(this.osm)
    },
    watch: {
        btnOSM(val) {
            if(overlayGroupBase.getLayers().getLength() == 1) overlayGroupBase.getLayers().pop();
            else overlayGroupBase.getLayers().push(this.osm)
        }
    }
}
    
</script>

<style lang="sass" scoped>
    .switches 
        display: flex
        position: absolute
        z-index: 1
        color: #304A73
        top: 100px
        right: 20px
        font-weight: 600
        font-size: 1.8em
        padding: 15px 15px 5px 15px !important
        border-radius: 10px
        background-color: rgba(#fff, 0.7)

        span
            margin-left: 10px
      
</style>