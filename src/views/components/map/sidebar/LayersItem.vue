<template>
    <div :class="boxView ? 'box-item active' : 'box-item'"> 
        <el-switch v-model="layerStatus" :active-color="color"></el-switch>          
        
        <span>
            <b>{{ nameLayer != '' ? nameLayer.length > 18 ? nameLayer.toUpperCase().slice(0,18)+' ...' : nameLayer.toUpperCase() : title.toUpperCase() }}</b>
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
                <md-icon @click.native="downloadSHP()">save_alt</md-icon>
            </el-tooltip>
        </div>

        <div id="popup" class="ol-popup"></div>
    </div>           
</template>
<script>
import {
    emptyStyle
} from '@/views/assets/js/map/Styles'
import Map from '@/middleware/Map'

export default {
    props: {
        status: Boolean,
        color: String,
        title: String,
        id: Number,
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
            overlay: null,
            nameLayer: ''
        }
    },

    async created(){
        this.layerStatus = this.status
        
        if(this.id !== undefined) {
            let layers = await Map.getLayers('layer_id='+this.id)
            this.nameLayer = layers.data.features[0].properties.name
            this.title = layers.data.features[0].properties.f_table_name
        }

        this.getColor()
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
        getColor() {
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

                //CLEAN THE INTERACTIONS OF MAP
                vm.$root.olmap.getOverlays().clear()

                //CREATE POPUP
                $("#popup")
                    .append(`<div id="popup-${vm.title}" class="ol-popup" title="information of vector">
                        <div id="popup-content-${vm.title}"></div>
                    </div>`)

                //SELECT POPUP
                vm.containerPopup = document.getElementById(`popup-${vm.title}`)
                vm.contentPopup = document.getElementById(`popup-content-${vm.title}`) 
                $(vm.containerPopup).addClass( "ol-popup" )
                $(vm.containerPopup).css( "display", "block" )
                
                //CREATE INTERACTION AND OVERLAY
                vm.select = new ol.interaction.Select()
                vm.overlay = new ol.Overlay({
                    element: vm.containerPopup,
                    autoPan: true
                })
                vm.$root.olmap.addInteraction(vm.select)
                vm.$root.olmap.addOverlay(vm.overlay)
        
                //WHEN CLICK ON THE VECTOR
                vm.select.on('select', function(event) {
                    vm.overlay.setPosition(undefined)
                    event.selected.filter( feature => ((feature.getId().split('.'))[0]) == vm.title.toLowerCase() )
                        .forEach( feat => {
                            let coordinate = feat.getGeometry().getFirstCoordinate();
                            
                            vm.contentPopup.innerHTML = ''
                            $.each(feat.getProperties(), function(index, value) {
                                if (typeof(value) !== 'object') vm.contentPopup.innerHTML += `<p style="margin:0; padding:0;"><strong>${index}:</strong> ${value} </p>`
                            }); 
                            vm.overlay.setPosition(coordinate)
                        })
                });                
            
            } else{
                this.$root.olmap.removeInteraction(this.select)
                this.$root.olmap.getOverlays().clear()
                this.select = null
            }
            
        },
        downloadSHP() {
            let link = 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:'+this.title.toLowerCase()+'&outputFormat=SHAPE-ZIP'
            window.open(link, '_blank')
        }
    }
}
    
</script>
<style lang="sass">
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