<template>
    <div :class="boxView ? 'box-item active' : 'box-item'">
        <span class="move-icon"><slot></slot></span>
        <el-switch v-model="layerStatus" :active-color="color"></el-switch>          
        
        <span>
            <b>{{ nameLayer != '' ? nameLayer.length > 18 ? nameLayer.slice(0,18)+' ...' : nameLayer : title }}</b>
            <span v-show="layerStatus">                   
                <button class="btn-view" @click="boxView =! boxView">
                    <md-icon>settings</md-icon>
                </button>
            </span>
        </span>

        <div v-show="boxView && layerStatus" class="box-options">
            <el-tooltip effect="dark" 
                    :content="$t('map.sidebarLayer.options.zoom')" 
                    placement="top-end">
                <md-icon @click.native="extend()">center_focus_strong</md-icon>
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebarLayer.options.infosLayer')" 
                    placement="top-end">
                <md-icon @click.native="infosLayer()">assignment</md-icon>
            </el-tooltip>
            
            <el-tooltip effect="dark" 
                    :content="$t('map.sidebarLayer.options.infosVector')"
                    placement="top-end">
                <md-icon :class="getInfo ? 'active' : ''" @click.native="setStatusGetInfo()">info</md-icon>
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebarLayer.options.editColor')"
                    placement="top-end">
                    <el-color-picker v-model="colorVector" show-alpha size="medium"></el-color-picker>
            </el-tooltip>

            <el-tooltip effect="dark" 
                    :content="$t('map.sidebarLayer.options.download')"
                    placement="top-end">
                <md-icon @click.native="downloadSHP()">save_alt</md-icon>
            </el-tooltip>
        </div>

        <div id="popup" class="ol-popup"></div>
    </div>           
</template>

<script>
import { mapState } from 'vuex'
import {
    emptyStyle,
    lineStyle,
    polygonStyle,
    pointStyle
} from '@/views/assets/js/map/Styles'
import Map from '@/middleware/Map'
import Dashboard from '@/middleware/Dashboard'

