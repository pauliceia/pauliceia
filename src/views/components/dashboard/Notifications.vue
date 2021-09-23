<template>
  <div class="body">

    <el-tabs v-model="activated_tab">

      <el-tab-pane label="GENERAL" name="first" class="">

        <div class="notification-box-main" v-if="showInput">
          <textarea class="form-control" v-model="description" id="inputReference" rows="3"></textarea>
          <br>
          <div style="float: right">
            <a class="btn btn-dark" @click="addNotification()"
               style="color: white; background-color: #ff6107; border-color: #ff6107">
              Submit
            </a>
          </div>
          <p style="left: 0px; display: flex">
            {{ txtReply }}
            &nbsp;&nbsp;&nbsp;
            <button type="button" v-if="txtReply !== null" @click="cleanMessage()"
                    class="btn btn-outline-danger btn-sm add">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>

        <div class="nofitication">
          <div v-for="notification in notifG" v-bind:key="notification.id">
            <div class="row notification-box">
              <div class="col-4 col-sm-4 col-md-3 col-lg-1">
                <div style="display: flex; align-items: center;">
                  <div class="photo">
                    <md-avatar class="md-avatar-icon stylePicture">
                      <img :src="notification.user_picture"/>
                    </md-avatar>
                  </div>
                </div>
              </div>
              <div class="col-8 col-sm-8 col-md-9 col-lg-11">
                <!-- buttons -->
                <div class="comments">
                  <button type="button" v-if="showInput" @click="replyNotification(notification)"
                          title="Responder" class="btn btn-outline-primary btn-sm add">
                    <md-icon>replay</md-icon>
                  </button>
                  <button type="button" v-if="showInput" @click="reportNotification(notification)"
                          title="Denunciar" class="btn btn-outline-warning btn-sm add">
                    <md-icon>report</md-icon>
                  </button>
                  <button type="button" v-if="canUserRemoveIt(notification)" @click="removeNotification(notification)"
                          title="Excluir" class="btn btn-outline-danger btn-sm add">
                    <md-icon>clear</md-icon>
                  </button>
                </div>
                <div class="credentials">
                  <div class="author">{{ notification.user_name }}</div>
                  <div class="date">{{ notification.created_at }}</div>
                </div>
                <p class="content">{{ notification.description }}</p>
              </div>
              <p-modal-notification :master_notification="notification"></p-modal-notification>
            </div>
          </div>
        </div>

      </el-tab-pane>

      <el-tab-pane label="PERSONAL" name="second">
        <div class="notification-box-main" v-if="showInput && showInput2">
          <textarea class="form-control" v-model="description" id="inputReference2" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a style="color: white" class="btn btn-primary" @click="addNotification()">
              Submit
            </a>
          </div>
          <p style="left: 0px; display: flex">
            {{txtReply}} &nbsp;&nbsp;&nbsp;
            <button type="button" v-if="txtReply !== null" @click="cleanMessage()"
                    class="btn btn-outline-danger btn-sm add">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="notification in notifP" v-bind:key="notification.id">
            <div class="notification-box">
              <div class="row">
                <div class="col-4 col-sm-4 col-md-3 col-lg-1">
                  <div style="display: flex; align-items: center;">
                    <div class="photo">
                      <md-avatar class="md-avatar-icon stylePicture">
                        <img :src="notification.user_picture"/>
                      </md-avatar>
                    </div>
                  </div>
                </div>
                <div class="col-8 col-sm-8 col-md-9 col-lg-11">
                  <div class="comments">
                    <button type="button" v-if="showInput" @click="replyNotification(notification)"
                            title="Responder" class="btn btn-outline-primary btn-sm add">
                      <md-icon>replay</md-icon>
                    </button>
                    <button type="button" v-if="showInput" @click="reportNotification(notification)"
                            title="Denunciar" class="btn btn-outline-warning btn-sm add">
                      <md-icon>report</md-icon>
                    </button>
                    <button v-if="canUserRemoveIt(notification)" @click="removeNotification(notification)"
                            type="button" class="btn btn-outline-danger btn-sm add">
                      <md-icon>clear</md-icon>
                    </button>
                  </div>

                  <div class="credentials">
                    <div class="author">{{ notification.user_name }}</div>
                    <div class="date">{{ notification.created_at }}</div>
                  </div>
                  <p class="content">{{ notification.description }}</p>
                </div>
              </div>
              <div class="msgType">
                <div class="msgType" v-if="notification.is_denunciation !== false">
                  Denunciation&nbsp;
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
          <textarea class="form-control" v-model="description" id="inputReference3" rows="3"></textarea>
          <br>
          <div style="right: 30px; position: absolute">
            <a style="color: white" class="btn btn-primary" @click="addNotification()">
              Submit
            </a>
          </div>
          <p style="left: 0px; display: flex">{{txtReply}}&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm add" @click="cleanMessage()"
                    v-if="txtReply !== null">
              <md-icon>clear</md-icon>
            </button>
          </p>
          <br>
        </div>
        <div class="nofitication">
          <div v-for="notification in notifF" v-bind:key="notification.id">
            <div class="notification-box">
              <div class="row">
                <div class="col-4 col-sm-4 col-md-3 col-lg-1">
                  <div style="display: flex; align-items: center;">
                    <div class="photo">
                      <md-avatar class="md-avatar-icon stylePicture">
                        <img :src="notification.user_picture"/>
                      </md-avatar>
                    </div>
                  </div>
                </div>
                <div class="col-8 col-sm-8 col-md-9 col-lg-11">
                  <p class="comments">
                    <button type="button" v-if="showInput" @click="replyNotification(notification)"
                            title="Responder" class="btn btn-outline-primary btn-sm add">
                      <md-icon>replay</md-icon>
                    </button>
                    <button type="button" v-if="showInput" @click="reportNotification(notification)"
                            title="Denunciar" class="btn btn-outline-warning btn-sm add">
                      <md-icon>report</md-icon>
                    </button>
                    <button type="button" v-if="canUserRemoveIt(notification)" @click="removeNotification(notification)"
                            title="Excluir" class="btn btn-outline-danger btn-sm add">
                      <md-icon>clear</md-icon>
                    </button>
                  </p>

                  <div class="credentials">
                    <div class="author">{{notification.user_name}}</div>
                    <div class="date">{{notification.created_at}}</div>
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
import { mapState } from 'vuex'
import "element-ui/lib/theme-chalk/tabs.css"

