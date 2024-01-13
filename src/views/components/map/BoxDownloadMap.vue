<template>
    <div class="box-info" v-show="boxDownloadMap">
        <header class="header">
            <h1>{{ $t('map.viewDownloadMap.title') }}</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
        <div class="body">
            <div class="row justify-content-md-center">
                <button class="btn btn-success" @click="downloadView()">{{ $t('map.viewDownloadMap.btnFeature') }}</button>
                <button class="btn btn-secondary" id="download-background-map" @click="downloadBackgroundMap()">{{ $t('map.viewDownloadMap.btnBox') }}</button>
                <confirmation-modal ref="confirmationModal"></confirmation-modal>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ConfirmationModal from '../dashboard/ConfirmationModal.vue'

export default {
    components:{ ConfirmationModal },
    computed: {
      ...mapState('map', ['boxDownloadMap', 'layers']),
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxDownloadMap', false)
        },
        async downloadView() {
            const canvas = document.getElementsByTagName('canvas')[0];
            const imagemURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            
            const element = document.createElement('a');
            const filename = 'visualizacao_atual.png';
            element.setAttribute('href', imagemURL);
            element.setAttribute('download', filename);

            element.click();    
        },
        async downloadBackgroundMap() {
            const mapLayers = this.$store.state.map.mapLayers
            const selectedMapLayer = mapLayers.filter(el => el.status)
            
            if (selectedMapLayer.length == 0) {
                this.$alert(this.$t('map.viewDownloadMap.msg.errMsg'), this.$t('map.viewDownloadMap.msg.errTitle'), {
                    confirmButtonText: 'OK',
                    type: 'error'
                })
                return;
            }
            const layerName = selectedMapLayer[0].title;

            const ok = await this.$refs.confirmationModal.show({
                title: this.$t('map.viewDownloadMap.modalTitle'),
                message: this.$t('map.viewDownloadMap.modalText'),
                okButton: this.$t('map.viewDownloadMap.modalBtnConfirm'),
                cancelButton: this.$t('map.viewDownloadMap.modalBtnCancel'),
            })

            if (ok) {
                const width = window.innerWidth
                const height = window.innerHeight
                let url = process.env.urlGeoserverPauliceia+'/wms/reflect?format=application/openlayers&layers=pauliceia%3A'+layerName+'&height='+height+'&width='+width+'#toggle';
                
                window.open(url, '_blank', 'noreferrer');
            } 
        },
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
    max-width: 50%
    min-width: 40%
    max-height: 75%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
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
            background: none
            font-size: 1em
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)

    .body
        padding: 15px 10px
        background: #FFF
        button
            margin: 0 10px 0 0

        .result
            p
                font-size: 1.3em
                font-weight: 700
                padding: 0px 10px
                margin: 25px 2px 10px 2px
                border-left: 2px solid #000

            .table td
                border: 1px solid #CCC
            .table
                background: rgba(#000, 0.03)

</style>
