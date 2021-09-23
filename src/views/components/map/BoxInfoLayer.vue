<template>
  <div class="box-info" v-if="idInfoLayer !== null && layer !== null">

    <header class="header">
      <h1>{{ layer.name }}</h1>

      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>

      <!-- just show follow/unfollow buttons if user is logged in the portal -->
      <el-tooltip v-if="user !== null && is_following" effect="dark" placement="top-end"
                  :content="$t('map.viewInfo.btnUnFollow')">

        <button class="btn" @click="unfollowLayer()">
          <md-icon>person_add_disabled</md-icon>
        </button>
      </el-tooltip>

      <el-tooltip v-if="user !== null && !is_following" effect="dark" placement="top-end"
                  :content="$t('map.viewInfo.btnFollow')">

        <button class="btn" @click="followLayer()">
          <md-icon>person_add</md-icon>
        </button>
      </el-tooltip>
    </header>

    <div class="body">
      <ul class="description">
        <li><b> {{ $t('map.viewInfo.lbKeywods') }}:</b>
          <el-tag v-for="keyword in layer.keywords" :key="'k' + keyword.id"
                  style="margin-left: 5px">
            {{ keyword.name }}
          </el-tag>
        </li>
        <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b> {{ layer.description }} </li>
        <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ layer.date }}</li>
        <li><b>{{ $t('map.viewInfo.lbAuthors') }}:</b>
          <span v-for="collaborator in layer.collaborators" :key="'c' + collaborator.id">
            {{ collaborator.name !== null ? collaborator.name : collaborator.username }};
          </span>
        </li>
        <li>
          <b>{{ $t('map.viewInfo.lbReferences') }}:</b>
          <ul>
            <li v-for="reference in layer.references" :key="'r' + reference.id">
              {{ reference.description }};
            </li>
          </ul>
        </li>
      </ul>

      <div class="nofitication">
        <md-list-item>
          <md-icon>notifications</md-icon>
          <p class="md-list-item-text">{{ $t('map.viewInfo.lbNotifications') }}:</p>
        </md-list-item>

        <!-- just show box to write a notification if user is logged in the portal -->
        <div v-if="user !== null" class="notification-box">
          <textarea v-model="description" class="form-control" id="inputReference" rows="3"></textarea>
          <br>

          <div style="right: 125px; position: absolute">
            <a @click="addNotification()" class="btn btn-primary" style="color: white">
              Submit
            </a>
          </div>
          <div style="right: 60px; position: absolute">
            <a @click="addReport()" class="btn btn-warning">
              <md-icon>report</md-icon>
            </a>
          </div>

          <p style="left: 0px; display: flex">
            {{ txtReply }}
            &nbsp;&nbsp;&nbsp;
            <button type="button" v-if="txtReply !== null" @click="cleanMessages()"
                    class="btn btn-outline-danger btn-sm add">
              <md-icon>clear</md-icon>
            </button>
          </p>
        </div>

        <div v-for="notification in notifG" :key="notification.id">
          <!-- if notification is a denunciation, then change the box color -->
          <div class="notification-box"
              :style="[notification.is_denunciation ? {'background': 'rgba(255, 255, 0, 0.70)'} : {}]">
            <div style="display: flex; align-items: center;">
              <div class="photo">
                <md-avatar class="md-avatar-icon stylePicture">
                  <img :src="notification.user_picture"/>
                </md-avatar>
              </div>
              <div class="credentials">
                <p class="author">{{ notification.user_name }}</p>
                <p class="date">{{ notification.created_at }}</p>
              </div>
            </div>

            <p class="content">{{ notification.description }}</p>

            <!-- just show buttons if user is logged in the portal -->
            <p v-if="user !== null" class="comments">
              <button type="button" @click="replyNotification(notification)"
                      class="btn btn-outline-primary btn-sm add">
                <md-icon>replay</md-icon>
              </button>
              <button type="button" @click="reportNotification(notification)"
                      class="btn btn-outline-warning btn-sm add">
                <md-icon>report</md-icon>
              </button>
              <button type="button" v-if="canUserRemoveIt(notification)"
                      @click="removeNotification(notification)"
                      class="btn btn-outline-danger btn-sm add">
                <md-icon>clear</md-icon>
              </button>
            </p>
            <div class="msgType">
              <div v-if="notification.is_denunciation">
                Denunciation&nbsp;
              </div>
              <div v-else-if="notification.notification_id_parent !== null">
                Reply&nbsp;
              </div>
              <div v-if="notification.parentNotificationUserName === null && (notification.is_denunciation !== false || notification.notification_id_parent !== null)">
                of Layer
              </div>
              <div v-if="notification.parentNotificationUserName !== null">
                of {{notification.parentNotificationUserName}}'s message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import Api from '@/middleware/ApiVGI'
import iconPerson from '@/views/assets/images/icon_person.png'
import Map from '@/middleware/Map'

