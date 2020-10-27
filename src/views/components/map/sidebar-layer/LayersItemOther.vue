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
    overlayGroupOther
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
                    title: 'mde_sp_colored',
                    titleReal: 'Modelo Digital de Elevação de São Paulo (colorido)',
                    status: false
                },
                {
                    title: 'mde_sp_bw',
                    titleReal: 'Modelo Digital de Elevação de São Paulo (tons de cinza)',
                    status: false
                }
            ]
        }
    },
    created() {
        overlayGroupOther.getLayers().clear()

        // overlayGroupOther.getLayers().push(
        //     new ol.layer.Tile({
        //         title: 'mde_sp_colored',
        //         visible: true,
        //         source: new ol.source.TileWMS({
        //             url: process.env.urlGeoserveOther + '/wms',
        //             params: {
        //                 'FORMAT': 'image/png',
        //                 'VERSION': '1.1.1',
        //                 tiled: true,
        //                 STYLES: '',
        //                 LAYERS: 'other:mde_sp_colored',
        //                 tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
        //             }
        //         })
        //     })
        // )
    },
    methods: {
        modifyLayer(layerSelected) {
            if(overlayGroupOther.getLayers().getLength() > 0)
                overlayGroupOther.getLayers().pop()

            if(layerSelected.status == true) {
                for(var i in this.layers){
                    if(this.layers[i].title != layerSelected.title)
                        this.layers[i].status = false
                }

                this._openFullScreen()

                // let tiled
                // if(layerSelected.title == "mde_sp_colored")
                //     tiled = true

                overlayGroupOther.getLayers().push(
                    new ol.layer.Tile({
                        title: layerSelected.title,
                        visible: true,
                        source: new ol.source.TileWMS({
                            url: process.env.urlGeoserveOther + '/wms',
                            params: {
                                'FORMAT': 'image/png',
                                'VERSION': '1.1.1',
                                tiled: false,
                                STYLES: '',
                                LAYERS: 'other:' + layerSelected.title,
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
