<template>
  <div class="body">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GENERAL" name="first" class="">
        <div class="notification-box-main" v-if="showInput">
          <textarea class="form-control" v-model="txtNotif" id="inputReference" rows="3"></textarea>
          <br>
          <div style="float: right">
            <a class="btn btn-dark" @click="addNotif()"
               style="color: white; background-color: #ff6107; border-color: #ff6107">Submit</a>
          </div>
          <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()"
                    v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="notification in notifG" v-bind:key="notification.notification_id">
            <div class="row notification-box">
              <div class="col-3 col-md-3 col-lg-1 col-sm-3">
                <div style="display: flex; align-items: center;">
                  <div class="photo">
                    <md-avatar class="md-avatar-icon stylePicture">
                      <div class="logo">
                        <img :src="notification.photo"/>
                      </div>
                    </md-avatar>
                  </div>
                </div>
              </div>
              <div class="col-9 col-md-9  col-lg-11 col-sm-9">
                <div class="comments">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(notification)"
                          v-if="showInput" title="Responder">
                    <md-icon>replay</md-icon>
                  </button>
                  <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(notification)"
                          v-if="showInput" title="Denunciar">
                    <md-icon>report</md-icon>
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(notification)"
                          v-if="canUserRemoveIt(notification)" title="Excluir">
                    <md-icon>clear</md-icon>
                  </button>
                </div>
                <div class="credentials">
                  <div class="author">{{notification.name}}</div>
                  <div class="date">{{notification.date}}</div>
                </div>
                <p class="content">{{notification.description}}</p>
              </div>
              <p-modal-notification :notification_id="notification.notification_id"></p-modal-notification>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="PERSONAL" name="second">
        <div class="notification-box-main" v-if="showInput && showInput2">
          <textarea class="form-control" v-model="txtNotif" id="inputReference2" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a style="color: white" class="btn btn-primary" @click="addNotif()">Submit</a>
          </div>
          <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()"
                    v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="notification in notifP" v-bind:key="notification.notification_id">
            <div class="notification-box">
              <div class="row">
                <div class="col-3 col-md-3 col-lg-1 col-sm-3">
                  <div style="display: flex; align-items: center;">
                    <div class="photo">
                      <md-avatar class="md-avatar-icon stylePicture">
                        <div class="logo">
                          <img :src="notification.photo"/>
                        </div>
                      </md-avatar>
                    </div>
                  </div>
                </div>
                <div class="col-9 col-md-9  col-lg-11 col-sm-9">
                  <div class="comments">
                    <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(notification)"
                            v-if="showInput" title="Responder">
                      <md-icon>replay</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(notification)"
                            v-if="showInput" title="Denunciar">
                      <md-icon>report</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(notification)"
                            v-if="canUserRemoveIt(notification)">
                      <md-icon>clear</md-icon>
                    </button>
                  </div>

                  <div class="credentials">
                    <div class="author">{{notification.name}}</div>
                    <div class="date">{{notification.date}}</div>
                  </div>
                  <p class="content">{{notification.description}}</p>
                </div>
              </div>
              <div class="msgType">
                <div class="msgType" v-if="notification.is_denunciation !== false">Denunciation&nbsp;
                  <div v-if="notification.notification_id_parent !== null">of your message on layer {{notification.layer_name}}</div>
                  <div v-else-if="notification.layer_id !== null">of your layer {{notification.layer_name}}</div>
                  <div v-else>of your message on your global notification</div>
                </div>

                <div v-else-if="notification.layer_id !== null && notification.type === 'myLayer'">
                  Comment on your layer {{notification.layer_name}}
                </div>

                <div class="msgType" v-else-if="notification.notification_id_parent !== null && notification.type === 'message'">
                  Reply of your message&nbsp;
                  <div v-if="notification.layer_id !== null">
                    on your layer {{notification.layer_name}}
                  </div>
                  <div v-else>
                    on your global notification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="FOLLOWING" name="thrid">
        <div class="notification-box-main" v-if="showInput && showInput2">
          <textarea class="form-control" v-model="txtNotif" id="inputReference3" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a style="color: white" class="btn btn-primary" @click="addNotif()">Submit</a>
          </div>
          <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearMsg()"
                    v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="notification in notifF" v-bind:key="notification.notification_id">
            <div class="notification-box">

              <div class="row">
                <div class="col-3 col-md-3 col-lg-1 col-sm-3">
                  <div style="display: flex; align-items: center;">
                    <div class="photo">
                      <md-avatar class="md-avatar-icon stylePicture">
                        <div class="logo">
                          <img :src="notification.photo"/>
                        </div>
                      </md-avatar>
                    </div>
                  </div>
                </div>

                <div class="col-9 col-md-9  col-lg-11 col-sm-9">
                  <p class="comments">
                    <button type="button" class="btn btn-outline-primary btn-sm add" @click="replyNot(notification)"
                            v-if="showInput" title="Responder">
                      <md-icon>replay</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-warning btn-sm add" @click="reportNot(notification)"
                            v-if="showInput" title="Denunciar">
                      <md-icon>report</md-icon>
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm add" @click="clearNot(notification)"
                            v-if="canUserRemoveIt(notification)" title="Excluir">
                      <md-icon>clear</md-icon>
                    </button>
                  </p>

                  <div class="credentials">
                    <div class="author">{{notification.name}}</div>
                    <div class="date">{{notification.date}}</div>
                  </div>
                  <p class="content">{{notification.description}}</p>
                </div>
              </div>
              <div class="msgType">
                <div class="msgType" v-if="notification.is_denunciation !== false">
                  Denunciation&nbsp;
                  <div v-if="notification.notification_id_parent !== null">
                    of some message on layer {{notification.layer_name}}
                  </div>
                  <div v-else-if="notification.layer_id !== null">
                    of layer {{notification.layer_name}}
                  </div>
                  <div v-else>
                    of your message on global notification
                  </div>
                </div>

                <div class="msgType" v-else-if="notification.notification_id_parent !== null">
                  Reply of some message&nbsp;
                  <div v-if="notification.layer_id !== null">
                    on layer {{notification.layer_name}}
                  </div>
                  <div v-else>
                    on global notification
                  </div>
                </div>
                <div v-else>
                  Comment on layer {{notification.layer_name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import DashLayout from '@/views/layouts/dashboard'
  import Api from '@/middleware/ApiVGI'
  import { mapState } from 'vuex'
  import ModalNotification from '@/views/components/dashboard/ModalNotification'
  import ImgPerson from '@/views/assets/images/icon_person.png'
  import "element-ui/lib/theme-chalk/tabs.css"

  export default {
    name: "Notifications",
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications'])
    },
    props: ['showInput'],
    data () {
      return {
        activeName: 'first',
        notifications: [],
        notifG: [],               //Geral
        notifP: [],               //Personal
        notifF: [],               //Following
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
    mounted() {
      if (this.user !== null)
        this.userId = this.user.user_id

      this.updateNotif()
    },
    methods: {
      canUserRemoveIt(notification) {
        return this.userId !== null && (this.userId === notification.user_id_creator || this.user.is_the_admin)
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
      handleClick(tab, event) {
        // console.log(tab, event);
      },
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
          vm.notifP.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
          })
          vm.notifF.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
          })
        }, x);
      },
      async updateNotif() {
        const vm = this
        this.notifP = []
        this.notifF = []
        try {
          let notifications = await Api().get('/api/notification/?layer_id=NULL&keyword_id=NULL&notification_id_parent=NULL')
          let notifG = await notifications.data.features.map(async notification => {

            let userInfo = await Api().get('/api/user/?user_id=' + notification.properties.user_id_creator)
            return {
              'description': notification.properties.description,
              'name': userInfo.data.features[0].properties.name,
              'photo': userInfo.data.features[0].properties.picture === '' ? ImgPerson : userInfo.data.features[0].properties.picture,
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

          Promise.all(notifG).then(notifUpdated => {
            vm.notifG = notifUpdated.reverse().sort(function (a, b) {
              //return b.notification_id - a.notification_id
              return new Date(b.date) - new Date(a.date)
            });
          })
        } catch (error) {
          //console.log(error)
        }

        Api().get('/api/notification/?user_id_creator=' + vm.user.user_id).then(function (userNotifications) {
          userNotifications.data.features.forEach(userNotification => {
            Api().get('/api/notification/?notification_id_parent=' + userNotification.properties.notification_id).then(function (notifications) {
              notifications.data.features.forEach(notification => {
                Api().get('/api/user/?user_id=' + notification.properties.user_id_creator).then(function (user) {
                  if (notification.properties.layer_id === null) {
                    vm.notifP.push(
                      {
                        'description': notification.properties.description,
                        'name': user.data.features[0].properties.name,
                        'photo': user.data.features[0].properties.picture === '' ? ImgPerson : user.data.features[0].properties.picture,
                        'date': notification.properties.created_at,
                        'type': 'message',
                        'notification_id': notification.properties.notification_id,
                        'user_id_creator': notification.properties.user_id_creator,
                        'is_denunciation': notification.properties.is_denunciation,
                        'keyword_id': notification.properties.keyword_id,
                        'layer_id': notification.properties.layer_id,
                        'notification_id_parent': notification.properties.notification_id_parent,
                        'layer_name': null
                      })
                    vm.orderNotification(50)
                  } else {
                    Api().get('/api/layer/?layer_id=' + notification.properties.layer_id).then(function (layer) {
                      vm.notifP.push(
                        {
                          'description': notification.properties.description,
                          'name': user.data.features[0].properties.name,
                          'photo': user.data.features[0].properties.picture === '' ? ImgPerson : user.data.features[0].properties.picture,
                          'date': notification.properties.created_at,
                          'type': 'message',
                          'notification_id': notification.properties.notification_id,
                          'user_id_creator': notification.properties.user_id_creator,
                          'is_denunciation': notification.properties.is_denunciation,
                          'keyword_id': notification.properties.keyword_id,
                          'layer_id': notification.properties.layer_id,
                          'notification_id_parent': notification.properties.notification_id_parent,
                          'layer_name': layer.data.features[0].properties.name
                        })
                      vm.orderNotification(50)
                    })
                  }
                })
              })
            })
          })
        })

        Api().get('/api/user_layer/?user_id=' + vm.user.user_id).then(function (userLayers) {
          userLayers.data.features.forEach(userLayer => {
            Api().get('/api/notification/?layer_id=' + userLayer.properties.layer_id).then(function (notifications) {
              notifications.data.features.forEach(notification => {
                Api().get('/api/user/?user_id=' + notification.properties.user_id_creator).then(function (user) {
                  Api().get('/api/layer/?layer_id=' + notification.properties.layer_id).then(function (layer) {
                    vm.notifP.push(
                      {
                        'description': notification.properties.description,
                        'name': user.data.features[0].properties.name,
                        'photo': user.data.features[0].properties.picture === '' ? ImgPerson : user.data.features[0].properties.picture,
                        'date': notification.properties.created_at,
                        'type': 'myLayer',
                        'notification_id': notification.properties.notification_id,
                        'user_id_creator': notification.properties.user_id_creator,
                        'is_denunciation': notification.properties.is_denunciation,
                        'keyword_id': notification.properties.keyword_id,
                        'layer_id': notification.properties.layer_id,
                        'notification_id_parent': notification.properties.notification_id_parent,
                        'layer_name': layer.data.features[0].properties.name
                      })
                    vm.orderNotification(50)
                  })
                })
              })
            })
          })
        })

        Api().get('/api/layer_follower/?user_id=' + vm.user.user_id).then(function (userLayers) {
          userLayers.data.features.forEach(userLayer => {
            Api().get('/api/notification/?layer_id=' + userLayer.properties.layer_id).then(function (notifications) {
              notifications.data.features.forEach(notification => {
                Api().get('/api/user/?user_id=' + notification.properties.user_id_creator).then(function (user) {
                  Api().get('/api/layer/?layer_id=' + notification.properties.layer_id).then(function (layer) {
                    vm.notifF.push(
                      {
                        'description': notification.properties.description,
                        'name': user.data.features[0].properties.name,
                        'photo': user.data.features[0].properties.picture === '' ? ImgPerson : user.data.features[0].properties.picture,
                        'date': notification.properties.created_at,
                        'type': 'general',
                        'notification_id': notification.properties.notification_id,
                        'user_id_creator': notification.properties.user_id_creator,
                        'is_denunciation': notification.properties.is_denunciation,
                        'keyword_id': notification.properties.keyword_id,
                        'layer_id': notification.properties.layer_id,
                        'notification_id_parent': notification.properties.notification_id_parent,
                        'layer_name': layer.data.features[0].properties.name
                      })
                    vm.orderNotification(50)
                  })
                })
              })
            })
          })
        })

      }
    },
    components: {
      "p-dash-layout": DashLayout,
      "p-modal-notification": ModalNotification
    },
  }
</script>

<style lang="sass" scoped>
  .notification-box-main
    margin: 10px
    background: #ffffff
    border-radius: 20px


  .notification-box
    margin: 10px
    background: #E6E6E6
    padding: 20px
    border-radius: 10px

    .photo
      width: 40px
      padding-top: 20px
      text-align: center
      border-radius: 50%

    .credentials
      display: inline-block
      margin: 0 0 0 0px

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
      margin-top: 10px

    .comments
      width: 100%
      padding-right: 20px
      position: absolute
      text-align: right
      color: #ff6107
      cursor: pointer

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
    color: #4D4D4D


  .stylePicture
    width: 50px
    height: 50px


  .el-tabs__item.is-active
    color: #ff6107

  .el-tabs__item:hover
    color: #ff6107
    cursor: pointer
</style>
