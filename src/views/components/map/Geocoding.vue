<template>
    <section class="box" v-show="boxGeocoding">

        <header class="header">
            <h1>{{ $t('map.geocoding.label.search') }}: 

            <el-popover class="info" placement="top-start" width="450"
                        trigger="hover"
                        :content= "$t('map.geocoding.popupInfo.search')"
                        type="primary">
                <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                </button>
            </el-popover></h1>

            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
    
        <form @submit.prevent="search">            
            <div class="input-group">               
                <el-autocomplete
                    class="inline-input"
                    style="flex: 1 1 auto"
                    v-model="inputSearch"
                    ref="geocoding_search"
                    :fetch-suggestions="querySearch"
                    :placeholder="$t('map.geocoding.placeholder')"
                    :trigger-on-focus="false"
                    @select="handleSelect"
                    >
                    <template slot-scope="{ item }">
                        <div class="value">{{ item }}</div>
                    </template>
                </el-autocomplete>

            <div class="input-group-append">
                    <button class="btn btn-search">
                        {{ $t('map.geocoding.btnText') }}
                    </button>
                </div>
                <div class="input-group-append">
                    <button type="button" class="btn" @click="multigeocoding = !multigeocoding">
                        <md-icon>settings</md-icon>
                    </button>
                </div>
                
            </div>
        </form>

        <div class="box-multigeocoding" v-show="multigeocoding">
            <h1>{{ $t('map.geocoding.label.geocoding') }}: 

            <el-popover class="info" placement="bottom-start" width="450"
                        trigger="hover"
                        type="primary">
                <div v-html="$t('map.geocoding.popupInfo.geocoding')"/>
                <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                </button>
            </el-popover></h1>
            <br>

            <label class="file-select">
                <!-- We can't use a normal button element here, as it would become the target of the label. -->
                <div class="select-button">
                </div>
                <!-- Now, the file input that we hide. -->
                <input type="file" @change="handleFileChange"/>
            </label><br><br>

            <button class="btn btn-download" @click="download()">Download</button>                
        </div>    
        
    </section>    
</template>

<script>

import ApiMap from '@/middleware/Map'
import { mapState } from 'vuex'

import {
    overlayGroup
} from '@/views/assets/js/map/overlayGroup'

import {
    placeStyle,
    placeStyleSearch
} from '@/views/assets/js/map/Styles'

import {
    CSV2JSON,
    CSVToArray,
    getUrl
} from '@/views/assets/js/map/multiplegeocode'

import {
    overlayGroupGeolocation
} from '@/views/assets/js/map/overlayGroup'