export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('map', ['idInfoLayer'])
  },
  watch: {
    idInfoLayer(layer_id) {
      if (layer_id !== null) {
        this.layer_id = layer_id
        this.is_following = false
        this.notifG = []
        this.__getInfos()
        this.updateNotification()
        this.__changeFollow()
      }
    }
  },
  data() {
    return {
      layer_id: null,
      layer: null,
      description: null,
      keyword_id: null,
      notification_id_parent: null,
      is_denunciation: false,
      is_following: false,
      notifG: [],
      txtReply: null
    }
  },
  methods: {
    cleanMessages(){
      this.txtReply = null
      this.keyword_id = null
      this.is_denunciation = false
      this.notification_id_parent = null
    },
    replyNotification(notification){
      this.txtReply = 'Reply to ' + notification.user_name
      this.notification_id_parent = notification.id
    },
    reportNotification(notification){
      this.is_denunciation = true
      this.txtReply = 'Denunciation to ' + notification.user_name
      this.notification_id_parent = notification.id
    },
    addNotification(){
      if (this.description === null || this.description === '') {
        this.$message.error("Descrição não pode ser vazia!")
        return
      }
      if (this.is_denunciation && this.description.length < 5) {
        this.$message.error("Descrição da denúncia não pode ter menos do que 5 caracteres!")
        return
      }

      this.__openFullLoading()

      let notification = {
        'properties': {
          'description': this.description,
          'is_denunciation': this.is_denunciation,
          'layer_id': this.layer_id,
          'keyword_id': this.keyword_id,
          'notification_id_parent': this.notification_id_parent
        },
        'type': 'Notification'
      }

      Api().post('/api/notification/create', notification).then(() => {
        this.description = null
        this.cleanMessages()
        this.$message.success("The notification was added successfully!")
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.updateNotification()
        this.__closeFullLoading()
      })
    },
    addReport(){
      this.is_denunciation = true
      this.addNotification()
      this.is_denunciation = false
    },
    async updateNotification(){
      this.notifG = []

      Api().get('/api/notification/?layer_id=' + this.layer_id).then(async notifications => {
        notifications.data.features.forEach(async notification => {

          // add default user icon if user does not have picture
          notification.properties.user_picture = notification.properties.user_picture === '' ?
                                                  iconPerson : notification.properties.user_picture

          let parentNotificationUserName = null

          if (notification.properties.notification_id_parent !== null) {
            let notificationParent = await Api().get(
              '/api/notification/?id=' + notification.properties.notification_id_parent
            )
            let parentNotificationUser = await Api().get(
              '/api/user/?id=' + notificationParent.data.features[0].properties.user_id_creator
            )
            parentNotificationUserName = parentNotificationUser.data.features[0].properties.name
          }

          this.notifG.push({
            'type': 'general',
            ...notification.properties,
            'parentNotificationUserName': parentNotificationUserName
          })

        })
      })
    },
    canUserRemoveIt(notification) {
      return this.user !== null &&
              (this.user.id === notification.user_id_creator || this.user.is_the_admin)
    },
    removeNotification(notification){
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
    closeBox() {
      this.$store.dispatch('map/setIdInfoLayer', null)
    },
    followLayer() {
      this.__openFullLoading()

      let layer_follower = {
        'properties': { 'layer_id': this.layer_id },
        'type': 'LayerFollower'
      }

      Api().post('/api/layer_follower/create', layer_follower).then(() => {
        this.is_following = true
        this.$message.success("Você está seguindo a camada agora.")
      }).catch(cause => {
        // default value
        let msg = cause.toString()

        if (cause.response.status === 409)
          msg = "You can't follow the layer, because you are a collaborator or owner of the layer."
        // else if (cause.response.status === 406)
        //   msg = "You can't follow a layer, because you already follow it."

        this.$message.error(msg)
      }).finally(() => {
        this.__closeFullLoading()
      })
    },
    unfollowLayer() {
      this.__openFullLoading()

      Api().delete(
        '/api/layer_follower/?layer_id=' + this.layer_id + '&user_id=' + this.user.id
      ).then(() => {
        this.is_following = false
        this.$message.success("Você não está mais seguindo a camada.")
      }).catch(cause => {
        // default value
        let msg = cause.toString()

        if (cause.response.status === 409)
          msg = "You can't follow a layer, because you are a collaborator or owner of it."
        else if (cause.response.status === 406)
          msg = "You can't follow a layer, because you already follow it."

        this.$message.error(msg)
      }).finally(() => {
        this.__closeFullLoading()
      })
    },
    __changeFollow(){
      // if user is not logged in the portal, then do not update the flag
      if (this.user === null)
        return

      Api().get('/api/layer_follower/?user_id=' + this.user.id).then(response => {
        response.data.features.forEach(e => {
          if (e.properties.layer_id === this.layer_id)
            this.is_following = true
        })
      })
    },
    async __getInfos() {
      let layers = await Map.getLayers('id=' + this.layer_id)
      this.layer = layers.data.features[0].properties

      this.layer.date = this.__fixDateFormat(this.layer.created_at)
    },
    __fixDateFormat(date) {
      let dateParsed = date.split('-')
      if (this.$i18n.locale() == "pt") {
        return dateParsed[2].split(" ")[0] + "/" + dateParsed[1] + "/" + dateParsed[0]
      } else {
        return dateParsed[1] + "/" + dateParsed[2].split(" ")[0] + "/" + dateParsed[0]
      }
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
.box-info
    position: absolute
    top: 20px
    right: 60px
    border-radius: 10px
    overflow: auto
    padding: 10px
    background: rgba(#FFF, 0.7)
    z-index: 1
    max-width: 50%
    min-width: 40%
    max-height: 80%

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
                background: rgba(0, 0, 0, 0.1)
                padding: 20px
                border-radius: 20px

                .photo
                    text-align: center
                    border-radius: 50%

                    .stylePicture
                        width: 50px
                        height: 50px

                .credentials
                    display: inline-block
                    margin: 0 0 0 10px
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

    .msgType
      display: flex
</style>
