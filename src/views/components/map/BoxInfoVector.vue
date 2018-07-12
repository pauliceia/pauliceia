<template>
    <div class="box-info" v-show="boxInfoVector">
        <header class="header">
            <h1>{{ $t('map.viewInfoVector.title').toUpperCase() }}</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
        <div class="body">
            <div class="row justify-content-md-center">
                <button class="btn btn-success" @click="getFeature()">{{ $t('map.viewInfoVector.btnFeature').toUpperCase() }}</button> 
                <button class="btn btn-secondary">{{ $t('map.viewInfoVector.btnBox').toUpperCase() }}</button> 
                <button class="btn btn-danger" @click="clear()">{{ $t('map.viewInfoVector.btnClean').toUpperCase() }}</button>
            </div>

            <div class="result" v-if="result[0]">
                <p>Atributos da Feature:</p>
                <table class="table">
                    <tr v-for="element in result" :key="element.key">
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

export default {
    computed: {
      ...mapState('map', ['boxInfoVector', 'idInfoFeatureLayer'])
    },

    data() {
        return {
            select: null,
            result: []
        }
    },

    watch: {
        idInfoFeatureLayer(val){
            if(val != null) {
                this.result = []
                this.$root.olmap.removeInteraction(this.select)
            }
        }
    },
    
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxInfoVector', false)
        },
        getFeature() {
            //REMOVE INTERATIONS
            if(!this.result[0]){
                this.clear()

                //ADD INTERACTION 
                this.select = new ol.interaction.Select()
                this.$root.olmap.addInteraction(this.select)
            }           

            const vm = this
            this.select.on('select', (event) => {
                vm.result = []
                event.selected
                    .forEach( feat => {
                        $.each(feat.getProperties(), function(index, value) {
                            if (typeof(value) !== 'object') {
                                vm.result.push({
                                    key: index, value
                                })
                            }
                        });
                    })
            });
        },
        clear() {
            this.$store.dispatch('map/setIdInfoFeatureLayer', null)
            this.$root.olmap.getInteractions().clear()
            this.$root.olmap.getOverlays().clear()
            this.result = []
        }
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 40px
    right: 0
    overflow: auto
    padding: 20px 20px
    background: rgba(#FFF, 0.9)
    z-index: 1
    max-width: 50%
    max-height: 75%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
        h1
            padding: 10px
            font-size: 2em
            display: inline-block
            margin: 0 !important

        .btn
            margin-top: 3px !important
            background: none
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)
    
    .body
        padding: 15px 0
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