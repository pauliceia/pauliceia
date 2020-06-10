<template>
    <div class="box-info" v-show="boxInfoVector">
        <header class="header">
            <h1>{{ $t('map.viewInfoVector.title') }}</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
        <div class="body">
            <div class="row justify-content-md-center">
                <button class="btn btn-success" @click="getFeature()">{{ $t('map.viewInfoVector.btnFeature') }}</button>
                <button class="btn btn-secondary" @click="getBox()">{{ $t('map.viewInfoVector.btnBox') }}</button>
                <button class="btn btn-danger" @click="clear()">{{ $t('map.viewInfoVector.btnClean') }}</button>
            </div>

            <div class="result" v-if="resultProperties[0]">
                <p>Atributos da Feature:</p>
                <table class="table" v-for="resultAttr in resultProperties" :key="resultAttr.id">
                    <tr v-for="element in resultAttr" :key="element.key">
                        <td><strong><i>{{ element.key }}:</i></strong></td>
                        <td>{{ element.value }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'
import {
    emptyStyle,
    pointSelectStyle,
    lineSelectStyle,
    polygonSelectStyle
} from '@/views/assets/js/map/Styles'

export default {
    computed: {
      ...mapState('map', ['boxInfoVector', 'idInfoFeatureLayer']),
      ...mapState('edit', ['layerId'])
    },
    data() {
        return {
            select: null,
            box: null,
            resultVectors: [],
            resultProperties: []
        }
    },
    watch: {
        idInfoFeatureLayer(val){
            //alguma feature de uma camada foi selecionada para visualização
            if(val != null) {
                this._clearInteractions()
            }
        },
        layerId(val){
            //alguma camada foi selecionada p/ edição
            if(val != null) {
                this._clearInteractions()
            }
        }
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxInfoVector', false)
        },
        async getFeature() {
            //REMOVE INTERATIONS
            if(this.select == null){
                this.$store.dispatch('edit/setLayerId', null)
                this.$store.dispatch('map/setIdInfoFeatureLayer', null)
                this._clearInteractions()

                //ADD INTERACTION
                this.select = new ol.interaction.Select()
                this.$root.olmap.addInteraction(this.select)
            }

            const vm = this

            this.select.on('select', (event) => {
                vm.resultVectors = []
                let featureSelected = event.selected[0]

                if(featureSelected !== undefined) {
                    //selecionando as features com a mesma geometria
                    vm.resultVectors.push(featureSelected)
                    featureSelected.setStyle()

                    //selecionando as features com a mesma geometria
                    overlayGroup.getLayers().forEach(sublayer => {
                        if(sublayer != undefined && sublayer.get('id') != undefined) {

                            sublayer.getSource().getFeatures().forEach(feat => {
                                let formatWKT = new ol.format.WKT();
                                let featSelectWKT = formatWKT.writeFeature(featureSelected);
                                let featWKT = formatWKT.writeFeature(feat)

                                if( (featWKT == featSelectWKT) && (JSON.stringify(feat.getStyle()) !== JSON.stringify(emptyStyle)) && feat.getId() != featureSelected.getId() ){
                                    vm.resultVectors.push(feat)
                                }
                            })
                        }
                    })

                    vm.defineListProps(vm.resultVectors)
                } else {
                    this.resultVectors = []
                    this.resultProperties = []
                }
            });
        },
        async getBox() {
            if(this.resultVectors[0] != undefined){
                this.$store.dispatch('edit/setLayerId', null)
                this.$store.dispatch('map/setIdInfoFeatureLayer', null)
                this._clearInteractions()
            }

            //ADD INTERACTION
            this.box = new ol.interaction.DragBox()
            this.$root.olmap.addInteraction(this.box)

            let vm = this

            this.box.on('boxend', (event) => {
                let extent = vm.box.getGeometry().getExtent()

                overlayGroup.getLayers().forEach(sublayer => {
                    if(sublayer != undefined && sublayer.get('id') != undefined && sublayer.getVisible() == true) {

                        sublayer.getSource().forEachFeatureIntersectingExtent(extent, feature => {
                            if(JSON.stringify(feature.getStyle()) !== JSON.stringify(emptyStyle) ){
                                // feature.setStyle(lineSelectStyle)
                                vm.resultVectors.push(feature)
                            }
                        })
                    }
                })

                vm.defineListProps(vm.resultVectors)
                this.$root.olmap.removeInteraction(this.box)
            })
        },
        defineListProps(resultVectors) {
          this.resultProperties = resultVectors.map(feature => {
            let result = [
              {
                key: "id",
                value: feature.getId().split('.')[1]
              }
            ]

            for (const [key, value] of Object.entries(feature.getProperties())) {
              // do not add to the info box the `changeset_id` and `version` properties
              if (key === 'changeset_id' || key === 'version')
                continue

              if (typeof(value) !== 'object')
                result.push({key, value})
            }

            return result
          })
        },
        clear() {
            this.$store.dispatch('edit/setLayerId', null)
            this.$store.dispatch('map/setIdInfoFeatureLayer', null)
            this._clearInteractions()
        },
        _clearInteractions() {
            this.$root.olmap.removeInteraction(this.select)
            this.$root.olmap.removeInteraction(this.box)
            this.select = null
            this.box = null
            this.$root.olmap.getOverlays().clear()
            this.resultVectors = []
            this.resultProperties = []
        }
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 20px
    right: 60px
    border-radius: 10px
    overflow: auto
    padding: 10px
    background: rgba(#FFF, 0.7)
    z-index: 1
    max-width: 50%
    min-width: 40%
    max-height: 75%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
        h1
            padding: 5px 5px 10px 5px
            font-size: 1.3em
            font-weight: 400
            font-family: 'Roboto' !important
            display: inline-block
            margin: 0 !important

        .btn
            margin: 3px !important
            padding: 2px !important
            background: none
            font-size: 1em
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)

    .body
        padding: 15px 10px
        background: #FFF
        button
            margin: 0 10px 0 0

        .result
            p
                font-size: 1.3em
                font-weight: 700
                padding: 0px 10px
                margin: 25px 2px 10px 2px
                border-left: 2px solid #000

            .table td
                border: 1px solid #CCC
            .table
                background: rgba(#000, 0.03)

</style>
