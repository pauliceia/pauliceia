<template>
    <div>
        <p class="btn_sidebar" v-show="sidebar == null" @click="sidebarActive()">
            <md-icon>keyboard_arrow_right</md-icon>
            <b>{{ $t('map.sidebarLayer.title')}}</b>
        </p>

        <section class="sidebar" v-show="sidebar == 'layer'">
            <md-toolbar md-elevation="1" style="background: #f36c3f; color: #FFF; ">
                <span class="md-title nav-title"><strong>{{ $t('map.sidebarLayer.title') }}</strong></span>

                <div class="md-toolbar-section-end">
                    <div class="box-options">
                        <el-tooltip effect="dark" 
                                :content="$t('map.sidebarLayer.btnAdd')"
                                placement="bottom-end">
                                    <md-button class="md-icon-button md-dense" data-toggle="modal" data-target="#modalAddLayer">
                                        <!--<md-icon style="color: #FFF;">settings</md-icon>-->
                                        <img class="btn-ico" src="@/views/assets/images/icons/add-layer.png">
                                    </md-button>
                        </el-tooltip>
                    </div>

                    <md-button class="md-icon-button md-dense" @click="sidebarDisable()">
                        <md-icon style="color: #FFF;">keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <md-list class="layers">
                <p-sidebarLayer-layers></p-sidebarLayer-layers>
            </md-list>
        </section>
        
        <p-sidebarLayer-addLayers></p-sidebarLayer-addLayers>

    </div>
</template>

<script>
import Layers from '@/views/components/map/sidebar-layer/Layers'
import AddLayers from '@/views/components/map/sidebar-layer/AddLayers'

import { mapState } from 'vuex'

export default {
    components: {
        'p-sidebarLayer-layers': Layers,
        'p-sidebarLayer-addLayers': AddLayers
    },

    computed: {
        ...mapState('map', ['sidebar'])
    },

    methods: {
        sidebarActive() {
            this.$store.dispatch('map/setSidebar', 'layer')
        },
        sidebarDisable() {
            this.$store.dispatch('map/setSidebar', null)
        }
    }
}
    
</script>
<style lang="sass" scoped>
    //SIDEBAR BUTTON
    .btn_sidebar
        position: absolute
        top: 15px
        left: 20px
        z-index: 1
        padding: 8px 30px
        background: rgba(#f15a29, 0.8)
        color: #FFF
        font-size: 1.1em
        border-radius: 10px
        letter-spacing: 0.8px
        cursor: pointer
        b
            text-shadow: 1px 2px 1px #58595b
    .btn_sidebar:hover
        background: #f15a29
    
    //SIDEBAR BOX
    .sidebar
        overflow: auto
        position: absolute
        width: 330px
        top: 15px
        padding-bottom: 13px
        border-radius: 15px
        min-height: 50%
        max-height: 90%
        left: 20px
        background: rgba(#58595b, 0.75)
        z-index: 1
        box-shadow: 1px 1px 1px #CCC
        
        .md-toolbar
            min-height: 50px !important
            .nav-title
                font-size: 1.15em
                letter-spacing: 0.8px
                padding-left: 10px
                text-shadow: 1px 2px 1px #58595b
        
        .layers
            overflow: auto
            max-height: 50%
            
        .box-options
            margin-right: 20px
            border-radius: 50%
            background: rgba(#000, 0.08)
            
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
