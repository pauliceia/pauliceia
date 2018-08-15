<template>
    <div v-show="isUserLoggedIn">
        <p class="btn_sidebar" v-show="sidebar == null" @click="sidebarActive()">
            <md-icon>keyboard_arrow_right</md-icon>
            <b>{{ $t('map.sidebarEdit.title')}}</b>
        </p>

        <section class="sidebar" v-show="sidebar == 'edit'">
            <md-toolbar md-elevation="1" style="background: #f36c3f; color: #FFF;">
                <span class="md-title nav-title"><strong>{{ $t('map.sidebarEdit.title') }}</strong></span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="sidebarDisable()">
                        <md-icon style="color: #FFF;">keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <p-sidebarEdit-layers></p-sidebarEdit-layers>

            <p-sidebarEdit-functions></p-sidebarEdit-functions>

            <p-sidebarEdit-attributes></p-sidebarEdit-attributes>
        </section>
    </div>
</template>

<script>
import Layers from '@/views/components/map/sidebar-edit/Layers'
import Functions from '@/views/components/map/sidebar-edit/Functions'
import Attributes from '@/views/components/map/sidebar-edit/Attributes'
import { mapState } from 'vuex'

export default {
    components: {
        'p-sidebarEdit-layers': Layers,
        'p-sidebarEdit-functions': Functions,
        'p-sidebarEdit-attributes': Attributes
    },

    computed: {
        ...mapState('auth', ['isUserLoggedIn']),
        ...mapState('map', ['sidebar'])
    },

    methods: {
        sidebarActive() {
            this.$store.dispatch('map/setSidebar', 'edit')
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
        top: 70px
        left: 50px
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
        left: 50px
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