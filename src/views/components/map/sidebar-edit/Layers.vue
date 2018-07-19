<template>
    <section class="box-edit">

        <div class="box-layers">
            <div v-if="user != null && user.user_id !== undefined && user.user_id != null">
                <p class="title">
                    <i class="el-icon-edit-outline"></i>
                    Selecione uma camada para editar: 
                </p>
                <el-radio-group v-model="layerIdSelected">
                    <div class="layers" v-for="layerId in myLayersId" :key="layerId">
                        <p-sidebarEdit-item :id="layerId" />
                    </div>
                </el-radio-group>

                <div v-if="myLayersId.length == 0">
                    <el-alert
                        title="Você não possui camadas associadas ao seu usuário, adicione para poder editar!"
                        type="info"
                        center :closable="false"
                        show-icon />
                </div>
            </div>

            <div v-else>
                <el-alert
                    title="ERRO! Você não tem permissão para acessar esse recurso."
                    type="error"
                    center
                    show-icon>
                </el-alert>
            </div>
        </div>

    </section>
</template>
<script>
import { mapState } from 'vuex'

import LayersItem from '@/views/components/map/sidebar-edit/LayersItem'
import Map from '@/middleware/Map'

export default {
    components: {
        'p-sidebarEdit-item': LayersItem
    },

    computed: {
        ...mapState('auth', ['user'])
    },
    
    watch: {
        layerIdSelected(val) {
            this._alterLayer(val)
        }
    },

    data(){
        return {
            myLayersId: [],
            layerIdSelected: null
        }
    },

    async mounted() {
        if(this.user != null && this.user.user_id != undefined && this.user.user_id != null) {
            let response = await Map.getAuthorsLayers('user_id='+this.user.user_id)
            if(response.status == 200)
                this.myLayersId = response.data.features.map( layer => layer.properties.layer_id )
        }
    },

    methods: {
        _alterLayer(layerId) {
            this.$store.dispatch('edit/setLayerId', layerId)
        }
    }

}
    
</script>
<style lang="sass" scoped>  
.box-edit
    //BOX LAYERS
    .box-layers
        background: rgba(#FFF, 0.2)
        padding: 20px 10px 20px 10px 
        color: #FFF
        overflow: auto
        
        .title
            text-transform: uppercase
            font-size: 1.2em
            font-weight: 700
            width: 100%
            text-align: center

    .box-layers::-webkit-scrollbar 
        width: 0.7em
 
    .box-layers::-webkit-scrollbar-track 
        -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.5)

    .box-layers::-webkit-scrollbar-thumb 
        background-color: rgba(#000, 0.5)
        outline: 1px solid red
</style>