<template>
    <div class="box-info" v-show="boxDownload">
        <header class="header">
            <h1>{{ $t("map.download.action") }}</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
            <button class="btn btn-success" @click="downloadCanvas()">
                <md-icon>download</md-icon>
            </button>
        </header>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('map', ['boxDownload'])
    },
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxDownload', false)
        },
        downloadCanvas() {
            var canvas = document.querySelector("canvas");
            var imgUrl = canvas.toDataURL()

            let anchorElement = document.createElement('a');
            anchorElement.href = imgUrl;
            anchorElement.download = "speto.png";

            document.body.appendChild(anchorElement);
            anchorElement.click();

            document.body.removeChild(anchorElement);
            window.URL.revokeObjectURL(imgUrl);
        }
    }
}
</script>



<style lang="sass" scoped>
.box-info
    position: absolute
    top: 20px
    right: 60px
    border-radius: 10px
    overflow: auto
    padding: 10px
    background: rgba(#FFF, 0.7)
    z-index: 1
    max-width: 40%
    min-width: 40%
    max-height: 75%

    .header
        width: 100%
        h1
            padding: 5px 5px 10px 5px
            font-size: 1.3em
            font-weight: 400
            font-family: 'Roboto' !important
            display: inline-block
            margin: 0 !important
            

        .btn
            margin: 3px !important
            padding: 2px !important
            font-size: 1em
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)

    .body
        padding: 10px 20px
        background: #FFF


</style>
