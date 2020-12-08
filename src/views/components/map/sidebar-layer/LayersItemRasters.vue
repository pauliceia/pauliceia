<template>
    <section>
        <div class="box-item" v-for="layer of layers" :key="layer.title">
            <el-switch v-model="layer.status" @click.native="modifyLayer(layer)" :active-color="color"></el-switch>
            <span><b>{{ layer.titleReal }}</b></span>
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
                    title: '1930_1_1000',
                    titleReal: '1930',
                    status: true,
                    range: [1930, 1940]
                },
                {
                    title: '1930_1_5000',
                    titleReal: '1930 1:5000',
                    status: false,
                    range: [1930, 1940]
                },
                {
                    title: '1924',
                    titleReal: '1924',
                    status: false,
                    range: [1920, 1930]
                },
                {
                    title: '1905',
                    titleReal: '1905',
                    status: false,
                    range: [1910, 1920]
                },
                {
                    title: '1890',
                    titleReal: '1890',
                    status: false,
                    range: [1890, 1910]
                },
                {
                    title: '1880',
                    titleReal: '1881',
                    status: false,
                    range: [1880, 1890]
                },
                {
                    title: '1870',
                    titleReal: '1877',
                    status: false,
                    range: [1870, 1880]
                },
                {
                    title: '1868',
                    titleReal: '1868',
                    status: false,
                    range: [1868, 1870]
                }
            ]
        }
    },
    created() {
        overlayGroupRasters.getLayers().clear()

        overlayGroupRasters.getLayers().push(
            new ol.layer.Tile({
                title: '1930_1_1000',
                visible: true,
                source: new ol.source.TileWMS({
                    url: process.env.urlGeoserverPauliceia + '/wms',
                    params: {
                        'FORMAT': 'image/png',
                        'VERSION': '1.1.1',
                        tiled: true,
                        STYLES: '',
                        LAYERS: 'pauliceia:1930_1_1000',
                        tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                    }
                })
            })
        )
    },
    methods: {
        modifyLayer(layerSelected) {
            if(overlayGroupRasters.getLayers().getLength() > 0)
                overlayGroupRasters.getLayers().pop()

            if(layerSelected.status == true) {
                for(var i in this.layers){
                    if(this.layers[i].title != layerSelected.title)
                        this.layers[i].status = false
                }

                this._openFullScreen()

                let tiled
                if(layerSelected.title == "1930_1_1000")
                    tiled = true

                overlayGroupRasters.getLayers().push(
                    new ol.layer.Tile({
                        title: layerSelected.title,
                        visible: true,
                        source: new ol.source.TileWMS({
                            url: process.env.urlGeoserverPauliceia + '/wms',
                            params: {
                                'FORMAT': 'image/png',
                                'VERSION': '1.1.1',
                                tiled,
                                STYLES: '',
                                LAYERS: 'pauliceia:' + layerSelected.title,
                                tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                            }
                        })
                    })
                )
                this.loading.close()
            }
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
    margin-top: 0px
    padding: 5px 10px

    .el-switch
        margin-top: -5px !important
    span
        padding-left: 7.5px
        font-size: 1.2em
</style>
