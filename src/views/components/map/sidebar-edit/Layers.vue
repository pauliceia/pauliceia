<template>
    <section class="box-layers">
        <div v-if="user != null && user.id !== undefined && user.id != null">
            Suas Layers:
            -
        </div>

        <div v-else>
            <el-alert
                title="Erro! Você não tem permissão para acessar esse recurso."
                type="error"
                center
                show-icon>
            </el-alert>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'

import {
    overlayGroup,
    overlayGroupExternal,
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('map', ['layers'])
    },
    
    data(){
        return {
            vectorLayer: overlayGroup,
            rasterLayers: overlayGroupRasters,
            externalLayers: overlayGroupExternal,
            myLayers: []
        }
    },

    mounted() {
        // if(user.id)
        // let authors_layers = await Map.getAuthorsLayers(null)
        // this.allAuthorsLayers = authors_layers.data.features
        console.log('oi');
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 15px 10px 0 10px 
        color: #FFF  
</style>