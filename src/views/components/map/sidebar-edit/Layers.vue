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
                        <p-sidebarEdit-item :id="layerId" @finishEdit="id => closeChangeset(id)" />
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
import Edit from '@/middleware/Edit'

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
            layerIdSelected: null,
            lastLayerIdSelected: null,
            description: '',
            changeset: null
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
            if(this.layerIdSelected != null)
                if(this.lastLayerIdSelected == null) {
                    this._createChangeset(layerId)
                } else {
                    this.$alert('Você está editando outra layer, favor finalize a primeira antes!', 'Erro', {
                        dangerouslyUseHTMLString: true,
                        confirmButtonText: 'OK',
                        type: 'error'
                    });
                    this.layerIdSelected = this.lastLayerIdSelected
                }
        },
        _createChangeset(layerId){
            const vm = this
            const h = this.$createElement

            this.$msgbox({
                title: 'Inicializando modificação de uma Layer',
                message: h('p', null, [
                    h('span', null, 'Adicione um título para suas alterações:'),
                ]),
                showInput: true,
                inputValue: vm.description,
                showCancelButton: true,
                confirmButtonText: 'INICIALIZAR',
                cancelButtonText: 'CANCELAR',
                beforeClose: async (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true
                        instance.confirmButtonText = 'Loading...'

                        if(instance.inputValue != '') {
                            try{
                                let changesetProps = {
                                    'changeset_id': -1,
                                    'layer_id': layerId,
                                    'description': instance.inputValue
                                }
                                let changeset = {
                                    'properties': changesetProps,
                                    'type': 'Changeset'
                                }
                                let response = await Edit.createChangeset(changeset)
                                this.changeset = response.data

                                vm.$store.dispatch('edit/setChangesetId', this.changeset)
                                vm.$store.dispatch('edit/setLayerId', layerId)

                                //limpar interactions
                                vm.lastLayerIdSelected = vm.layerIdSelected
                                instance.inputValue = ''
                                instance.confirmButtonLoading = false
                                done()
                            } catch(error) {
                                vm.lastLayerIdSelected = vm.layerIdSelected
                                instance.inputValue = ''
                                instance.confirmButtonLoading = false
                                done()
                            }
                        } else {
                            instance.confirmButtonLoading = false
                            instance.confirmButtonText = 'INICIALIZAR'
                        }

                    } else {
                        instance.inputValue = ''
                        vm.lastLayerIdSelected = null
                        vm.layerIdSelected = null
                        done()
                    }
                }
            }).then(_ => {
                this.$message({
                    type: 'warning',
                    message: 'EDIÇÃO inicializada com sucesso, ao terminar não se esqueça de clicar no botão "FINALIZAR", para concluir!'
                });
            });
        },
        async closeChangeset(id){
            let response = await Edit.closeChangeset(this.changeset)
            this.changeset = null
            this.$store.dispatch('edit/setChangesetId', null)

            this.lastLayerIdSelected = null
            this.$store.dispatch('edit/setLayerId', null)
            this.layerIdSelected = null

            this.$alert('Edições finalizadas com sucesso!', 'Sucesso', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: 'success'
            });
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
