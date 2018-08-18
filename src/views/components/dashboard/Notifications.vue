<template>
  <div class="body">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GENERAL" name="first">
        <div class="notification-box" v-if="showInput">
          <textarea class="form-control" v-model="txtNotif" id="inputReference" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a class="btn btn-primary" @click="addNotif()" style="color: white">Submit</a>
          </div>
          <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()" v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>

        <div class="nofitication">
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
                <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(n)"  v-if="showInput">
                  <md-icon>replay</md-icon>
                </button>
                <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(n)"  v-if="showInput">
                  <md-icon>report</md-icon>
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(n)" v-if="userId === n.user_id_creator">
                  <md-icon>clear</md-icon>
                </button>
              </p>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="PERSONAL" name="second">
        <div class="notification-box"  v-if="showInput && showInput2" >
          <textarea class="form-control" v-model="txtNotif" id="inputReference2" rows="3" ></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a style="color: white" class="btn btn-primary" @click="addNotif2()">Submit</a>
          </div>
          <p style="left: 0px; display: flex" >{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()" v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="n in notifP" :key="n.notification_id">
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

                <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(n)"  v-if="showInput">
                  <md-icon>replay</md-icon>
                </button>
                <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(n)"  v-if="showInput">
                  <md-icon>report</md-icon>
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(n)" v-if="userId === n.user_id_creator">
                  <md-icon>clear</md-icon>
                </button>
              </p>
              <div v-if="n.is_denunciation !== false">Denunciation</div>
              <div v-if="n.notification_id_parent !== null">Reply</div>
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

    props: ['showInput'],

    data: function () {
      return {
        activeName: 'first',
        notifications: [],
        notifG: [],
        notifP: [],
        txtNotif: null,
        keyword_id: null,
        notification_id_parent: null,
        is_denunciation: false,
        layer_id: null,
        notificationsP: [],
        userId: null,
        txtReply: null,
        showInput2: false
      }
    },

    methods: {
      replyNot(notification){
        this.showInput2 = true
        this.txtReply = 'Reply to '+notification.name
        this.notification_id_parent = notification.notification_id
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
        this.showInput2 = true
        this.txtReply = 'Denunciation to ' + notification.name
        this.is_denunciation = true
        this.notification_id_parent = notification.notification_id
      },
      clearMsg(){
        this.txtReply = null
        this.notification_id_parent = null
        this.layer_id = null
        this.keyword_id = null
        this.is_denunciation = false
        this.showInput2 = false
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      addNotif(){
        const vm = this
        let msg = ''
        if(vm.txtNotif !== null) {
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
            vm.$message.success("The notification was added with success!")
          }, function (cause) {
            if (cause.response.status === 403) msg = "Just the owner of layer or administrator can create/update a time columns."
            else if (cause.response.status === 401) msg = "It is necessary an Authorization valid!"
            else msg = cause.toString()
            console.log(cause.response)
            vm.$message.error(msg)
          })

          vm.clearMsg()
          vm.txtNotif = null
          this.updateNotif()
        }
      },
      async updateNotif(){
        const vm = this
        try {
          let notifications = await Api().get('/api/notification/?layer_id=NULL&keyword_id=NULL&notification_id_parent=NULL')
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
            vm.notifG = notifUpdated.reverse().sort(function(a,b){
              //return b.notification_id - a.notification_id
              return new Date(b.date) - new Date(a.date)
            });
          })
        } catch( error ) {
          //console.log(error)
        }

        Api().get('/api/notification/?user_id_creator='+vm.user.user_id).then(function (userNotifications) {
          userNotifications.data.features.forEach(userNotification => {
            Api().get('/api/notification/?notification_id_parent='+userNotification.properties.notification_id).then(function (notifications) {
              notifications.data.features.forEach(notification => {
                Api().get('/api/user/?user_id=' + notification.properties.user_id_creator).then(function (user) {
                  vm.notifP.push(
                    {
                      'description': notification.properties.description,
                      'name': user.data.features[0].properties.name,
                      'date': notification.properties.created_at,
                      'type': 'general',
                      'notification_id': notification.properties.notification_id,
                      'user_id_creator': notification.properties.user_id_creator,
                      'is_denunciation': notification.properties.is_denunciation,
                      'keyword_id': notification.properties.keyword_id,
                      'layer_id': notification.properties.layer_id,
                      'notification_id_parent': notification.properties.notification_id_parent
                    }
                  )
                  vm.notifP.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date)
                  })
                })
              })
            })
          })
        })
        setTimeout(_=>{
          vm.notifP.sort(function(a,b){
            return new Date(b.date) - new Date(a.date)
          })
        }, 1000);
      }
    },

    async mounted() {
      const vm = this
      this.userId = this.user.user_id
      this.updateNotif()
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
