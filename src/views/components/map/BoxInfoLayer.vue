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
                <li><b>{{ $t('map.viewInfo.lbReferences') }}:</b> 
                    <span v-show="layer != null" v-for="id in infos.references" :key="id">
                        {{ getReferenceDescription(id)[0].properties.description }};
                    </span> 
                </li>
            </ul>

            <div class="nofitication">
                <md-list-item>
                    <md-icon>notifications</md-icon>
                    <p class="md-list-item-text">{{ $t('map.viewInfo.lbNotifications') }}:</p>
                </md-list-item>
              <div class="notification-box">
                <textarea class="form-control" v-model="txtNotif" id="inputReference" rows="3"></textarea>
                <br>
                <div style="right: 60px; position: absolute">
                  <a class="btn btn-primary" @click="addNotif()" style="color: white">Submit</a>
                </div>
                <div style="right: 150px; position: absolute">
                  <a class="btn btn-warning" @click="addNotifD()"><md-icon>report</md-icon></a>
                </div>
                <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()" v-if="txtReply !== null">
                    <md-icon>clear</md-icon>
                  </button>
                </p>
              </div>
              <div v-for="n in notifG" :key="n.notification_id">
                <div class="notification-box">

                  <div style="display: flex; align-items: center;">
                    <div class="photo">B</div>
                    <div class="credentials">
                      <p class="author">{{n.name}}</p>
                      <p class="date">{{n.date}}</p>
                    </div>
                  </div>

                  <p class="content">{{n.description}}</p>
                  <p class="comments">
                    <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(n)">
                      <md-icon>replay</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(n)">
                      <md-icon>report</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(n)"v-show="user.user_id === n.user_id_creator">
                      <md-icon>clear</md-icon>
                    </button>
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Map from '@/middleware/Map'
import Api from '@/middleware/ApiVGI'

export default {
    computed: {
      ...mapState('map', ['boxInfoLayer', 'idInfoLayer']),
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications']),
    },

    watch: {
        idInfoLayer(val) {
            if(val != null){
                this.id = val
                this._getInfos()
                this.updateNotif()
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
            allReferences: [],
            infos: {
                name: '',
                date: '',
                description: ''
            },
            activeName: 'first',
            notifications: [],
            notifG: [],
            txtNotif: null,
            keyword_id: null,
            notification_id_parent: null,
            is_denunciation: false,
            layer_id: null,
            notificationsP: [],
            userId: null,
            txtReply: null
        }
    },

    async created() {
      this.layer_id = this.id
      let keywords = await Map.getKeywords()

        this.allKeywords = keywords.data.features
      let authors = await Map.getAuthors()

        this.allAuthors = authors.data.features
      let references = await Map.getReferences()

        this.allReferences = references.data.features
      let authors_layers = await Map.getAuthorsLayers(null)

        this.allAuthorsLayers = authors_layers.data.features
    },

    methods: {

        replyNot(notification){
          this.txtReply = 'Reply to '+notification.name
          this.notification_id_parent = notification.notification_id
          this.layer_id = this.id
          //console.log(this.notifP)
        },
        clearNot(notification){
          const vm = this
          Api().delete('/api/notification/?notification_id='+notification.notification_id,
          ).then(function (response) {
            //console.log(response)
            vm.updateNotif()
          })
        },
        reportNot(notification){
          this.txtReply = 'Denunciation to ' + notification.name
          this.is_denunciation = true
          this.notification_id_parent = notification.notification_id
          this.layer_id = this.id
        },
        clearMsg(){
          this.txtReply = null
          this.notification_id_parent = null
          this.keyword_id = null
          this.is_denunciation = false
          this.layer_id = this.id
        },
        handleClick(tab, event) {
          // console.log(tab, event);
        },
        addNotif(){
          const vm = this
          this.layer_id = this.id
          let notification = {
            'properties': {
              'notification_id': -1,
              'is_denunciation': this.is_denunciation,
              'keyword_id': this.keyword_id,
              'notification_id_parent': this.notification_id_parent,
              'layer_id': this.layer_id,
              'description': this.txtNotif,
            },
            'type': 'Notification'
          }

          Api().post('/api/notification/create', notification).then(function (response) {
            vm.updateNotif()
          })

          vm.txtNotif = null
          vm.txtReply = null
          vm.notification_id_parent = null
          vm.keyword_id = null
          vm.is_denunciation = false
        },
        addNotifD(){
          const vm = this
          this.layer_id = this.id
          let notification = {
            'properties': {
              'notification_id': -1,
              'is_denunciation': true,
              'keyword_id':null,
              'notification_id_parent': null,
              'layer_id': this.layer_id,
              'description': this.txtNotif,
            },
            'type': 'Notification'
          }

          Api().post('/api/notification/create', notification).then(function (response) {
            vm.updateNotif()
          })

          vm.txtNotif = null
          vm.txtReply = null
          vm.notification_id_parent = null
          vm.keyword_id = null
          vm.is_denunciation = false
        },
        async updateNotif(){
            const vm = this
            this.notifG = []
            let notifications = await Api().get('/api/notification/?layer_id='+vm.id)
            let notifG = await notifications.data.features.map(async notification => {

                let userInfo = await Api().get('/api/user/?user_id=' + notification.properties.user_id_creator)
                return {
                'description': notification.properties.description,
                'name': userInfo.data.features[0].properties.name,
                'date': notification.properties.created_at,
                'type': 'general',
                'notification_id': notification.properties.notification_id,
                'user_id_creator': notification.properties.user_id_creator,
                'is_denunciation': notification.properties.is_denunciation,
                'keyword_id': notification.properties.keyword_id,
                'layer_id': notification.properties.layer_id,
                'notification_id_parent': notification.properties.notification_id_parent
                }
            })

            Promise.all(notifG).then( notifUpdated => {
                //console.log(notifUpdated)
                vm.notifG = notifUpdated.reverse().sort(function(a,b){
                    return new Date(b.date) - new Date(a.date)
                });
            })

        },
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
        getReferenceDescription(id){
            return this.allReferences.filter( reference => reference.properties.reference_id == id)
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
            this.infos.references = this.layer.reference
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
    top: 20px
    right: 20px
    border-radius: 10px
    bottom: 120px
    overflow: auto
    padding: 10px
    background: rgba(#FFF, 0.7)
    z-index: 1
    max-width: 40%
    min-width: 40%

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
        background: #FFF
        .description
            padding: 15px 20px 0 20px
            font-size: 1.2em
            li
                padding: 15px 0 0 0
                text-align: justify
        
        .nofitication
            padding: 0 20px 15px 20px

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
                border-radius: 20px

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
    .add
      top: -1px
      left: 0px
      display: inline-block
      border: none
      padding: 0px
      margin: 0px
      position: relative
      border-radius: 30px

</style>
