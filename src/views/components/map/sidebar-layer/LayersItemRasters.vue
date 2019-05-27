<template>
    <section>
        <div class="box-item" v-for="layer of layers" :key="layer.title">
            <span v-bind:class="{ active: layer.status }" @click="modifyLayer(layer)">
                {{ layer.titleReal }}
            </span>
        </div>
    </section>
</template>

<script>
import {
    overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
    props: {
        color: String
    },

    data() {
        return {
            loading: '',
            layers: [
                {
                    title: 'saraBrasil30',
                    titleReal: '1930',
                    status: true,
                    range: [1930,1940]
                },
                // {
                //     title: '1920',
                //     status: false,
                //     range: [1920,1930]
                // },
                {
                    title: '1910',
                    titleReal: '1905',
                    status: false,
                    range: [1910,1920]
                },
                {
                    title: '1890',
                    titleReal: '1890',
                    status: false,
                    range: [1890,1910]
                },
                {
                    title: '1880',
                    titleReal: '1881',
                    status: false,
                    range: [1880,1890]
                },
                {
                    title: '1870',
                    titleReal: '1877',
                    status: false,
                    range: [1870,1880]
                },
                {
                    title: '1868',
                    titleReal: '1868',
                    status: false,
                    range: [1868,1880]
                }
            ]
        }
    },

    created() {
        overlayGroupRasters.getLayers().clear()

        overlayGroupRasters.getLayers().push(
            new ol.layer.Tile({
                title: 'saraBrasil30',
                visible: true,
                source: new ol.source.TileWMS({
                    url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
                    params: {
                        'FORMAT': 'image/png',
                        'VERSION': '1.1.1',
                        tiled: true,
                        STYLES: '',
                        LAYERS: 'pauliceia:saraBrasil30',
                        tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                    }
                })
            })
        )
    },

    methods: {
        modifyLayer(layerSelected) {
            const items = {};

            if(overlayGroupRasters.getLayers().getLength() > 0) {
                overlayGroupRasters.getLayers().pop()
            }

            for(let i in this.layers){
                let status = false;
                if (this.layers[i].title === layerSelected.title) {
                    status = !this.layers[i].status;
                }

                this.layers[i].status = status;
                items[this.layers[i].title] = status;
            }

            this._openFullScreen()

            let tiled
            if(layerSelected.title === 'saraBrasil30') {
                tiled = true
            }

            overlayGroupRasters.getLayers().push(
                new ol.layer.Tile({
                    title: layerSelected.title,
                    visible: true,
                    source: new ol.source.TileWMS({
                        url: 'http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia/wms',
                        params: {
                            'FORMAT': 'image/png',
                            'VERSION': '1.1.1',
                            tiled,
                            STYLES: '',
                            LAYERS: 'pauliceia:'+layerSelected.title,
                            tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                        }
                    })
                })
            )
            this.loading.close()
        },
        _openFullScreen() {
            this.loading = this.$loading({
                lock: true,
                text: 'Construindo Mapa',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        }
    }
}
    
</script>

<style lang="sass" scoped>
.box-item
    margin: 0 0 5px
    padding: 0
    display: block

    span
        padding: 8px 15px
        font-size: 1.2em
        border-radius: 5px
        font-weight: normal
        display: inline-block
        background: rgba(#333, .8)

        &.active
            background: orangered
</style>
