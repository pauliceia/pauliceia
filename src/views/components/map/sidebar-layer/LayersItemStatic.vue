<template>
    <section>
        <div class="box-item" v-for="layer in layers" :key="layer.title">
            <el-switch v-model="layer.status" @click.native="modifyLayer(layer)" :active-color="color"></el-switch>
            <span><b>{{ layer.title }}</b></span>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        group: Object,
        color: String
    },
    data() {
        return {
            layers: [
                {
                    status: true,
                    title: "OSM"
                }
            ]
        }
    },
    methods: {
        modifyLayer(layerSelected) {
            if (layerSelected.status == true)
                for (var i in this.layers) {
                    if (this.layers[i].title != layerSelected.title )
                        this.layers[i].status = false
                }

            this.group.getLayers().forEach(sublayer => {
                if (sublayer.get('title') === layerSelected.title)
                    sublayer.setVisible(layerSelected.status)
                else
                    sublayer.setVisible(false)
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.box-item
    margin-top: 0px
    padding: 5px 10px

    .el-switch
        margin-top: -5px !important
    span
        padding-left: 7.5px
        font-size: 1.2em
</style>