export default {
    data() {
        return {
            inputSearch: '',
            multigeocoding: false,
            placesList: [],
            geojson: ''
        }
    },
    
    computed: {
        ...mapState('map', ['boxGeocoding'])
    },

    async mounted(){
        try {
            let response = await ApiMap.getPlacesList()
            this.placesList = response.data
        } catch(_) {
            this.$alert('Serviço de GEOCODING indisponível, tente mais tarde ou comunique nosso suporte!', 'Erro Interno', {
                confirmButtonText: 'OK',
                type: 'error'
            });
        }
    },

    methods: {
        querySearch(queryString, cb) {
            let links = this.placesList
            let results = queryString ? links.filter( link => link.toLowerCase().indexOf(queryString.toLowerCase()) >= 0 ) : links
            cb(results)
        },
        handleSelect(item) {
            this.inputSearch = item
        },    
        handleFileChange(e) {
            let vm = this

            this.$emit('input', e.target.files[0])
            let reader = new FileReader();
            reader.onload = async _ => {
                let text = reader.result;
                let node = document.getElementById('output');
                let csv = text;
                let json = CSV2JSON(csv);

                try {
                    let response = await ApiMap.geolocationMultiple(encodeURIComponent(json));
                    vm.geojson = response.data
                    
                    let vectorLayer = new ol.layer.Vector({
                        title: "multipligeolocation",
                        source: new ol.source.Vector({
                            features: (new ol.format.GeoJSON()).readFeatures(vm.geojson)
                        }),
                        name: 'placesSearchMultiple',
                        style: placeStyleSearch,
                        zIndex: 999
                    });
                    overlayGroupGeolocation.getLayers().clear()
                    overlayGroupGeolocation.getLayers().push(vectorLayer)

                } catch( error ){
                    this.$alert('Não foi possível ler o arquivo CSV', 'Erro no arquivo', {
                        confirmButtonText: 'OK',
                        type: 'error'
                    });
                }
            }
            reader.readAsText(e.target.files[0]);
        },
        download(){

            console.log(this.geojson);
            this.$alert('Função ainda não implentada!', 'Download', {
                confirmButtonText: 'OK',
                type: 'warning'
            });
            //Acessar rota para converter geojson em shapefile
            //Escrever shapefile
            //Disponibilizar para download

        },
        closeBox() {
            this.$store.dispatch('map/setBoxGeocoding', false)
        },
        async search () {
            try {
                let regex = new RegExp(/\s*,( )*\d{4}/);
                let search = this.inputSearch.replace(/( )+/g, ' ');

                if(regex.test(search)){
                    const result = await ApiMap.geolocationOne(search)
                    console.log(result)
                    if(result.status >= 300) {
                        this.$alert('Erro programado', 'erro programado', {
                            dangerouslyUseHTMLString: true,
                            confirmButtonText: 'OK',
                            type: 'warning'
                        });

                    } else {
                        let coordPoint = result.data[1][0].geom.substring(6).replace(")", "").split(" ")
                        let feature = new ol.Feature(new ol.geom.Point(coordPoint))
                        
                        let layerSearch = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [feature]
                            }),
                            name: 'placesSearch',
                            style: placeStyleSearch,
                            zIndex: 999
                        });
                        overlayGroupGeolocation.getLayers().clear()
                        overlayGroupGeolocation.getLayers().push(
                            layerSearch
                        )

                        let extent = ol.extent.createEmpty();
                        ol.extent.extend(extent, feature.getGeometry().getExtent());
                        this.$root.olmap.getView().fit(extent, this.$root.olmap.getSize());
                    }                   
                
                } else{
                    this.$alert('<strong>type it:</strong> street, number, year (0000)', 'INVÁLID FORMAT', {
                        dangerouslyUseHTMLString: true,
                        confirmButtonText: 'OK',
                        type: 'warning'
                    });
                }
                
            } catch (error) {
                this.$alert('Erro ao geocodificar', 'Erro', {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: 'OK',
                    type: 'error'
                });
            }
            
        }
    }
}
    
</script>

<style lang="sass">
    .box
        position: absolute
        top: 20px
        right: 20px
        border-radius: 10px
        overflow: auto
        padding: 10px
        background: rgba(#FFF, 0.7)
        z-index: 1
        max-width: 40%
        min-width: 40%

        .header
            width: 100%
            h1
                padding: 5px 5px 1px 5px 
                font-size: 1.3em
                font-weight: 400
                font-family: 'Roboto' !important
                display: inline-block
                margin: 0 !important
            
            .info
                top: -7px !important
                border: none
                position: relative
                border-radius: 30px
            .info:hover
                background: #008ae6 !important

            .btn
                margin: 3px !important
                padding: 2px !important
                background: none
                border: none
                float: right
                display: inline-block
            .btn:hover
                background: rgba(#000, 0.1)

        .btn-search
            background: #f15a29
            border-bottom: 1px solid #f15a29
            color: #FFF

        .btn-search:hover
            background: rgba(#f15a29, 0.7)

        .btn-download
            background: #f15a29
            border-bottom: 1px solid #f15a29
            color: #FFF
        .btn-download:hover
            background: rgba(#f15a29, 0.7)
            

        .box-multigeocoding
            width: 100%
            background: #FFF
            padding: 25px
            border: 1px solid #CCC
            border-top: none
            .file-select
                padding: 10px 0px 0px 0px
            h1
                padding: 5px 5px 1px 0px 
                font-size: 1.3em
                font-weight: 400
                font-family: 'Roboto' !important
                display: inline-block
                margin: 0 !important
            
            .info
                top: -7px !important
                border: none
                margin: 0
                padding: 0
                border-radius: 30px
            .info:hover
                background: #008ae6

            .btn
            .btn:hover


    input:focus
        border-color: rgba(#58595b, 0.2) !important
        box-shadow: 0px 0px 10px rgba(#58595b, 0.2) !important
</style>