<template>
    <section class="box-function" v-show="layerId != null">
        <p class="title">
            <i class="el-icon-caret-right" style="color: red"></i>
            Editando a camada '{{ layer.name }}' ({{ layer.type }}):
        </p>
        <center>
            <p-sidebarEdit-func-point v-show="layer.type == 'Point' || layer.type == 'MultiPoint'" :source="layer.vector"/>
            <p-sidebarEdit-func-line v-show="layer.type == 'MultiLineString' || layer.type == 'LineString'" :source="layer.vector"/>
            <p-sidebarEdit-func-polygon v-show="layer.type == 'MultiPolygon' || layer.type == 'Polygon'"/>

            <el-alert
                v-show="layer.type != null && layer.type != 'Point' && layer.type != 'MultiPoint' && layer.type != 'LineString' && layer.type != 'MultiLineString' && layer.type != 'Polygon' && layer.type != 'MultiPolygon'"
                title="Desculpa! Infelizmente nosso sistema ainda não trabalha com o tipo de geometria dessa camada."
                type="error"
                center
                show-icon>
            </el-alert>
        </center>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Map from '@/middleware/Map'

import Point from '@/views/components/map/sidebar-edit/func/Point'
import Line from '@/views/components/map/sidebar-edit/func/Line'
import Polygon from '@/views/components/map/sidebar-edit/func/Polygon'
import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'

export default {
    computed: {
        ...mapState('edit', ['layerId'])
    },

    components: {
        'p-sidebarEdit-func-point': Point,
        'p-sidebarEdit-func-line': Line,
        'p-sidebarEdit-func-polygon': Polygon
    },

    watch: {
        layerId(val){
            if(val != null) {
                this._getLayer(val)
            }
        }
    },

    data(){
        return {
            layer: {
                name: "",
                type: null,
                vector: null
            }
        }
    },

    methods: {
        async _getLayer(id){
            let response = await Map.getLayers('layer_id='+id)
            let properties = response.data.features[0].properties
            this.layer.name = properties.name.toUpperCase()
            
            overlayGroup.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === properties.f_table_name) {
                    this.layer.type = sublayer.getSource().getFeatures()[0].getGeometry().getType()
                    this.layer.vector = sublayer.getSource()
                }
            })
        }
    }
}
</script>

<style lang="sass" scoped>
//BOX FUNCTIONS 
.box-function
    border-top: 1px solid #CCC
    padding: 20px 10px
    color: #FFF

    .title
        text-transform: uppercase
        font-size: 1.2em
        font-weight: 700
</style>
