<template>
    <section class="box-attr" v-show="attr !== null">
        <p class="title">
            <i class="el-icon-caret-right" style="color: red"></i>
            Altere as informações:
        </p>
        <div class="form-attr">
            <div v-for="prop in properties" :key="prop != undefined ? prop.key : null">
                <div v-if="prop != undefined">
                    <label>{{ prop.key }}:</label>
                    <input type="text" :name="prop.key" :value="prop.value" class="form-control form-control-sm" />
                </div>
            </div>
            <el-button type="primary" icon="el-icon-check" @click="saveAttr()" round>SALVAR</el-button>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('edit', ['attr'])
    },

    data() {
        return {
            properties: null
        }
    },

    watch: {
        attr(val) {
            if(val != null)
                this.properties = Object.keys(val).map( index => {
                    if(index != "geometry" && index != "changeset_id" && index != "version")
                        return {key: index, value: val[index]}
                })
            else 
                this.properties = null
        }
    },

    methods: {
        saveAttr() {
            this.$alert("Função ainda não implementada", "OPSSS", {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: "warning"
            })
        }
    }
}
</script>

<style lang="sass" scoped>
//BOX ATTR
.box-attr
    border-top: 1px solid #CCC
    padding: 20px 10px
    color: #FFF
    overflow: auto

    .title
        text-transform: uppercase
        font-size: 1.2em
        font-weight: 700

    .form-attr
        padding: 0px 15px

        label
            margin: 0px 0 2.5px 0
        input 
            margin-bottom: 8px
        .el-button
            display: block
            float: right
            margin: 10px 0 -5px 0 !important
</style>
