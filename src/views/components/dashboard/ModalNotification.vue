<template>
  <div>
    <el-button type="text" @click="showModal2()">Comments</el-button>

    <el-dialog title="Notification" :visible.sync="outerVisible" id="myModal" :append-to-body="true" class="mod">

      <div class="notification-box">
        <div style="display: flex; align-items: center;">
          <div class="photo">B</div>
          <div class="credentials">
            <p class="author">{{notification.name}}</p>
            <p class="date">{{notification.created_at}}</p>
          </div>
        </div>
        <p class="content">{{notification.description}}</p>
      </div>

      <div class="notification-box2" v-if=false>
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
        <div v-for="n in notifG">
          <div class="notification-box2">

            <div style="display: flex; align-items: center;">
              <div class="photo">B</div>
              <div class="credentials">
                <p class="author">{{n.name}}</p>
                <p class="date">{{n.date}}</p>
              </div>
            </div>

            <p class="content">{{n.description}}</p>
            <p class="comments">
              <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(n)" title="Responder" v-if=false>
                <md-icon>replay</md-icon>
              </button>
              <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(n)" title="Denunciar" v-if=false>
                <md-icon>report</md-icon>
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(n)" v-if="user.user_id === n.user_id_creator || user.is_the_admin" title="Excluir">
                <md-icon>clear</md-icon>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">Close</el-button>
        <!--<el-button type="primary" @click="innerVisible = true">Close</el-button>-->
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import DashLayout from '@/views/layouts/dashboard'
  import { MessageBox } from 'element-ui';
  import Api from '@/middleware/ApiVGI'
  import {mapState} from 'vuex'

  export default {
    name: "ModalNotification",
    components: {
      "modal": {
        template: '#modal-template'
      },
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications']),
    },
    props: ['notification_id'],
    data: function () {
      return {
        activeName: 'first',
        notification: [],
        notifG: [],
        txtNotif: null,
        keyword_id: null,
        notification_id_parent: null,
        is_denunciation: false,
        layer_id: null,
        notificationsP: [],
        userId: null,
        txtReply: null,
        showInput2: false,
        outerVisible: false,
        innerVisible: false,
        showModal: false
      }
    },
    methods: {
      showModal2(){
        this.outerVisible = true
        this.updateNotif()
      },
      replyNot(notification) {
        this.showInput2 = true
        this.txtReply = 'Reply to ' + notification.name
        this.notification_id_parent = notification.notification_id
        this.layer_id = notification.layer_id
      },
      clearNot(notification) {
        const vm = this
        Api().delete('/api/notification/?notification_id=' + notification.notification_id,
        ).then(function (response) {
          //console.log(response)
          vm.updateNotif()
        })
      },
      reportNot(notification) {
        this.showInput2 = true
        this.txtReply = 'Denunciation to ' + notification.name
        this.is_denunciation = true
        this.notification_id_parent = notification.notification_id
        this.layer_id = notification.layer_id
      },
      clearMsg() {
        this.txtReply = null
        this.notification_id_parent = null
        this.layer_id = null
        this.keyword_id = null
        this.is_denunciation = false
        this.showInput2 = false
      },
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // },
      addNotif() {
        const vm = this
        let msg = ''
        if (vm.txtNotif !== null) {
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
            vm.clearMsg()
            vm.txtNotif = null
            vm.updateNotif()
          }, function (cause) {
            msg = cause.toString()
            console.log(cause.response)
            vm.$message.error(msg)
          })
        } else {
          msg = "it is necessary to have some text."
          vm.$message.error(msg)
        }
      },
      orderNotification(x) {
        const vm = this
        setTimeout(_ => {
          vm.notifG.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
          })
        }, x);
      },
      updateNotif(){
        const vm = this
        this.notifG = []

        Api().get('/api/notification/?notification_id='+vm.notification_id).then(function (notification) {
          Api().get('/api/user/?user_id=' + notification.data.features[0].properties.user_id_creator).then(function (user) {
            vm.notification = {
                'description': notification.data.features[0].properties.description,
                'name': user.data.features[0].properties.name,
                'created_at': notification.data.features[0].properties.created_at,
                'type': 'myLayer',
                'notification_id': notification.data.features[0].properties.notification_id,
                'user_id_creator': notification.data.features[0].properties.user_id_creator,
                'is_denunciation': notification.data.features[0].properties.is_denunciation,
                'keyword_id': notification.data.features[0].properties.keyword_id,
                'layer_id': notification.data.features[0].properties.layer_id,
                'notification_id_parent': notification.data.features[0].properties.notification_id_parent,
              }
            vm.orderNotification(50)
          })
        })

        Api().get('/api/notification/?notification_id_parent='+vm.notification_id).then(function (notifications) {
          notifications.data.features.forEach(notification => {
            Api().get('/api/user/?user_id=' + notification.properties.user_id_creator).then(function (user) {
              vm.notifG.push(
                {
                  'description': notification.properties.description,
                  'name': user.data.features[0].properties.name,
                  'date': notification.properties.created_at,
                  'type': 'myLayer',
                  'notification_id': notification.properties.notification_id,
                  'user_id_creator': notification.properties.user_id_creator,
                  'is_denunciation': notification.properties.is_denunciation,
                  'keyword_id': notification.properties.keyword_id,
                  'layer_id': notification.properties.layer_id,
                  'notification_id_parent': notification.properties.notification_id_parent
                })
              vm.orderNotification(50)
            })
          })
        })
      }
    },
    mounted() {
      this.updateNotif()
      // $('#myModal').on('shown.bs.modal', function () {
      //   $('#myInput').trigger('focus')
      // })
    }
  }

</script>

<style lang="sass" scoped>
  .el-button
    color: #ff6107

  .notification-box2
    margin: 10px
    margin-right: 60px
    background: rgba(183,200,255,0.69)
    padding: 20px
    border-radius: 20px
    left: 50px
    position: relative

  .notification-box
    margin: 10px
    background: rgba(#000, 0.1)
    padding: 20px
    border-radius: 20px

    .content
      text-align: justify
      margin-top: 10px
      padding-right: 50px
      display: block

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


  .comments
    width: 100%
    text-align: right
    color: #ffffff
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

  .msgType
    display: flex

</style>
