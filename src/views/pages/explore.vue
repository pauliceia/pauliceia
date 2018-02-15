<template>
    <section>

        <ol-map class="map"></ol-map>   

    </section>
</template>

<script>
import OlMap from '@/views/components/map/Ol-map'

export default {
    components: {
        'ol-map': OlMap
    }
}
</script>

<style lang="sass" scoped>
    .map
        position: absolute
        left: 0
        right: 0
        bottom: 0
        top: 69px
        background: #fff
</style>