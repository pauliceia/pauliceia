<template>
  <p-dash-layout title="Denunciations">
    <div class="row">
      <div class="col-sm-4">
        <div class="card  ">
          <div class="card-header text-center">
            Denounced Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in denouncedLayers">
                <div class="col-sm-8">{{ layer.name }} ({{ layer.n}})</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="selectLayer(layer.id)"><md-icon>visibility</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.id)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>

        <div class="card  ">
          <div class="card-header text-center">
            Denounced Comments
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="comment in denouncedComments">
                <div class="col-sm-8">{{ comment.name }} ({{ comment.n}})</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="selectComment(comment.id)"><md-icon>visibility</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteNotification(comment)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="card  text-center" v-if="is_comment">
          <div class="card-header">
            Comment
            <ul class="description" >
              <li><b> User Name:</b> {{nameUsers[chosenComment.user_id_creator]}}</li>
              <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b>{{ chosenComment.description }}  </li>
              <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ chosenComment.created_at }}</li>
              <li><b>Local:</b> {{ nameLayer }}</li>
            </ul>
          </div>
        </div>

        <div class="card  text-center" v-if="is_layer">
          <div class="card-header">
            Layer
            <ul class="description" >
              <li><b> {{ $t('map.viewInfo.lbTitle') }}:</b> {{chosenLayer.name}}</li>
              <li><b> {{ $t('map.viewInfo.lbKeywods') }}:</b>
                <el-tag v-show="is_layer" v-for="id in chosenLayer.keyword" :key="'tag'+id" style="margin-left: 5px">
                  {{ allKeywords[id] }}
                </el-tag>
              </li>
              <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b> {{ chosenLayer.description }} </li>
              <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ chosenLayer.created_at }}</li>
              <li v-if="chosenLayer.reference === []"><b>{{ $t('map.viewInfo.lbReferences') }}:</b>
                <span v-show="is_layer" v-for="id in chosenLayer.reference" :key="'ref'+id">
                        {{ allReferences[id] }};
                    </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="card  text-center">
          <div class="card-header">
            Denunciations
          </div>
          <div class="card-body">
            <div class="nofitication">
              <div v-for="n in denunciations">
                <div class="notification-box">

                  <div style="display: flex; align-items: center;">
                    <div class="photo">B</div>
                    <div class="credentials">
                      <p class="author">{{nameUsers[n.user_id_creator]}}</p>
                      <p class="date">{{n.created_at}}</p>
                    </div>
                  </div>

                  <p class="content">{{n.description}}</p>
                  <p class="comments">
                    <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(n)">
                      <md-icon>clear</md-icon>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </p-dash-layout>
</template>

