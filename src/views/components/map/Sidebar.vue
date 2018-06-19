<template>
    <div>
        <p class="btn_sidebar" v-show="!sidebarVisible" @click="sidebar()">
            <md-icon>keyboard_arrow_right</md-icon>
            <b>{{ $t('map.sidebar.title')}}</b>
        </p>

        <section class="sidebar" v-show="sidebarVisible">
            <md-toolbar md-elevation="1" style="background: #f36c3f; color: #FFF;">
                <span class="md-title nav-title"><strong>{{ $t('map.sidebar.title') }}</strong></span>

                <div class="md-toolbar-section-end">
                    <div class="box-options">
                        <el-tooltip effect="dark" 
                                :content="$t('map.sidebar.btnAdd')"
                                placement="bottom-end">
                                    <md-button class="md-icon-button md-dense" data-toggle="modal" data-target="#modalAddLayer">
                                        <md-icon style="color: #FFF;">iso</md-icon>
                                    </md-button>
                        </el-tooltip>
                    </div>

                    <md-button class="md-icon-button md-dense" @click="sidebar()">
                        <md-icon style="color: #FFF;">keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <md-list>
                <p-sidebar-layers></p-sidebar-layers>
            </md-list>
        </section>

        <p-sidebar-addLayers></p-sidebar-addLayers>

    </div>
</template>

<script>
import Layers from '@/views/components/map/sidebar/Layers'
import AddLayers from '@/views/components/map/sidebar/AddLayers'

export default {
    components: {
        'p-sidebar-layers': Layers,
        'p-sidebar-addLayers': AddLayers
    },
    data(){
        return {
            sidebarVisible: false
        }
    },
    methods: {
        sidebar() {
            if (this.sidebarVisible == false) {
                this.sidebarVisible = true
                $('.ol-zoomslider').css("margin-left", "335px")
                $('.ol-zoom').css("margin-left", "335px")
                $('.ol-scale-line').css("margin-left", "335px")
            }else{
                this.sidebarVisible = false
                $('.ol-zoomslider').css("margin-left", "0")
                $('.ol-zoom').css("margin-left", "0")
                $('.ol-scale-line').css("margin-left", "0")
            }
        }
    }
}
    
</script>
<style lang="sass" scoped>
    //SIDEBAR BUTTON
    .btn_sidebar
        position: absolute
        top: 15px
        left: 50px
        z-index: 1
        padding: 8px 30px
        background: rgba(#f15a29, 0.8)
        color: #FFF
        border-radius: 10px
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
        height: 100%
        bottom: 0
        left: 0
        background: rgba(#58595b, 0.75)
        z-index: 1
        box-shadow: 1px 1px 1px #CCC
        
        .nav-title
            font-size: 1.25em
            text-shadow: 1px 2px 1px #58595b
            
        .box-options
            margin-right: 20px
            border-radius: 50%
            background: rgba(#000, 0.08)
    //SCROLL
    .sidebar::-webkit-scrollbar 
        width: 0.5em
 
    .sidebar::-webkit-scrollbar-track 
        -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.1)

    .sidebar::-webkit-scrollbar-thumb 
        background-color: rgba(#000, 0.1)
        outline: 1px solid red
</style>