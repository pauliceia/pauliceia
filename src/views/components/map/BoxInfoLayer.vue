<template>
    <div class="box-info" v-show="boxInfoLayer">
        <header class="header">
            <h1>{{ infos.name }}</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
            <el-tooltip effect="dark" 
                    :content="$t('map.viewInfo.btnFollow')" 
                    placement="top-end">

                <button class="btn" @click="followLayer()">
                    <md-icon>person_add</md-icon>
                </button>
            </el-tooltip>
            
        </header>
        <div class="body">
            <ul class="description">
                <li><b> {{ $t('map.viewInfo.lbTags') }}:</b> 
                    <el-tag v-show="layer != null" v-for="id in infos.keywords" :key="id" style="margin-left: 5px">
                        {{ getTagName(id)[0].properties.name }}
                    </el-tag>
                </li>
                <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b> {{ infos.description }} </li>
                <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ infos.date }}</li>
                <li><b>{{ $t('map.viewInfo.lbAuthors') }}:</b> 
                    <span v-show="layer != null" v-for="author in infos.authors" :key="author.properties.user_id">
                        {{ getAuthorName(author)[0].properties.name }};
                    </span> 
                </li>
            </ul>
            <div class="nofitication">
                <md-list-item>
                    <md-icon>notifications</md-icon>
                    <p class="md-list-item-text">{{ $t('map.viewInfo.lbNotifications') }}:</p>
                </md-list-item>

                <div v-for="test in 8" :key="test">
                    <div class="notification-box">

                        <div style="display: flex; align-items: center;">
                            <div class="photo">B</div>
                            <div class="credentials">
                                <p class="author">Beto Noronha</p>
                                <p class="date">05/02/2018</p>
                            </div>
                        </div>
                        
                        <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p class="comments">see more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Map from '@/middleware/Map'

export default {
    computed: {
      ...mapState('map', ['boxInfoLayer', 'idInfoLayer'])
    },

    watch: {
        idInfoLayer(val) {
            if(val != null){
                this.id = val
                this._getInfos()
            }
        }
    },

    data() {
        return {
            id: null,
            layer: null,
            allKeywords: [],
            allAuthors: [],
            allAuthorsLayers: [],
            infos: {
                name: '',
                date: '',
                description: ''
            }
        }
    },

    async created() {
        let keywords = await Map.getKeyword()
        this.allKeywords = keywords.data.features

        let authors = await Map.getAuthors()
        this.allAuthors = authors.data.features

        let authors_layers = await Map.getAuthorsLayers(null)
        this.allAuthorsLayers = authors_layers.data.features
    },

    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxInfoLayer', false)
            this.$store.dispatch('map/setIdInfoLayer', null)
        },
        followLayer() {
            this.$alert('Desculpe, mas essa função ainda não está disponível em nosso sistema. Aguarde novas implementações!', 'INDISPONÍVEL', {
                confirmButtonText: 'OK',
                type: "warning"
            });
        },
        getTagName(id){
            return this.allKeywords.filter( key => key.properties.keyword_id == id)
        },
        getAuthorName(item){
            return this.allAuthors.filter( author => author.properties.user_id == item.properties.user_id )
        },
        async _getInfos() {
            let layers = await Map.getLayers('layer_id='+this.id)
            this.layer = layers.data.features[0].properties
            
            this.infos.name = this.layer.name
            this.infos.description = this.layer.description
            this.infos.keywords = this.layer.keyword
            this.infos.authors = this.allAuthorsLayers.filter( item => item.properties.layer_id == this.layer.layer_id )

            this.infos.date = this._getDate(this.layer.created_at)
        },
        _getDate(date) {
            let dateParsed = date.split('-')
            if(this.$i18n.locale() == "pt") {
                return dateParsed[2].split(" ")[0] + "/" + dateParsed[1] + "/" + dateParsed[0]
            } else {
                return dateParsed[1] + "/" + dateParsed[2].split(" ")[0] + "/" + dateParsed[0]
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 40px
    right: 0
    bottom: 120px
    overflow: auto
    padding: 20px 20px
    background: rgba(#FFF, 0.95)
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
        .description
            padding: 15px 20px 0 20px
            font-size: 1.2em
            li
                padding: 15px 0 0 0
                text-align: justify
        
        .nofitication
            padding: 0 20px

            .md-list-item
                border-bottom: 1px dashed #CCC
                margin: 0 !important

                .md-list-item-content
                    margin: 0 !important
                    .md-icon
                        margin: 0 !important
                    .md-list-item-text
                        font-weight: 600
                        font-size: 1.5em
                        margin: 0px 0 0 10px !important

            .notification-box
                margin: 10px
                background: rgba(#000, 0.1)
                padding: 20px

                .photo
                    display: inline-block
                    width: 40px
                    padding: 10px
                    text-align: center
                    color: #FFF
                    border-radius: 50%
                    background: #666

                .credentials
                    display: inline-block
                    margin: 0 0 0 10px
                    .author
                        font-weight: 600
                        margin-top: 5px !important
                        font-size: 1.1em
                    .date
                        color: #666
                        font-size: 0.9em
                    p
                        margin: 0 0 5px 0 !important

                .content
                    text-align: justify
                    margin-top: 5px

                .comments
                    width: 100%
                    text-align: right
                    color: #0099ff
                    cursor: pointer
                    margin-top: -10px
                    margin-bottom: 5px

</style>