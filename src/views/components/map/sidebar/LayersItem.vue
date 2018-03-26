<template>
    <p> 
        <switches v-model="layer" :theme="theme ? theme: 'bootstrap'" :color="color"></switches> 
        <span>
            <b>{{ title.toUpperCase() }}</b>
            <span v-show="layer && view">                   
                <button class="btn-view" @click="viewExtend()">
                    <md-icon>flip_to_front</md-icon>
                </button>
            </span>
            <span v-show="layer && editColor"> 
                <input type="color" class="btn-color" v-model="colorVector" />
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
        },
        editColor: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            layer: true,
            colorVector: null
        }
    },
    created(){
        this.layer = this.status
        this.group.getLayers().forEach(sublayer => {
            if (sublayer.get('title') === this.title && this.layer && this.editColor) {
                this.colorVector = sublayer.getStyle().getStroke().getColor()
            }
        })
    },
    watch: {
        layer(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title) sublayer.setVisible(this.layer)
            })
        },
        colorVector(val) {
            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === this.title && this.layer && this.editColor) {
                    let newStyle = new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: val,
                            width: 3
                        })
                    })
                    sublayer.setStyle(newStyle)
                }
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
        background: none
        padding-right: -10px !important
        border: none
        cursor: pointer
        float: right

    .btn-view:hover
        color: #FFF
        text-shadow: 0px 0px 3px #333

    .btn-color
        float: right
        background: rgba(#FFF, 0.5)
        margin-right: 7px
</style>