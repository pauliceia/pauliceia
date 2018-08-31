<template>
    <div class="box-func-edit">
        <el-radio-group v-model="option" size="medium">
            <el-radio-button label="ADD" @click.native="add()"><i class="el-icon-plus"></i> ADD</el-radio-button>
            <el-radio-button label="EDIT" @click.native="edit()"><i class="el-icon-edit"></i> EDIT</el-radio-button>
            <el-radio-button label="DEL" @click.native="remove()"><i class="el-icon-close"></i> DEL</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Edit from '@/middleware/Edit'

export default {
    props: ['source'],

    computed: {
        ...mapState('edit', ['layerId']),
        ...mapState('edit', ['changesetId'])
    },

    data() {
        return {
            option: null,
            selectEdit: null,
            selectRemove: null,
            modify: null,
            draw: null
        }
    },

    watch: {
        layerId(val){
            //alguma camada foi selecionada p/ edição
            if(val == null) {
                this._clearInteractions()
            }
        }
    },

    methods: {
        async add(){
            let vm = this
            this._clearInteractions()
            this.$store.dispatch('edit/setFuncSelected', 'add')

            if(vm.source.getFeatureById('waiting') == null) {
                let formatWKT = new ol.format.WKT()
                this.draw = new ol.interaction.Draw({ 
                    source: vm.source,
                    type: 'MultiLineString'
                })
                
                this.$root.olmap.addInteraction(this.draw)
                this.draw.on('drawend', function(e) {
                    e.feature.setId('waiting')
                    let wkt = formatWKT.writeFeature(e.feature.clone())

                    vm.$store.dispatch('edit/setFeaturesWKT', wkt)
                    vm.$root.olmap.removeInteraction(vm.draw)
                    vm.draw = null
                })
            }

            let properties = vm.source.getFeatures()[0].getProperties()
            await Object.keys(properties).map( (index, key) => {
                properties[index] = null
            })
            this.$store.dispatch('edit/setAttr', properties)
        },
        edit() {
            let vm = this
            this._clearInteractions()
            this.$store.dispatch('edit/setFuncSelected', 'edit')

            this.selectEdit = new ol.interaction.Select({
                layers: layer => layer.getSource() == vm.source
            })
            this.$root.olmap.addInteraction(this.selectEdit)

            this.modify = new ol.interaction.Modify({
                features: vm.selectEdit.getFeatures()
            })
            this.$root.olmap.addInteraction(this.modify)

            this.selectEdit.on('select', event => {
                let featureSelect = event.selected
                if(featureSelect.length != 0)
                    if(featureSelect[0].getId() == undefined || featureSelect[0].getId() == 'waiting') 
                        this.$store.dispatch('edit/setAttr', null)
                    else {
                        featureSelect[0].setStyle()
                        this.$store.dispatch('edit/setAttr', featureSelect[0].getProperties())
                    }          
            })
        },
        remove() {
            let vm = this
            this._clearInteractions()

            this.selectRemove = new ol.interaction.Select({
                layers: layer => layer.getSource() == vm.source
            })
            this.$root.olmap.addInteraction(this.selectRemove)

            this.selectRemove.on('select', event => {
                let featureSelect = event.selected
                if(featureSelect.length != 0) {
                    if(featureSelect[0].getId() == undefined || featureSelect[0].getId() == 'waiting') 
                        vm.source.removeFeature(featureSelect[0])
                    else {
                        featureSelect[0].setStyle()
                        this.$confirm('Você irá remover a feature selecionada. Deseja continuar?', 'Warning', {
                            confirmButtonText: 'SIM',
                            cancelButtonText: 'NÃO',
                            type: 'warning'
                        }).then(async _ => {
                            try {
                                let layerName = featureSelect[0].getId().substr(0, (featureSelect[0].getId().lastIndexOf('.')))
                                let featureId = featureSelect[0].getId().substr(featureSelect[0].getId().lastIndexOf('.')+1)
                                let response = await Edit.deleteFeature(layerName, featureId, this.changesetId)
                                
                                vm.source.removeFeature(featureSelect[0])
                                this.$message({
                                    message: 'Feature excluída com sucesso!',
                                    type: 'success'
                                });
                            } catch (error) {
                                this.$message({
                                    message: 'Erro na plataforma, não foi possível excluir o vetor!',
                                    type: 'error'
                                });
                            }                        
                        }).catch(_ => {
                            return false
                        })    
                    }
                }
            })
        },
        _clearInteractions(){
            this.$store.dispatch('map/setIdInfoFeatureLayer', null)
            this.$store.dispatch('edit/setAttr', null)
            this.$store.dispatch('edit/setFuncSelected', null)
            this.$store.dispatch('edit/setFeaturesWKT', null)
            this.$root.olmap.removeInteraction(this.selectEdit)
            this.$root.olmap.removeInteraction(this.selectRemove)
            this.$root.olmap.removeInteraction(this.modify)
            this.$root.olmap.removeInteraction(this.draw)
            this.selectEdit = null
            this.selectRemove = null
            this.modify = null
            this.draw = null
        }
    }
}
</script>

<style lang="sass" scoped>
</style>