export default {
    props: {
        status: Boolean,
        color: String,
        titleInit: {
            type: String,
            required: false
        },
        id: Number,
        group: Object
    },

    computed: {
        ...mapState('map', ['idInfoFeatureLayer'])
    },

    data() {
        return {
            boxView: false,
            title: '',
            type: '',
            layerStatus: true,
            colorVector: null,
            getInfo: false,
            select: null,
            overlay: null,
            nameLayer: ''
        }
    },

    async mounted() {
        this.layerStatus = this.status
        this.title = this.titleInit

        if(this.id != undefined) {
            let layers = await Map.getLayers('layer_id='+this.id)
            this.nameLayer = layers.data.features[0].properties.name
            this.title = layers.data.features[0].properties.f_table_name
        }

        this.getColor()
    },

    watch: {
        //active and disable layer
        layerStatus(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title) sublayer.setVisible(this.layerStatus)
            })
        },
        //edit color of layer
        colorVector(val) {
            if(val == null) 
                this.colorVector = "rgba(255,255,255,0)"
            else
                this.group.getLayers().forEach(sublayer => {
                    if (sublayer.get('title') === this.title && this.layerStatus) {
                        
                        let newStyle = null
                        if(this.type == 'multilinestring' || this.type == 'linestring') {
                            newStyle = new ol.style.Style({
                                stroke: new ol.style.Stroke({
                                    color: val,
                                    width: 3
                                })
                            })
                        } else if(this.type == 'multipoint' || this.type == 'point') {
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
                        } else if(this.type == 'multipolygon' || this.type == 'polygon') {
                            newStyle = new ol.style.Style({
                                stroke: new ol.style.Stroke({
                                    color: '#000000',
                                    width: 3
                                }),
                                fill: new ol.style.Fill({
                                    color: val
                                })
                            })
                        }

                        sublayer.getSource().getFeatures().map(features => {
                            if(features.getStyle() !== emptyStyle) features.setStyle(newStyle)
                        });
                        sublayer.setStyle(newStyle)
                    }
            })
        },
        //active 'info attrib' feature
        idInfoFeatureLayer(val){
            if(val == this.title) {
                this.getInfo = true
                this._getInfosFeatures()
            } else {
                this.getInfo = false
                this._clearInteractions()
            }
        }
    },

    methods: {
        async getColor() {
            let response = await Dashboard.getFeatureTable(this.title)
            
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title) {
                    this.type = response.data.features[0].geometry.type.toLowerCase()
                    
                    if(this.type == 'multilinestring' || this.type == 'linestring') {
                        if(typeof(sublayer.getStyle()) == 'function') sublayer.setStyle(lineStyle)
                        this.colorVector = sublayer.getStyle().getStroke().getColor()  

                    } else if(this.type == 'multipoint' || this.type == 'point') {
                        if(typeof(sublayer.getStyle()) == 'function') sublayer.setStyle(pointStyle)
                        this.colorVector = sublayer.getStyle().getImage().getFill().getColor()             

                    } else if(this.type == 'multipolygon' || this.type == 'polygon') {
                        if(typeof(sublayer.getStyle()) == 'function') sublayer.setStyle(polygonStyle)
                        this.colorVector = sublayer.getStyle().getFill().getColor() 
                    }
                }
            })
        },
        extend(){
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title && this.layerStatus) {                    
                    let extentLayer = sublayer.getSource().getExtent();
                    let extentEmpty = ol.extent.createEmpty();

                    ol.extent.extend(extentEmpty, extentLayer);
                    this.$root.olmap.getView().fit(extentEmpty, this.$root.olmap.getSize());
                }
            })
        },
        infosLayer(){
            if(this.id != null && this.id !== undefined) {
                this.$store.dispatch('map/setBoxInfoVector', false)
                this.$store.dispatch('map/setBoxGeocoding', false)
                this.$store.dispatch('map/setBoxNotifications', false)
                
                this.$store.dispatch('map/setBoxInfoLayer', true)
                this.$store.dispatch('map/setIdInfoLayer', this.id)
            } else {
                this.$store.dispatch('map/setBoxInfoLayer', false)
                this.$store.dispatch('map/setIdInfoLayer', null)
            }
        },
        setStatusGetInfo() {
            if(this.getInfo == true) this.$store.dispatch('map/setIdInfoFeatureLayer', null)
            else this.$store.dispatch('map/setIdInfoFeatureLayer', this.title)
        },
        downloadSHP() {
            let link = process.env.urlGeoserver + '/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pauliceia:'+this.title.toLowerCase()+'&outputFormat=SHAPE-ZIP'
            window.open(link, '_blank')
        },
        _getInfosFeatures(){
            let vm = this

            //CLEAN THE INTERACTIONS OF MAP
            vm.$root.olmap.getOverlays().clear()

            //CREATE POPUP
            $("#popup")
                .append(`<div id="popup-${vm.title}" title="information of vector">
                    <div id="popup-content-${vm.title}"></div>
                </div>`)

            //SELECT POPUP
            vm.containerPopup = document.getElementById(`popup-${vm.title}`)
            vm.contentPopup = document.getElementById(`popup-content-${vm.title}`)
            $(vm.containerPopup).css({
                "display": "block",
                "position": "absolute",
                "background-color": "white",
                "-webkit-filter": "drop-shadow(0 1px 4px rgba(0,0,0,0.2))",
                "filter": "drop-shadow(0 1px 4px rgba(0,0,0,0.2))",
                "padding": "15px",
                "border-radius": "10px",
                "border": "1px solid #cccccc",
                "bottom": "12px",
                "left": "-50px",
                "min-width": "280px"
            })
            $(vm.containerPopup).addClass("ol-popup")
            
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
                        feat.setStyle()
                        let coordinate = feat.getGeometry().getFirstCoordinate();
                        
                        vm.contentPopup.innerHTML = ''
                        vm.contentPopup.innerHTML = `<p style="margin:0; padding:0;"><strong>id:</strong> ${feat.getId().split('.')[1]} </p>`
                        $.each(feat.getProperties(), function(index, value) {
                            if (typeof(value) !== 'object') vm.contentPopup.innerHTML += `<p style="margin:0; padding:0;"><strong>${index}:</strong> ${value} </p>`
                        }); 
                        vm.overlay.setPosition(coordinate)
                    })
            });                
        },
        _clearInteractions(){
            this.$root.olmap.removeInteraction(this.select)
            this.$root.olmap.removeOverlay(this.overlay)
            this.select = null
            this.overlay = null
        }
    }
}
</script>

<style lang="sass" scoped>
.box-item
    margin-top: 5px
    padding: 5px

    .move-icon
        cursor: pointer
        margin: 0
        padding: 3px
    .move-icon:hover
        color: #f15a29
    
    span
        padding-left: 7.5px
        font-size: 1.2em

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