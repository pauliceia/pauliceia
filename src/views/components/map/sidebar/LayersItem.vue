<template>
    <div :class="boxView ? 'box-item active' : 'box-item'"> 
        <switches v-model="layerStatus" :theme="theme ? theme: 'bootstrap'" :color="color"></switches> 
        
        <span>
            <b>{{ title.toUpperCase() }}</b>
            <span v-show="layerStatus && apps">                   
                <button class="btn-view" @click="boxView =! boxView">
                    <md-icon>apps</md-icon>
                </button>
            </span>
        </span>

        <div v-show="boxView && layerStatus && apps" class="box-options">
            <md-icon @click.native="extend()">center_focus_strong</md-icon>
            <md-icon @click.native="infos()">assignment</md-icon>
            <md-icon :class="getInfo ? 'active' : ''" @click.native="infosFeatures()">info</md-icon>
            <input type="color" class="btn-color" v-model="colorVector" />
            <md-icon>save_alt</md-icon>
        </div>
    </div>           
</template>
<script>
import Switches from 'vue-switches'

import {
    emptyStyle
} from '@/views/assets/js/map/Styles'

export default {
    components: {
        Switches
    },
    
    props: {
        status: Boolean,
        theme: String,
        color: String,
        title: String,
        group: Object,
        apps: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            boxView: false,
            layerStatus: true,
            colorVector: null,
            getInfo: false
        }
    },

    created(){
        this.layerStatus = this.status
        this.group.getLayers().forEach(sublayer => {
            if (sublayer.get('title') === this.title && this.layerStatus && this.apps) {
                this.colorVector = sublayer.getStyle().getStroke().getColor()
            }
        })
    },

    watch: {
        layerStatus(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title) sublayer.setVisible(this.layerStatus)
            })
        },
        colorVector(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title && this.layerStatus) {
                    let newStyle = new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: val,
                            width: 3
                        })
                    })

                    sublayer.getSource().getFeatures().map(features => {
                        if(features.getStyle() !== emptyStyle) features.setStyle(newStyle)
                    });
                    sublayer.setStyle(newStyle)
                }
            })
        }
    },

    methods: {
        extend(){
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title && this.layerStatus && this.apps) {                    
                    let extentLayer = sublayer.getSource().getExtent();
                    let extentEmpty = ol.extent.createEmpty();

                    ol.extent.extend(extentEmpty, extentLayer);
                    this.$root.olmap.getView().fit(extentEmpty, this.$root.olmap.getSize());
                }
            })
        },
        infos(){
            this.$store.dispatch('map/setBoxGeocoding', false)
            this.$store.dispatch('map/setBoxInfos', true)
        },
        infosFeatures(){
            this.getInfo = !this.getInfo

            if(this.getInfo) {
                let map = this.$root.olmap
                let titleLayer = this.title

                this.select = new ol.interaction.Select();
                this.$root.olmap.addInteraction(this.select);

                this.select.on('select', function(event) {
                    event.selected.filter( feature => ((feature.getId().split('.'))[0]) == titleLayer.toLowerCase() )
                        .forEach( feature => {
                            alert(feature.getProperties().name)
                        })
                });
            
            } else{
                this.$root.olmap.removeInteraction(this.select);
                this.select = null
            }
            
        }
    }
}
    
</script>
<style lang="sass" scoped>
.box-item
    margin-top: 5px
    padding: 10px 5px 5px 5px
    
    span
        padding-left: 7.5px
        font-size: 1.1em

        .btn-view
            background: none
            border: none
            color: #FFF
            cursor: pointer
            float: right
            margin-top: -4px

        .btn-view:hover
            color: #CCC
            text-shadow: 0px 0px 3px #333

    .box-options
        width: 100%
        margin-top: 5px
        background: rgba(#FFF, 0.3)
        padding: 8px 3px
        display: flex
        align-items: center
        
        .md-icon
            cursor: pointer
        .md-icon:hover, .md-icon.active
            color: #f15a29

        .btn-color
            margin: 0 10px

.box-item.active
    background: rgba(#FFF, 0.2)
</style>