import Api from '@/middleware/ApiVGI'
import DashLayout from '@/views/layouts/dashboard'
import iconPerson from '@/views/assets/images/icon_person.png'
import ModalNotification from '@/views/components/dashboard/ModalNotification'

export default {
  name: "Notifications",
  components: {
    "p-dash-layout": DashLayout,
    "p-modal-notification": ModalNotification
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('map', ['boxNotifications'])
  },
  props: ['showInput'],
  data () {
    return {
      // default `first` tab is activated
      activated_tab: 'first',
      notifG: [],            // General
      notifP: [],            // Personal
      notifF: [],            // Following
      description: null,
      notification_id_parent: null,
      is_denunciation: false,
      layer_id: null,
      txtReply: null,
      showInput2: false
    }
  },
  mounted() {
    this.updateNotification()
  },
  methods: {
    cleanMessage() {
      this.txtReply = null
      this.notification_id_parent = null
      this.layer_id = null
      this.is_denunciation = false
      this.showInput2 = false
    },
    replyNotification(notification) {
      this.showInput2 = true
      this.txtReply = 'Reply to ' + notification.user_name
      this.notification_id_parent = notification.id
      this.layer_id = notification.layer_id
    },
    reportNotification(notification) {
      this.showInput2 = true
      this.is_denunciation = true
      this.txtReply = 'Denunciation to ' + notification.user_name
      this.notification_id_parent = notification.id
      this.layer_id = notification.layer_id
    },
    addNotification() {
      if (this.description === null || this.description === '') {
        this.$message.error("Notification description cannot be empty!")
        return
      }

      this.__openFullLoading()

      let notification = {
        'properties': {
          'id': -1,
          'is_denunciation': this.is_denunciation,
          'keyword_id': null,
          'notification_id_parent': this.notification_id_parent,
          'layer_id': this.layer_id,
          'description': this.description,
        },
        'type': 'Notification'
      }

      Api().post('/api/notification/create', notification).then(() => {
        this.description = null
        this.cleanMessage()
        this.$message.success("The notification was added successfully!")
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.updateNotification()
        this.__closeFullLoading()
      })
    },
    updateNotification() {
      // if a user is not logged in the portal, then do not update the notifications
      if (this.user === null)
        return

      this.notifG = []
      this.notifP = []
      this.notifF = []

      // get general notifications
      Api().get(
        '/api/notification/?layer_id=NULL&keyword_id=NULL&notification_id_parent=NULL'
      ).then(response => {
        this.notifG = response.data.features.map(n => {
          // n - notification
          n.properties.user_picture = n.properties.user_picture === '' ?
                                        iconPerson : n.properties.user_picture
          n.properties['type'] = 'general'
          return n.properties
        })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })

      // get personal notifications related to current user
      Api().get('/api/notification/?user_id_creator=' + this.user.id).then(userNotifications => {
        userNotifications.data.features.forEach(userNotification => {

          Api().get(
            '/api/notification/?notification_id_parent=' + userNotification.properties.id
          ).then(notifications => {
            notifications.data.features.forEach(n => {
              // n - notification
              n.properties.user_picture = n.properties.user_picture === '' ?
                                            iconPerson : n.properties.user_picture

              n.properties['type'] = 'message'
              this.notifP.push(n.properties)
            })
          }).catch(cause => {
            this.__showErrorMessages(cause)
          })

        })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })

      // get personal notifications related to current user layers
      Api().get('/api/user_layer/?user_id=' + this.user.id).then(userLayers => {
        userLayers.data.features.forEach(userLayer => {

          Api().get('/api/notification/?layer_id=' + userLayer.properties.layer_id).then(notifications => {
            notifications.data.features.forEach(n => {
              n.properties.user_picture = n.properties.user_picture === '' ?
                                            iconPerson : n.properties.user_picture

              n.properties['type'] = 'myLayer'
              this.notifP.push(n.properties)
            })
          }).catch(cause => {
            this.__showErrorMessages(cause)
          })

        })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })

      // get following notifications
      Api().get('/api/layer_follower/?user_id=' + this.user.id).then(userLayers => {
        userLayers.data.features.forEach(userLayer => {

          Api().get('/api/notification/?layer_id=' + userLayer.properties.layer_id).then(notifications => {
            this.notifF = notifications.data.features.map(n => {
              n.properties.user_picture = n.properties.user_picture === '' ?
                                            iconPerson : n.properties.user_picture

              n.properties['type'] = 'general'
              return n.properties
            })
          }).catch(cause => {
            this.__showErrorMessages(cause)
          })

        })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })
    },
    canUserRemoveIt(notification) {
      return this.user !== null &&
              (this.user.id === notification.user_id_creator || this.user.is_the_admin)
    },
    removeNotification(notification) {
      this.__openFullLoading()

      Api().delete(
        '/api/notification/?notification_id=' + notification.id,
      ).then(() => {
        this.$message.success("The notification was removed successfully!")
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.updateNotification()
        this.__closeFullLoading()
      })
    },
    __errorMessage(msg){
      this.$message.error({
        message: msg,
        center: true,
        duration: 10000,
        showClose: true
      })
    },
    __showErrorMessages(cause) {
      if (cause.response !== undefined && 'data' in cause.response)
        this.__errorMessage(cause.response.data.toString())
      else
        this.__errorMessage(cause.toString())

      if (cause.response !== undefined && cause.response.status >= 500)
        this.__errorMessage("Internal error. Please, contact the administrator.")
    },
    __openFullLoading(){
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    __closeFullLoading(){
      if (this.loading !== null)
        this.loading.close()
    }
  }
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
        color: #595959
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
