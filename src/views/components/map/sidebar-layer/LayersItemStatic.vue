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
export default {
  props: {
    group: Object,
    color: String
  },
  data () {
    return {
      layers: [
        {
          status: true,
          title: "OSM",
          label: "Atual (OSM)"
        }
      ]
    }
  },
  methods: {
    toggleLayer (selectedLayer) {
      // change the layer status
      for (let layer of this.layers) {
        if (layer.title === selectedLayer.title) {
          layer.status = !layer.status
          break
        }
      }

      // change the visibility based on the new status
      for (let sublayer of this.group.getLayers().getArray()) {
        if (sublayer.get('title') === selectedLayer.title) {
          sublayer.setVisible(selectedLayer.status)
          break
        }
      }
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
