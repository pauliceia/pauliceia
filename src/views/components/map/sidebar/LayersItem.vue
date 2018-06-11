<template>
    <div :class="boxView ? 'box-item active' : 'box-item'"> 
        <el-switch v-model="layerStatus" :active-color="color"></el-switch>          
        
        <span>
            <b>{{ title.toUpperCase() }}</b>
            <i>{{ theme }}</i>
            <span v-show="layerStatus && apps">                   
                <button class="btn-view" @click="boxView =! boxView">
                    <md-icon>settings</md-icon>
                </button>
            </span>
        </span>

        <div v-show="boxView && layerStatus && apps" class="box-options">
            <el-tooltip effect="dark" 
                    :content="$t('map.sidebar.options.zoom')" 
                    placement="top-end">
                <md-icon @click.native="extend()">center_focus_strong</md-icon>
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebar.options.infosLayer')" 
                    placement="top-end">
                <md-icon @click.native="infosLayer()">assignment</md-icon>
            </el-tooltip>
            
            <el-tooltip effect="dark" 
                    :content="$t('map.sidebar.options.infosVector')"
                    placement="top-end">
                <md-icon :class="getInfo ? 'active' : ''" @click.native="infosFeatures()">info</md-icon>
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebar.options.editColor')"
                    placement="top-end">
                <input type="color" class="btn-color" v-model="colorVector" />
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebar.options.download')"
                    placement="top-end">
                <md-icon>save_alt</md-icon>
            </el-tooltip>
        </div>

        <div id="popup" title="information of vector" class="ol-popup">
            <div id="popup-content"></div>
        </div>
    </div>           
</template>
<script>
import {
    emptyStyle
} from '@/views/assets/js/map/Styles'

export default {
    props: {
        status: Boolean,
        theme: String,
        color: String,
        title: String,
        group: Object,
        type: String,
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
            getInfo: false,
            select: null,
            overlay: null
        }
    },

    created(){
        this.layerStatus = this.status
        this.group.getLayers().forEach(sublayer => {
            if (sublayer.get('title') === this.title && this.apps) {
                
                if(this.type == 'line') {
                    this.colorVector = sublayer.getStyle().getStroke().getColor()  
                } else if(this.type == 'point') {
                    this.colorVector = sublayer.getStyle().getImage().getFill().getColor()                    
                }

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
                    
                    let newStyle = null
                    if(this.type == 'line') {
                        newStyle = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: val,
                                width: 3
                            })
                        })
                    } else if(this.type == 'point') {
                        newStyle = new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 8,
                                stroke: new ol.style.Stroke({
                                    color: 'white',
                                    width: 2
                                }),
                                fill: new ol.style.Fill({
                                    color: val
                                })
                            })
                        })
                    }

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
        infosLayer(){
            this.$store.dispatch('map/setBoxInfoVector', false)
            this.$store.dispatch('map/setBoxGeocoding', false)
            this.$store.dispatch('map/setBoxNotifications', false)
            
            this.$store.dispatch('map/setBoxInfoLayer', true)
        },
        infosFeatures(){
            this.getInfo = !this.getInfo

            if(this.getInfo) {
                let vm = this

                let map = vm.$root.olmap
                let titleLayer = vm.title

                vm.select = new ol.interaction.Select()
                map.addInteraction(vm.select)

                vm.containerPopup = document.getElementById('popup')
                $(vm.containerPopup).css( "display", "block" )
                vm.contentPopup = document.getElementById('popup-content')                        

                vm.overlay = new ol.Overlay({
                    element: vm.containerPopup,
                    autoPan: true
                })
                map.addOverlay(vm.overlay)

                vm.select.on('select', function(event) {
                    event.selected.filter( feature => ((feature.getId().split('.'))[0]) == titleLayer.toLowerCase() )
                        .forEach( feat => {
                            let coordinate = feat.getGeometry().getFirstCoordinate();

                            vm.contentPopup.innerHTML = '<p><strong>Nome:</strong> ' + feat.getProperties().name + '</p>'
                            vm.overlay.setPosition(coordinate)
                        })
                });                
            
            } else{
                this.$root.olmap.removeInteraction(this.select)
                this.$root.olmap.removeOverlay(this.overlay)
                this.select = null
                this.overlay.setPosition(undefined)
            }
            
        }
    }
}
    
</script>
<style lang="sass" scoped>
.box-item
    margin-top: 5px
    padding: 5px
    
    span
        padding-left: 7.5px
        font-size: 1.1em

        .btn-view
            background: none
            border: none
            color: #FFF
            cursor: pointer
            float: right
            margin-top: -1px

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

//POPUP
.ol-popup
    position: absolute
    background-color: white
    display: none
    -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2))
    filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2))
    padding: 15px
    border-radius: 10px
    border: 1px solid #cccccc
    bottom: 12px
    left: -50px
    min-width: 280px

.ol-popup:after, .ol-popup:before 
    top: 100%
    border: solid transparent
    content: " "
    height: 0
    width: 0
    position: absolute
    pointer-events: none

.ol-popup:after 
    border-top-color: white
    border-width: 10px
    left: 48px
    margin-left: -10px

.ol-popup:before 
    border-top-color: #cccccc
    border-width: 11px
    left: 48px
    margin-left: -11px

</style>