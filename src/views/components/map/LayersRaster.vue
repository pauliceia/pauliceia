<template>
    <md-speed-dial md-event="click" class="md-bottom-right">
      <md-speed-dial-target class="icon_primary">
        <md-icon>public</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">1930</md-button>
        <md-button class="md-icon-button">1920</md-button>
        <md-button class="md-icon-button">1910</md-button>
        <md-button class="md-icon-button">1900</md-button>
        <md-button class="md-icon-button">1890</md-button>
        <md-button class="md-icon-button">1880</md-button>
        <md-button class="md-icon-button">1868</md-button>
      </md-speed-dial-content>
    </md-speed-dial>
</template>

<script>

export default {
    name: "LayersRaster"
}
    
</script>

<style lang="sass" scoped>
    @import '~vue-material/dist/vue-material.min.css'

    .icon_primary
        background: #304A73
        color: #FFF
    
    .md-icon-button
        background: rgba(#7188AD, 0.9)
        color: #FFF
</style>