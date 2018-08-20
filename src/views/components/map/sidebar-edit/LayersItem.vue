<template>
    <div class="box-item">
        <el-popover
            placement="top-start"
            v-if="status"
            title="Camada Inativa"
            content="Antes de editar, ATIVE a camada no mapa!"
            width="200"
            trigger="click">
            <el-radio slot="reference" disabled class="radioDisabled" border>{{ name }}</el-radio>
        </el-popover>   
        
        <el-radio v-else :label="id" class="radio" border>{{ name }} 
            <!-- <button style="background: green; color: #margin-left: 5px" round>FINALIZAR</button> -->
            <el-button v-if="layerId == id" type="success" size="mini" style="margin-top: -10px; margin-left: 1px" @click.native="finishEdit()">FINALIZAR</el-button>
        </el-radio>
    </div>
</template>
<script>
import { mapState } from 'vuex'

import Map from '@/middleware/Map'

export default {
    props: {
        id: Number
    },

    watch: {
        layers() {
            this._getStatus()
        }
    },

    computed: {
        ...mapState('map', ['layers']),
        ...mapState('edit', ['layerId'])
    },

    data() {
        return {
            status: false,
            name: ''
        }
    },

    async mounted(){
        this._getStatus()

        let response = await Map.getLayers('layer_id='+this.id)
        this.name = response.data.features[0].properties.name.toUpperCase()
    },

    methods: {
        _getStatus() {
            this.status = !this.layers.some( layer => layer == this.id )
        },
        finishEdit(){
            let id = this.id
            this.$emit('finishEdit', id)
        }
    }
}
    
</script>
<style lang="sass" scoped>
.box-item
    padding: 0 10px

    .radio
        border-color: #CCC !important
        background: rgba(#FFF, 0.5)

    .radioDisabled
        color: #333 !important
        border-color: #CCC !important
        background: rgba(#FFF, 0)
</style>