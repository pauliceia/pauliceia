<template>
    <md-speed-dial md-event="click" class="md-bottom-right">
      <md-speed-dial-target class="icon_primary">
        <md-icon>public</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button :class="layerSelected == 'saraBrasil30' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('saraBrasil30')">1930</md-button>
        <md-button :class="layerSelected == '1920' ? 'md-icon-button active' : 'md-icon-button'">1920</md-button>
        <md-button :class="layerSelected == '1910' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('1910')">1910</md-button>
        <md-button :class="layerSelected == '1890' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('1890')">1890</md-button>
        <md-button :class="layerSelected == '1880' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('1880')">1880</md-button>
        <md-button :class="layerSelected == '1870' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('1870')">1870</md-button>
        <md-button :class="layerSelected == '1868' ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster('1868')">1868</md-button>
      </md-speed-dial-content>
    </md-speed-dial>
</template>

<script>
import {
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    name: "LayersRaster",
    data() {
        return {
            layerSelected: 'saraBrasil30'
        }
    },
    created() {
        overlayGroupRasters.getLayers().push(
            new ol.layer.Tile({
                title: this.layerSelected,
                visible: true,
                source: new ol.source.TileWMS({
                    url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
                    params: {
                        'FORMAT': 'image/png',
                        'VERSION': '1.1.1',
                        tiled: true,
                        STYLES: '',
                        LAYERS: 'pauliceia:'+this.layerSelected,
                        tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                    }
                })
            })
        )
    },
    methods: {
        selectLayerRaster(layer) {
            if(overlayGroupRasters.getLayers().getLength() > 0) overlayGroupRasters.getLayers().pop();
            overlayGroupRasters.getLayers().push(
                new ol.layer.Tile({
                    title: layer,
                    visible: true,
                    source: new ol.source.TileWMS({
                        url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
                        params: {
                            'FORMAT': 'image/png',
                            'VERSION': '1.1.1',
                            tiled: true,
                            STYLES: '',
                            LAYERS: 'pauliceia:'+layer,
                            tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                        }
                    })
                })
            )
            this.layerSelected = layer
        }
    }
}
    
</script>

<style lang="sass" scoped>
    @import '~vue-material/dist/vue-material.min.css'

    .icon_primary
        background: #f15a29
        color: #FFF
    
    .md-icon-button
        background: rgba(#58595b, 0.9)
        color: #000
    .md-icon-button.active
        color: #FFF 
</style>