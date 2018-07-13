<template>
    <div class="box-func-edit">
        <el-radio-group v-model="option" size="medium">
            <el-radio-button label="ADD" @click.native="draw()"><i class="el-icon-plus"></i> ADD</el-radio-button>
            <el-radio-button label="EDIT" @click.native="edit()"><i class="el-icon-edit"></i> EDIT</el-radio-button>
            <el-radio-button label="DEL"><i class="el-icon-close"></i> DEL</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    props: ['source'],

    data() {
        return {
            option: null
        }
    },

    methods: {
        draw(){
            let draw = new ol.interaction.Draw({ 
                source: this.source,
                type: 'LineString'
            })

            this.$root.olmap.addInteraction(draw)

            this.$store.dispatch('edit/setAttr', true)
        },
        edit() {
            let modify = new ol.interaction.Modify({ source: this.source })
            this.$root.olmap.addInteraction(modify)

            this.$store.dispatch('edit/setAttr', true)
        }
    }
}
</script>

<style lang="sass" scoped>
</style>