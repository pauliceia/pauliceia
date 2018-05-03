<template>
    <div>
        <p class="btn_sidebar" v-show="!sidebarVisible" @click="sidebar()">
            <md-icon>keyboard_arrow_right</md-icon>
            <b>{{ $t('map.sidebar.title')}}</b>
        </p>

        <section class="sidebar" v-show="sidebarVisible">
            <md-toolbar md-elevation="1" style="background: #FFF; color: #f15a29;">
                <md-icon>public</md-icon>
                <span class="md-title nav-title">{{ $t('map.sidebar.title') }}</span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="sidebar()">
                        <md-icon style="color: #f15a29;">keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <md-list>
                <p-sidebar-layers></p-sidebar-layers>

                <p-sidebar-viewinfo></p-sidebar-viewinfo>
            </md-list>
        </section>
    </div>
</template>
<script>
import Layers from '@/views/components/map/sidebar/Layers'
import ViewInfo from '@/views/components/map/sidebar/ViewInfo'

export default {
    components: {
        'p-sidebar-layers': Layers,
        'p-sidebar-viewinfo': ViewInfo
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
                $('.ol-zoomslider').css("margin-left", "305px")
                $('.ol-zoom').css("margin-left", "305px")
                $('.ol-scale-line').css("margin-left", "305px")
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
<style lang="sass">
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
        width: 300px
        height: 100%
        bottom: 0
        left: 0
        background: rgba(#58595b, 0.75)
        z-index: 1
        box-shadow: 2px 0 10px #666

        .md-list
            padding-top: 1px !important
            cursor: pointer
            color: #FFF

            .md-list-item .md-list-item-text
                text-transform: uppercase
                font-weight: 600
            .md-list-item:hover
                background: rgba(#FFF, .1)
                border-left: 2px solid #f15a29   

            .md-icon
                margin-right: 12px !important

            //ACTIVE
            .md-active
                background: rgba(#FFF, .2)
                border-left: 2px solid #f15a29
                
                .md-list-item-content
                    background: rgba(#FFF, .3)

            .md-active:hover
                border-left: 1px solid #f15a29 

    //SCROLL
    .sidebar::-webkit-scrollbar 
        width: 0.5em
 
    .sidebar::-webkit-scrollbar-track 
        -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.1)

    .sidebar::-webkit-scrollbar-thumb 
        background-color: rgba(#000, 0.1)
        outline: 1px solid red
</style>