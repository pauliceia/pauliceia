<template>
    <section class="box-attr" v-show="attr !== null">
        <p class="title">
            <i class="el-icon-caret-right" style="color: red"></i>
            Altere as informações:
        </p>
        <div class="form-attr">
            <div v-for="prop in properties" :key="prop != undefined ? prop.key : null">
                <div v-if="prop != undefined">
                    <label>{{ prop.key }}:</label>
                    <input :type="_getAttrLayer(prop.type)" :name="prop.key" v-model="prop.value" class="form-control form-control-sm" />
                </div>
            </div>
            <el-button type="primary" icon="el-icon-check" @click="updateFeature()" v-show="funcSelected == 'edit'" round>SALVAR</el-button>
            <el-button type="primary" icon="el-icon-check" @click="insertFeature()" v-show="funcSelected == 'add'" round>INSERIR</el-button>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Edit from '@/middleware/Edit'
import Map from '@/middleware/Map'

export default {
    computed: {
        ...mapState('edit', ['layerId', 'attr', 'funcSelected', 'featuresWKT', 'changesetId'])
    },

    data() {
        return {
            properties: null
        }
    },

    watch: {
        async attr(val) {
            if(val != null){
                let layerInfo = await Map.getLayers('layer_id=' + this.layerId)
                let f_name = layerInfo.data.features[0].properties.f_table_name

                let attrLayer = await Map.getAttrLayer('f_table_name=' + f_name)
                let attr = attrLayer.data.features[0].properties

                this.properties = Object.keys(val).map(index => {
                    if(index != "geometry" && index != "geom" && index != "id" && index != "changeset_id" && index != "version")
                        return {key: index, value: val[index], type: attr[index]}
                })
            } else {
                this.properties = null
            }
        }
    },

    methods: {
        async insertFeature() {
            if(this.featuresWKT != null) {
                try {
                    let propsObj = {}
                    await this.properties.forEach( props => {
                        if(props != undefined){
                            propsObj[props.key] = props.value
                        }
                    })

                    let layerInfo = await Map.getLayers('layer_id='+this.layerId)

                    let coordinates = ((this.featuresWKT.split('(')[1]).split(')')[0]).split(' ')
                    let newFeature = {
                        'f_table_name': layerInfo.data.features[0].properties.f_table_name,
                        'properties': { ...propsObj, id: -1, changeset_id: this.changesetId, version: 1 },
                        'geometry': {'coordinates': [[parseFloat(coordinates[0]), parseFloat(coordinates[1])]], 'type': 'MultiPoint'},
                        'type': 'Feature'
                    }

                    console.log(newFeature)

                    let response = await Edit.addFeature(newFeature)
                    console.log(response)
                    //atualizar as propriedades da feature

                } catch(error) {
                    this.$alert("Erro ao cadastrar o vetor, contate o administrador do sistema!", "Desculpa", {
                        dangerouslyUseHTMLString: true,
                        confirmButtonText: 'OK',
                        type: "error"
                    })
                }
            } else {
                this.$alert("É necessário inserir o vetor no mapa, primeiramente!", "Insira o vetor", {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: 'OK',
                    type: "error"
                })
            }
        },
        updateFeature() {
            this.$alert("Função ainda não implementada", "OPSSS", {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: "warning"
            })
        },
        _getAttrLayer(type){
            if(type=='numeric' || type=='integer') return 'number'
            else if(type=='timestamp') return 'date'
            else 'text'
        }
    }
}
</script>

<style lang="sass" scoped>
//BOX ATTR
.box-attr
    border-top: 1px solid #CCC
    padding: 20px 10px
    color: #FFF
    overflow: auto

    .title
        text-transform: uppercase
        font-size: 1.2em
        font-weight: 700

    .form-attr
        padding: 0px 15px

        label
            margin: 0px 0 2.5px 0
        input
            margin-bottom: 8px
        .el-button
            display: block
            float: right
            margin: 10px 0 -5px 0 !important
</style>
