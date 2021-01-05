<template>
  <section>
    <div class="box-item" v-for="layer in layers" :key="layer.title">
      <span v-bind:class="{ active: layer.status }" @click="toggleLayer(layer)">
        {{ layer.label }}
      </span>
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
                    label: 'Modelo Digital de Elevação de São Paulo (colorido)',
                    status: false
                },
                {
                    title: 'mde_sp_bw',
                    label: 'Modelo Digital de Elevação de São Paulo (tons de cinza)',
                    status: false
                }
            ]
        }
    },
    created() {
        overlayGroupOther.getLayers().clear()
    },
    methods: {
        showLayer(layer) {
            this._openFullScreen()

            overlayGroupOther.getLayers().push(
                new ol.layer.Tile({
                    title: layer.title,
                    visible: true,
                    source: new ol.source.TileWMS({
                        url: process.env.urlGeoserveOther + '/wms',
                        params: {
                            'FORMAT': 'image/png',
                            'VERSION': '1.1.1',
                            tiled: false,
                            STYLES: '',
                            LAYERS: 'other:' + layer.title,
                            tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
                        }
                    })
                })
            )
            this.loading.close()
        },
        toggleLayer(selectedLayer) {
            // clear the layers before show one
            overlayGroupOther.getLayers().clear()

            for (let layer of this.layers) {
                // just the selected layer is showed or not
                // if the selected layer has already been opended, then close it,
                // or, if it has already been closed, then open it
                if (layer.title === selectedLayer.title) {
                    layer.status = !layer.status

                    if (layer.status === true)
                        this.showLayer(layer)

                // other layers are closed
                } else {
                    layer.status = false
                }
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

    &:hover
      cursor: pointer
</style>
