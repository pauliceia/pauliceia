<template>
    <section class="box-attr" v-show="attr != null">
        <p class="title">
            <i class="el-icon-caret-right" style="color: red"></i>
            Altere as informações:
        </p>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('edit', ['attr'])
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

.box-attr::-webkit-scrollbar 
    width: 0.5em

.box-attr::-webkit-scrollbar-track 
    -webkit-box-shadow: inset 0 0 6px rgba(#000, 0.4)

.box-attr::-webkit-scrollbar-thumb 
    background-color: rgba(#000, 0.4)
    outline: 1px solid red
</style>
