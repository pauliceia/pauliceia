<template>
    <div>
        <p class="btn_sidebar" v-bind:class="{ active: sidebar === 'layer' }" @click="sidebarToggle()">
            <b>{{ $t('map.sidebarLayer.title')}}</b>
        </p>

        <p class="btn_sidebar btn_sidebar_osm" v-bind:class="{ active: sidebarOsm === 'layer' }" @click="sidebarOsmToggle()">
          <b>{{ $t('map.sidebarMap.title')}}</b>
        </p>

        <div class="sidebar-content">
            <section class="sidebar" v-show="sidebar == 'layer'">
                <button class="btn-layer-add" data-toggle="modal" data-target="#modalAddLayer">
                    Selecione as camadas
                    <img class="btn-ico" src="@/views/assets/images/icons/add-layer.png">
                </button>

                <md-list class="layers">
                    <p-sidebarLayer-layers></p-sidebarLayer-layers>
                </md-list>
            </section>

            <section class="sidebar" v-show="sidebarOsm == 'layer'">
                <md-list class="layers">
                    <p-sidebarOsmLayer-layers></p-sidebarOsmLayer-layers>
                </md-list>
            </section>
        </div>

        <p-sidebarLayer-addLayers></p-sidebarLayer-addLayers>
    </div>
</template>

<script>
import Layers from '@/views/components/map/sidebar-layer/Layers'
import OsmLayers from '@/views/components/map/sidebar-layer/OsmLayers'
import AddLayers from '@/views/components/map/sidebar-layer/AddLayers'

import { mapState } from 'vuex'

export default {
    components: {
        'p-sidebarLayer-layers': Layers,
        'p-sidebarOsmLayer-layers': OsmLayers,
        'p-sidebarLayer-addLayers': AddLayers
    },

    computed: {
        ...mapState('map', ['sidebar', 'sidebarOsm'])
    },

    methods: {
        sidebarToggle() {
            this.$store.dispatch('map/setSidebar', this.$store.state.map.sidebar === null ? 'layer' : null)
        },
        sidebarActive() {
            this.$store.dispatch('map/setSidebar', 'layer')
        },
        sidebarDisable() {
            this.$store.dispatch('map/setSidebar', null)
        },
        sidebarOsmToggle() {
          this.$store.dispatch('map/setSidebarOsm', this.$store.state.map.sidebarOsm === null ? 'layer' : null)
        },
        sidebarOsmActive() {
            this.$store.dispatch('map/setSidebarOsm', 'layer')
        },
        sidebarOsmDisable() {
            this.$store.dispatch('map/setSidebarOsm', null)
        }
    }
}
</script>

<style lang="sass" scoped>
    //SIDEBAR BUTTON
    .btn_sidebar
        position: absolute
        top: 80px
        left: 25px
        z-index: 1
        padding: 8px 30px
        /*background: rgba(#f15a29, 0.8)*/
        background: rgba(#333, 0.8)
        color: #FFF
        font-size: 1.1em
        border-radius: 10px
        letter-spacing: 0.8px
        cursor: pointer
        transform:  translateX(-50%) translateY(-50%) rotate(-90deg)
        font-weight: normal
        text-transform: uppercase

        b
            text-shadow: 1px 2px 1px #58595b

        &.btn_sidebar_osm
            top: 215px

    .btn_sidebar:hover, .btn_sidebar.active
        /*background: #f15a29*/
        background: #111

    .sidebar-content
        /*overflow: auto*/
        position: absolute
        width: 320px
        top: 10px
        left: 50px
        padding: 0
        /*height: 90%*/
        /*max-height: 90%*/
        z-index: 1
        /*background: red*/

    //SIDEBAR BOX
    .sidebar
        /*overflow: auto*/
        /*position: absolute*/
        width: 320px
        /*top: 15px*/
        left: 50px
        /*padding-bottom: 13px*/
        /*border-radius: 15px*/
        padding: 0
        /*min-height: 50%*/
        /*max-height: 90%*/
        /*background: rgba(#58595b, 0.75)*/
        z-index: 1
        /*box-shadow: 1px 1px 1px #CCC*/
        margin-bottom: 20px
        /*background: red*/

        /*.md-toolbar*/
            /*min-height: 50px !important*/
            /*.nav-title*/
                /*font-size: 1.15em*/
                /*letter-spacing: 0.8px*/
                /*padding-left: 10px*/
                /*text-shadow: 1px 2px 1px #58595b*/

        .btn-layer-add
            display: block
            width: 100%
            /*background: #111*/
            border-radius: 5px
            text-align: left
            padding: 6px 10px 2px
            margin-bottom: 5px

            &.btn-layer-add:hover
                background: #111

            .btn-ico
                width: 28px
                padding: 4px
                float: right
                margin-top: -5px

        .layers
            overflow: auto
            max-height: 50%
            padding: 0

        /*.box-options*/
            /*margin-right: 20px*/
            /*border-radius: 50%*/
            /*background: rgba(#000, 0.08)*/

    //SCROLL
    .sidebar::-webkit-scrollbar
        width: 0.5em

    .sidebar::-webkit-scrollbar-track
        margin-top: 4px
        margin-bottom: 4px
        -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.1)

    .sidebar::-webkit-scrollbar-thumb
        background-color: rgba(#000, 0.5)
        outline: 1px solid red
        border-radius: 0 25px 25px 0 !important
</style>
