<template>
    <div class="box-info" v-show="boxInfoVector">
        <header class="header">
            <h1>SELECT INFORMATION</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
        <div class="body">
            <div class="row justify-content-md-center">
                <button class="btn btn-success">FEATURE</button> 
                <button class="btn btn-secondary">BOX</button> 
                <button class="btn btn-danger">CLEAN</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
      ...mapState('map', ['boxInfoVector'])
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxInfoVector', false)
        }
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 40px
    right: 0
    overflow: auto
    padding: 20px 20px
    background: rgba(#FFF, 0.9)
    z-index: 1
    max-width: 45%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
        h1
            padding: 10px
            font-size: 2em
            display: inline-block
            margin: 0 !important

        .btn
            margin-top: 3px !important
            background: none
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)
    
    .body
        padding: 15px 0
        button
            margin: 0 10px 0 0

</style>