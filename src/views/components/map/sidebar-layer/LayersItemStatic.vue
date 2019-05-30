<template>
    <section>
        <div class="box-item" v-for="layer in layers" :key="layer.title">
            <span v-bind:class="{ active: layer.status }" @click="toggleLayer(layer)">
                {{ layer.titleReal }}
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
            titleReal: "Open Street Map"
          }
        ]
      }
    },

    methods: {
      toggleLayer (layerSelected) {
        const items = {};
        for (let i in this.layers) {
          if (this.layers[i].title === layerSelected.title) {
            let status = !this.layers[i].status;
            this.layers[i].status = status;
            items[this.layers[i].title] = status;
          }
        }

        this.group.getLayers().forEach(sublayer => {
          if (typeof items[sublayer.get('title')] != 'undefined') {
            console.log(sublayer.get('title'), items[sublayer.get('title')]);
            sublayer.setVisible(items[sublayer.get('title')])
          }
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
</style>
