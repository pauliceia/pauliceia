<template>
    <section class="box-layers">
        <div v-sortable="{ handle: '.handle', onEnd: reorder }">
            <div v-for="layerId in layers.slice().reverse()" :key="layerId">
                <p-sidebarLayer-item v-if="layerId !== undefined" :status="true"
                    color="#13ce66" titleInit="" :id="layerId" :group="vectorLayer">
                    <i class="el-icon-sort handle"></i>
                </p-sidebarLayer-item>
            </div>

            <div v-if="layers.length == 0">
                <el-alert :title="$t('map.sidebarLayer.msgEmpty')" type="info" center :closable="false" show-icon />
            </div>
        </div>
    </section>
</template>

<script>
import LayersItem from '@/views/components/map/sidebar-layer/LayersItem'
import LayersItemStatic from '@/views/components/map/sidebar-layer/LayersItemStatic'
import LayersItemRasters from '@/views/components/map/sidebar-layer/LayersItemRasters'
import LayersItemOther from '@/views/components/map/sidebar-layer/LayersItemOther'
import { mapState } from 'vuex'

import {
  overlayGroup,
  overlayGroupExternal,
  overlayGroupRasters
} from '@/views/assets/js/map/overlayGroup'

export default {
  components: {
    'p-sidebarLayer-item': LayersItem,
    'p-sidebarLayer-item-static': LayersItemStatic,
    'p-sidebarLayer-item-rasters': LayersItemRasters,
    'p-sidebarLayer-item-other': LayersItemOther
  },
  computed: {
    ...mapState('map', ['layers'])
  },
  data () {
    return {
      vectorLayer: overlayGroup,
      rasterLayers: overlayGroupRasters,
      externalLayers: overlayGroupExternal
    }
  },
  methods: {
    reorder (event) {
      this.layers.splice(event.newIndex, 0, this.layers.splice(event.oldIndex, 1)[0])

      this.vectorLayer.getLayers().forEach(sublayer => {
        if(sublayer.values_.id) {
          sublayer.setZIndex(this.layers.indexOf(sublayer.values_.id) + 2)
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.box-layers
  color: #FFF
</style>
