<template>
    <md-speed-dial md-event="click" class="md-bottom-right">
      <md-speed-dial-target class="icon_primary">
        <md-icon>public</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <div v-for="layer of layers" :key="layer.title">
            <md-button :class="layerSelected == layer.title ? 'md-icon-button active' : 'md-icon-button'" @click="selectLayerRaster(layer.title)">{{ layer.title == 'saraBrasil30' ? '1930' : layer.title }}</md-button>  
        </div>
      </md-speed-dial-content>
    </md-speed-dial>
</template>

<script>
import {
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

import 'vue-material/dist/vue-material.min.css'

export default {
    name: "LayersRaster",
    data() {
        return {
            layerSelected: 'saraBrasil30',
            layers: [
                {
                    title: 'saraBrasil30',
                    range: [1930,1940]
                },
                {
                    title: '1920',
                    range: [1920,1930]
                },
                {
                    title: '1910',
                    range: [1910,1920]
                },
                {
                    title: '1890',
                    range: [1890,1910]
                },
                {
                    title: '1880',
                    range: [1880,1890]
                },
                {
                    title: '1870',
                    range: [1870,1880]
                },
                {
                    title: '1868',
                    range: [1868,1880]
                }
            ]
        }
    },
    created() {
        overlayGroupRasters.getLayers().clear();
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
    .icon_primary
        background: #f15a29
        color: #FFF
    
    .md-icon-button
        background: rgba(#58595b, 0.9)
        color: #000
    .md-icon-button.active
        color: #FFF 
</style>