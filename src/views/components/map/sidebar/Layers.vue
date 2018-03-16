<template>
    <md-list-item md-expand>
        <md-icon>edit</md-icon>
        <span class="md-list-item-text">{{ $t('map.sidebar.layers.title') }}</span>

        <md-list slot="md-expand">
            <section class="box-layers">

                <div class="row justify-content-center">
                    <button class="col-md-4 btn btn-success">
                        <md-icon>add_circle</md-icon>
                        <span class="title-button">ADD</span>
                    </button>
                    <button class="col-md-4 btn btn-danger">
                        <md-icon>clear</md-icon>
                        <span class="title-button">DEL</span>
                    </button>
                </div>
                
                <div class="layers-sublink">
                    <md-list-item md-expand>

                        <span class="md-list-item-text">Pauliceia</span>
                        
                        <md-list slot="md-expand">
                            <p> 
                                <switches v-model="street" theme="bootstrap" color="success"></switches> 
                                <span><b>STREET</b></span>
                            </p>
                            <p>
                                <switches v-model="places" theme="bootstrap" color="success"></switches> 
                                <span><b>PLACES</b></span>
                            </p>
                        </md-list>
                    </md-list-item>

                    <md-list-item md-expand>
                        <span class="md-list-item-text">Others</span>
                        
                        <md-list slot="md-expand">
                            <p> 
                                <switches v-model="street" theme="bootstrap" color="success"></switches> 
                                <span><b>STREET</b></span>
                            </p>
                        </md-list>
                    </md-list-item>
                </div>
                
            </section>
        </md-list>
    </md-list-item>

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
    }
}
    
</script>
<style lang="sass" scoped>  
    .box-layers
        padding: 10px 10px 0 10px 
        color: #000

        .btn
            margin-right: 10px
            .md-icon
                margin-right: 5px !important
            .title-button
                margin-left: 0
                font-size: 1.2em
                font-weight: 600
        
        .layers-sublink
            margin-top: 10px

            .md-list
                padding: 20px 10px 5px 20px !important
</style>