<script>
  import DashLayout from '@/views/layouts/dashboard'
  import Api from '@/middleware/ApiVGI'
  import {mapState} from 'vuex'

  export default {
    name: "denunciations",
    components: {
      "p-dash-layout": DashLayout
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
    },
    data: function () {
      return {
        denouncedLayers: [],
        denouncedComments: [],
        notifications: [],
        denunciations: [],
        nameLayers: [],
        nameUsers: [],
        is_layer: false,
        is_comment: false,
        chosenLayer: [],
        chosenComment: [],
        allKeywords: [],
        allReferences: [],
        layers: [],
        nameLayer: null,
      }
    },
    mounted() {
      const vm = this
      vm.getDenunciations()
      vm.getInfos()
      setTimeout(_ => {
      }, 1000);
    },
    methods: {
        clearNot(notification){
          const vm = this
          Api().delete('/api/notification/?notification_id='+notification.notification_id,
          ).then(function (response) {
            //console.log(response)
            vm.denunciations.splice(vm.denunciations.indexOf(notification), 1)
            vm.getDenunciations()
          })
        },
        selectLayer(id){
          const vm = this
          this.chosenComment = []
          this.is_comment = false
          this.is_layer = true
          this.chosenLayer = this.layers[id]
          vm.denunciations = Object.values(this.notifications).filter( notif => {
            return (notif.layer_id === id && notif.notification_id_parent === null  && notif.is_denunciation === true)
          })
        },
        selectComment(id){
          const vm = this
          this.chosenLayer = []
          this.is_comment = true
          this.is_layer = false
          this.chosenComment = this.notifications[id]
          this.denunciations = Object.values(this.notifications).filter( notif => {
            return (notif.notification_id_parent === id && notif.is_denunciation === true)
          })
          vm.nameLayer = vm.chosenComment.layer_id === null ? 'Global' : vm.layers[vm.chosenComment.layer_id].name
        },
        clean(){
          const vm = this
          this.chosenComment = []
          this.is_comment = false
          this.is_layer = false
          vm.denunciations = []
          vm.nameLayer = null
        },
        getInfos(){
          const vm = this
          Api().get('/api/keyword/').then(function (keys) {
            keys.data.features.forEach(key => {
              vm.allKeywords = {...vm.allKeywords, [key.properties.keyword_id]: key.properties.name,}
            })
          })
          Api().get('/api/reference/').then(function (references) {
            references.data.features.forEach(reference => {
              vm.allReferences = {...vm.allReferences, [reference.properties.reference_id]: reference.properties.description,}
            })
          })
        },
        deleteNotification(notification){
          const vm = this

          Api().delete('/api/notification/?notification_id='+notification.id,
          ).then(function (response) {
            delete vm.denouncedComments[notification.id.toString()]
            vm.getDenunciations()
            vm.clean()
          })
        },
        deleteLayer(layer_id){
          const vm = this;
          Api().delete('/api/layer/' + layer_id).then(function (response) {
            delete vm.denouncedLayers[layer_id.toString()]
            vm.getDenunciations()
            vm.clean()
          })
        },
        getDenunciations(){
          const vm = this

          Api().get('/api/notification/?is_denunciation=True&notification_id_parent=NULL').then(function (response) {
            //vm.notifications.push(response.data.features)
            Api().get('/api/layer/').then(function (layers) {
              layers.data.features.forEach(layer => {
                vm.nameLayers = {...vm.nameLayers, [layer.properties.layer_id]: layer.properties.name,}
                vm.layers = {...vm.layers, [layer.properties.layer_id]: layer.properties,}
              })
            })
            setTimeout(_ => {
                vm.denouncedLayers = response.data.features.reduce((acc, currvalue) => {

                  const id = currvalue.properties.layer_id;
                  const idCont = acc[id] ? acc[id].n + 1 : 1;

                  return {...acc, [id]: {'n': idCont, 'name': vm.nameLayers[id], 'id': id},}
                }, {})

            }, 100);
          })

          Api().get('/api/notification/').then(function (response) {
              response.data.features.forEach( notification => {
                vm.notifications = {...vm.notifications, [notification.properties.notification_id]: notification.properties}
              })

              Api().get('/api/user/').then(function (users) {
                users.data.features.forEach(user => {
                  vm.nameUsers = {...vm.nameUsers, [user.properties.user_id]: user.properties.name,}
                })
              })
              setTimeout(_ => {
                  vm.denouncedComments = response.data.features.filter( e => {
                    return (e.properties.notification_id_parent !== null && e.properties.is_denunciation === true)
                  }).reduce((acc, currvalue) => {
                    const id = currvalue.properties.notification_id_parent;
                    const idCont = acc[id]!=null ? acc[id].n + 1 : 1

                    return {...acc, [id]: {'n': idCont, 'name': vm.nameUsers[vm.notifications[currvalue.properties.notification_id_parent].user_id_creator], 'id': id},}
                  }, {})
              }, 100);
          })
        }
    }
  }
</script>

<style lang="sass"  scoped>
  .notification-box
    margin: 10px
    background: rgba(#000, 0.1)
    padding: 20px
    border-radius: 20px
    position: relative

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
