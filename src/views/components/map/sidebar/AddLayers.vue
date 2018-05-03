<template>
    <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <p class="title-box">{{ $t('map.addLayer.subtitle') }}</p>
                    <input type="text" class="form-control" v-model="search" :placeholder="$t('map.addLayer.input')"/>
            
                    <v-jstree :data="data" size="large" show-checkbox multiple allow-batch whole-row ref="tree" @item-click="itemClick"></v-jstree>    
                    <button class="btn btn-block btn-outline-success" type="button" @click="updateListLayers()">SAVE</button>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('map.addLayer.close') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VJstree from 'vue-jstree'

import DataJson from '@/views/assets/js/indexThemesTest'
import DataLayers from '@/views/assets/js/indexLayersTest'

export default {
    components: {
        VJstree
    },
    data() {
        return {
            originalData: DataJson,
            data: DataJson,
            search: null,
            selected: {}
        }
    },
    methods: {
        itemClick (node) {
            // let indice = node.model.id.toString()
            // this.selected = { ...this.selected, node.model.id }
            // console.log(this.selected)
        },
        cleanString(s) {
            return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        },
        filterTreeview(search) {
            let text = this.cleanString(this.search.toLowerCase())
            const patt = new RegExp(text);

            this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, (node) => {
                if (text !== '' && node.model !== undefined) {
                    const str = this.cleanString(node.model.text.toLowerCase())

                    if (patt.test(str)) {
                        node.$el.querySelector('.tree-anchor').style.color = 'green'
                    } else {
                        node.$el.querySelector('.tree-anchor').style.color = '#000'
                    }

                } else {
                    node.$el.querySelector('.tree-anchor').style.color = '#000'
                }
            })
        },
        updateListLayers(){
            // this.selected.forEach( id => {
            //     let layer = DataLayers.filter( element => element.id == id)
            //     if(layer[0] != null){
            //         console.log(layer)
            //     }
            // })
        }
    },
    watch: {
        search(val) {
            this.filterTreeview(val)
        }
    }
}
</script>


<style lang="sass" scoped>
.modal-content
    .modal-body
        .btn
            display: block
            margin: 20px 0 10px 0
        .title-box
            color: #58595b !important
</style>