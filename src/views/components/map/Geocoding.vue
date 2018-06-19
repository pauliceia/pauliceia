<template>
    <section class="box" v-show="boxGeocoding">
        
        <form @submit.prevent="search">
                <label for="searchGeocoding" class="label"> {{ $t('map.geocoding.label') }}:</label>

                <div class="input-group">               
                    <input type="text" class="form-control" ref="geocoding_search" autofocus v-model="inputSearch" :placeholder="$t('map.geocoding.placeholder')" />
                    <div class="input-group-append">
                        <button class="btn btn-search">
                            Search
                        </button>
                    </div>
                    <div class="input-group-append">
                        <button type="button" class="btn" @click="multigeocoding = !multigeocoding">
                            <md-icon>settings</md-icon>
                        </button>
                    </div>
                </div>

                <div class="box-multigeocoding" v-show="multigeocoding">
                    configurações
                </div>
        </form>
        
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

export default {
    data() {
        return {
            inputSearch: '',
            multigeocoding: false
        }
    },
    computed: {
      ...mapState('map', ['boxGeocoding'])
    },
    methods: {
        async search () {
            try {
                let regex = new RegExp(/\s*,( )*\d{4}/);
                let search = this.inputSearch.replace(/( )+/g, ' ');

                if(regex.test(search)){
                    const result = await ApiMap.geolocationOne(search)

                    let coordPoint = result.data[2][0].geom.substring(6).replace(")", "").split(" ")
                    let feature = new ol.Feature(new ol.geom.Point(coordPoint))
                    
                    let layerSearch = new ol.layer.Vector({
                        source: new ol.source.Vector({
                            features: [feature]
                        }),
                        name: 'placesSearch',
                        style: placeStyleSearch
                    });

                    overlayGroup.getLayers().push(
                        layerSearch
                    )

                    let extent = ol.extent.createEmpty();
                    ol.extent.extend(extent, feature.getGeometry().getExtent());
                    this.$root.olmap.getView().fit(extent, this.$root.olmap.getSize());
                
                } else{
                    this.$alert('<strong>type it:</strong> street, number, year (0000)', 'INVÁLID FORMAT', {
                        dangerouslyUseHTMLString: true,
                        confirmButtonText: 'OK',
                        type: 'warning'
                    });
                }
                
            } catch (err) {
                console.log(err.response)
                this.$alert('address not found', 'SORRY', {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: 'OK',
                    type: 'warning'
                });
            }
            
        }
    }
}
    
</script>

<style lang="sass">
    .box
        padding: 10px
        border-radius: 10px
        background: rgba(#FFF, 0.7)
        position: absolute
        left: 60%
        top: 20px
        right: 20px
        z-index: 1

        .label
            font-size: 1.3em
            padding-left: 5px
            color: #333

        .btn-search
            background: #f15a29
            border-bottom: 1px solid #f15a29
            color: #FFF

        .btn-search:hover
            background: rgba(#f15a29, 0.7)
            
        .box-multigeocoding
            width: 100%
            background: #FFF
            padding: 25px
            border: 1px solid #CCC
            border-top: none

    input:focus
        border-color: rgba(#58595b, 0.2) !important
        box-shadow: 0px 0px 10px rgba(#58595b, 0.2) !important
</style>