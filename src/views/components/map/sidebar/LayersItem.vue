<template>
        <p> 
            <switches v-model="layer" :theme="theme ? theme: 'bootstrap'" :color="color"></switches> 
            <span>
                <b>{{ title.toUpperCase() }}</b>
                <span v-show="layer && view">
                    =>
                    <button class="btn-view" @click="viewExtend()">
                        <md-icon>search</md-icon>
                    </button>
                </span>
            </span>
        </p>             
</template>
<script>
import Switches from 'vue-switches'

export default {
    components: {
        Switches
    },
    props: {
        status: Boolean,
        theme: String,
        color: String,
        title: String,
        group: Object,
        view: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            layer: true
        }
    },
    created(){
        this.layer = this.status
    },
    watch: {
        layer(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title) sublayer.setVisible(this.layer)
            })
        }
    },
    methods: {
        viewExtend(){
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title && this.layer && this.view) {
                    let extentLayer = sublayer.getSource().getExtent();
                    let extentEmpty = ol.extent.createEmpty();

                    ol.extent.extend(extentEmpty, extentLayer);
                    this.$root.olmap.getView().fit(extentEmpty, this.$root.olmap.getSize());
                }
            })
        }
    }
}
    
</script>
<style lang="sass" scoped>  
    span
        padding-left: 7.5px

    .btn-view
        width: 27px
        background: none
        border: none
        cursor: pointer
    .btn-view:hover
        color: #FFF
        text-shadow: 0px 0px 3px #333
                
</style>