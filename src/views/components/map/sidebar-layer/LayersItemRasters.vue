<template>
  <section>
    <div class="box-item" v-for="layer of layers" :key="layer.title">
      <span v-bind:class="{ active: layer.status }" @click="modifyLayer(layer)">
        {{ layer.label }}
      </span>
    </div>
  </section>
</template>

<script>
import { overlayGroupRasters } from '@/views/assets/js/map/overlayGroup'

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
          label: '1930',
          status: true,
          range: [1930, 1940]
        },
        // {
        //     title: '1930_1_1000',
        //     label: '1930 1:1000',
        //     status: false,
        //     range: [1930, 1940]
        // },
        {
          title: '1930_1_5000',
          label: '1930 1:5000',
          status: false,
          range: [1930, 1940]
        },
        {
          title: '1924',
          label: '1924',
          status: false,
          range: [1920, 1930]
        },
        {
          title: '1905',
          label: '1905',
          status: false,
          range: [1910, 1920]
        },
        {
          title: '1890',
          label: '1890',
          status: false,
          range: [1890, 1910]
        },
        {
          title: '1880',
          label: '1881',
          status: false,
          range: [1880, 1890]
        },
        {
          title: '1870',
          label: '1877',
          status: false,
          range: [1870, 1880]
        },
        {
          title: '1868',
          label: '1868',
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
    showLayer(layer) {
      this._openFullScreen()

      let tiled
      if (layer.title === "1930_1_1000")
        tiled = true

      overlayGroupRasters.getLayers().push(
        new ol.layer.Tile({
          title: layer.title,
          visible: true,
          source: new ol.source.TileWMS({
            url: process.env.urlGeoserverPauliceia + '/wms',
            params: {
              'FORMAT': 'image/png',
              'VERSION': '1.1.1',
              tiled,
              STYLES: '',
              LAYERS: 'pauliceia:' + layer.title,
              tilesOrigin: 330937.3300521516 + ',' + 7393691.47872888
            }
          })
        })
      )

      this.loading.close()
    },
    modifyLayer(selectedLayer) {
      // clear the layers before show one
      overlayGroupRasters.getLayers().clear()

      for (let layer of this.layers) {
        // just the selected layer is showed or not
        // if the selected layer has been opended, then close it,
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
    _openFullScreen () {
      this.loading = this.$loading({
        lock: true,
        text: 'Construindo Mapa',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
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
