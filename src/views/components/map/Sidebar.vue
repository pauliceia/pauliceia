<template>
    <div>
        <p class="btn_sidebar" v-show="!sidebarVisible" @click="sidebar()">
            <md-icon>keyboard_arrow_right</md-icon>
            <b>{{ $t('map.sidebar.title')}}</b>
        </p>

        <section class="sidebar" v-show="sidebarVisible">
            <md-toolbar md-elevation="1" style="background: #FFF">
                <md-icon>public</md-icon>
                <span class="md-title nav-title">{{ $t('map.sidebar.title') }}</span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="sidebar()">
                        <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <md-list>
                <md-list-item md-expand>
                    <md-icon>edit</md-icon>
                    <span class="md-list-item-text">{{ $t('map.sidebar.layers.title') }}</span>

                    <md-list slot="md-expand">
                        <div class="layers">
                            <p> 
                                <switches v-model="street" theme="bootstrap" color="success"></switches> 
                                <span>[Pauliceia]: <b>STREET</b></span>
                            </p>
                            <p>
                                <switches v-model="places" theme="bootstrap" color="success"></switches> 
                                <span>[Pauliceia]: <b>PLACES</b></span>
                            </p>
                            
                            <p class="btn_newProject">
                                <span>&#10010; {{ $t('map.sidebar.layers.newproject') }}</span>
                            </p>
                        </div>
                        
                        <!---
                        <md-list-item>Console</md-list-item>
                        <md-list-item>PC</md-list-item>
                        -->
                    </md-list>
                </md-list-item>

                <md-list-item>
                    <md-icon>search</md-icon>
                    <span class="md-list-item-text">{{ $t('map.sidebar.multigeolocation') }}</span>
                </md-list-item> 
            </md-list>
        </section>
    </div>
</template>
<script>
import Switches from 'vue-switches'
import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'

export default {
    components: {
        Switches
    },
    data(){
        return {
            sidebarVisible: false,
            street: true,
            places: true
        }
    },
    watch: {
        street(val) {
            overlayGroup.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === 'Streets') sublayer.setVisible(this.street)
            })
        },
        places(val) {
            overlayGroup.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === 'Places') sublayer.setVisible(this.places)
            })
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
    .btn_sidebar
        position: absolute
        top: 15px
        left: 50px
        z-index: 1
        padding: 8px 30px
        background: rgba(#FFF, 0.8)
        border-radius: 10px
        cursor: pointer
        b
            text-shadow: 1px 2px 1px #999
    .btn_sidebar:hover
        background: rgba(#FFF, 0.9)
        
    .sidebar
        overflow: auto
        position: absolute
        width: 300px
        height: 100%
        bottom: 0
        left: 0
        background: rgba(#FFF, 0.7)
        z-index: 1
        box-shadow: 2px 0 10px #666

        .md-list
            padding-top: 1px !important
            cursor: pointer

            .md-icon
                margin-right: 10px !important

            .md-list-item:hover
                //background: rgba(#000, .08)
                border-left: 3px solid #7188AD
            
            .layers
                padding: 15px 10px 0 20px 
                background: rgba(#000, 0.15)

                span
                    margin-left: 10px
                
                .btn_newProject
                    font-size: 0.8em
                    text-align: right
                .btn_newProject:hover
                    font-weight: 600
                    color: #304A73

    .sidebar::-webkit-scrollbar 
        width: 0.5em
 
    .sidebar::-webkit-scrollbar-track 
        -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.1)

    .sidebar::-webkit-scrollbar-thumb 
        background-color: rgba(#000, 0.1)
        outline: 1px solid red
</style>