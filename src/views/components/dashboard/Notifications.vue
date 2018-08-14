<template>
  <div class="body">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GENERAL" name="first">
        <div class="notification-box">
          <textarea class="form-control" v-model="txtNotif" id="inputReference" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a href="#" class="btn btn-primary" @click="addNotif()">Submit</a>
          </div>
          <br>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="n in notifG">
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

      <el-tab-pane label="PERSONAL" name="second">
        <div class="notification-box">
          <textarea class="form-control" v-model="txtNotif" id="inputReference2" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a href="#" class="btn btn-primary" @click="addNotif2()">Submit</a>
          </div>
          <br>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="n in notifP">
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

      <el-tab-pane label="FOLLOWING" name="thrid">
        <div v-for="test in 8" :key="test">
          <div class="notification-box">

            <div style="display: flex; align-items: center;">
              <div class="photo">C</div>
              <div class="credentials">
                <p class="author">Carlos Noronha</p>
                <p class="date">05/02/2018</p>
              </div>
            </div>

            <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.</p>
            <p class="comments">see more</p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
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
    name: "Notifications",
    data: function () {
      return {
        activeName: 'first',
        notifications: [],
        notifG: [],
        notifP: [],
        txtNotif: null,
        keyword_id: null,
        notification_id_parent: null,
        layer_id: null,
        notificationsP: [],
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      addNotif(){
        const vm = this

        let notification = {
          'properties': {
            'notification_id': -1,
            'is_denunciation': false,
            'keyword_id': this.keyword_id,
            'notification_id_parent': this.notification_id_parent,
            'layer_id': this.layer_id,
            'description': this.txtNotif,
          },
          'type': 'Notification'
        }
        console.log(notification)

        Api().post('/api/notification/create',
          notification
        ).then(function (response) {
          //console.log(response)
          vm.updateNotif()
          vm.txtNotif = null
        })
      },
      updateNotif(){
        const vm = this
        this.notifG = []
        Api().get('/api/notification/').then(function (response) {
          //Api().get('/api/notification/?notification_id=' + vm.user.user_id).then(function (response) {
          Api().get('/api/notification/').then(function (response) {
            response.data.features.filter(e => {
              vm.notifications.push(e.properties)

              Api().get('/api/user/?user_id=' + e.properties.user_id_creator).then(function (response) {
                vm.notifG.push({
                  'description': e.properties.description,
                  'name': response.data.features[0].properties.name,
                  'date': e.properties.created_at
                })
                //console.log(response.data.features[0].properties.name)
              })
            })

            console.log(response.data.features)
            //console.log(vm.notifications)
            console.log(vm.notifG)
            vm.notifG.sort(function(a,b){
              return a.properties.notification_id - b.properties.notification_id
            });
          })
        })
      }
    },

    async mounted() {
      const vm = this
      try {
        // let notifications = await Api().get('/api/notification/?layer_id=NULL&keyword_id=NULL&notification_id_parent=NULL')
        // let notifG = await notifications.data.features.map(async notification => {
        //
        //   let userInfo = await Api().get('/api/user/?user_id=' + notification.properties.user_id_creator)
        //   return {
        //     'description': notification.properties.description,
        //     'name': userInfo.data.features[0].properties.name,
        //     'date': notification.properties.created_at,
        //     'type': 'general',
        //     'notification_id': notification.properties.notification_id,
        //   }
        //
        // })
        //
        // Promise.all(notifG).map( not => {
        //   console.log(not)
        // })

        //vm.notifG = notifG

        // await response.data.features.filter(async e => {
        //     vm.notifications.push(e.properties)
        //
        //     let teste = await Api().get('/api/user/?user_id=' + e.properties.user_id_creator)
        //     vm.notifG.push({
        //       'description': e.properties.description,
        //       'name': teste.data.features[0].properties.name,
        //       'date': e.properties.created_at,
        //       'type': 'general',
        //       'notification_id': e.properties.notification_id,
        //     })
        //   })
        //   // console.log(response.data.features)
        //   vm.notifG.sort(function(a,b){
        //     console.log(a.date)
        //     console.log(b.date)
        //     return new Date(a.date) - new Date(b.date)
        //   })


        // Api().get('/api/notification/?user_id_creator='+vm.user.user_id).then(function (responseU) {
        //   responseU.data.features.forEach(f => {
        //
        //     Api().get('/api/notification/?notification_id_parent=' + f.properties.notification_id).then(function (response) {
        //       response.data.features.filter(e => {
        //         vm.notificationsP.push(e.properties)
        //
        //         Api().get('/api/user/?user_id=' + e.properties.user_id_creator).then(function (response) {
        //           vm.notifP.push({
        //             'description': e.properties.description,
        //             'name': response.data.features[0].properties.name,
        //             'date': e.properties.created_at,
        //             'type': 'general',
        //             'notification_id': e.properties.notification_id,
        //           })
        //         })
        //       })
        //       console.log(response.data.features)
        //       //console.log(vm.notifications)
        //       vm.notifG.sort(function (a, b) {
        //         return a.properties.notification_id - b.properties.notification_id
        //       })
        //     })
        //   })
        // })
      } catch( error ) {
        console.log(error)
      }

    }
  }
</script>



<style lang="sass" scoped>

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
