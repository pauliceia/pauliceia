<template>
  <p-dash-layout title="Dashboard">
    <div class="row">
      <div class="col-sm-8">
        <div class="card  text-center">
          <div class="card-header">
            Notifications
          </div>
          <div class="card-body">
            <div class="body">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="GENERAL" name="first">
                  <div class="nofitication">
                    <div v-for="n in notif">
                      <div class="notification-box">

                        <div style="display: flex; align-items: center;">
                          <div class="photo">B</div>
                          <div class="credentials">
                            <p class="author">{{n.name}}</p>
                            <p class="date">{{n.date}}</p>
                          </div>
                        </div>

                        <p class="content">{{n.description}}</p>
                        <p class="comments">Answer</p>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>

                <el-tab-pane label="FOLLOWING" name="second">
                  <div v-for="test in 8" :key="test">
                    <div class="notification-box">

                      <div style="display: flex; align-items: center;">
                        <div class="photo">C</div>
                        <div class="credentials">
                          <p class="author">Carlos Noronha</p>
                          <p class="date">05/02/2018</p>
                        </div>
                      </div>

                      <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      <p class="comments">see more</p>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card  ">
          <div class="card-header text-center">
            My Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in myLayers">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="editeLayer(layer.layer_id)"><md-icon>create</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.layer_id)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="card  ">
          <div class="card-header text-center">
            Shared Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in sharedLayers">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="editeLayer(layer.layer_id)"><md-icon>create</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.layer_id)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
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
    components: {
      "p-dash-layout": DashLayout
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications']),
    },
    data: function () {
      return {
        myLayers: [],
        sharedLayers: [],
        layers: [],
        users: [],
        shownNotif: [],
        activeName: 'first',
        notifications: [],
        notif: [],
      }
    },
    methods: {
      deleteLayer(id){
        const vm = this;
        Api().delete('/api/layer/' + id).then(function (response) {
          console.log(response)
          Api().get('/api/layer').then(function (response) {
            vm.layers = []
            response.data.features.filter(e => {
              //if(e.properties.user_id_published_by == vm.user.user_id)
              vm.layers.push({name: e.properties.name, id: e.properties.layer_id})
            })
          })
        })
      },
      editeLayer(id){
        this.$router.push({name: 'EditLayer', params: {layer_id: id}})
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    beforeCreate() {
      const vm = this

      Api().get('/api/layer').then(function (response) {
        response.data.features.filter(e => {
          vm.layers.push({name: e.properties.name, id: e.properties.layer_id})
        })

        Api().get('/api/user_layer/?user_id='+vm.user.user_id).then(function (response) {
          //console.log(response.data.features)
          response.data.features.filter(e => {
            Api().get('/api/layer/?layer_id='+e.properties.layer_id).then(function (response2) {
              //console.log(response2.data.features[0].properties)
              if(e.properties.is_the_creator === true){
                vm.myLayers.push(response2.data.features[0].properties)
              }
              else{
                vm.sharedLayers.push(response2.data.features[0].properties)
              }
            })
          })
        })

      })
      Api().get('/api/notification/').then(function (response) {
        //Api().get('/api/notification/?notification_id=' + vm.user.user_id).then(function (response) {
        Api().get('/api/notification/').then(function (response) {
          response.data.features.filter(e => {
            vm.notifications.push(e.properties)

            Api().get('/api/user/?user_id='+e.properties.user_id_creator).then(function (response) {
              vm.notif.push({'description': e.properties.description, 'name':response.data.features[0].properties.name, 'date': e.properties.created_at})
              //console.log(response.data.features[0].properties.name)
            })

          })
          //console.log(vm.notifications)
        })
      })
      
      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          vm.users.push(e.properties)
        })
        //console.log(vm.users)
      })
    }
  }
</script>

<style lang="sass" scoped>
.add
  top: 0px
  display: inline-block
  border: none
  padding: 0px
  margin: 0px
  position: absolute

.body
  padding: 10px 20px
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
