<template>
  <div>
    <el-button  @click="showModalNotification()">
      Show comments
    </el-button>

    <el-dialog title="Comments" :visible.sync="outerVisible" id="myModal"
               :append-to-body="true" class="mod">

      <div class="notification-box">
        <div style="display: flex; align-items: center;">
          <div class="photo">
            <md-avatar class="md-avatar-icon">
              <img :src="master_notification.user_picture"/>
            </md-avatar>
          </div>
          <div class="credentials">
            <p class="author">{{ master_notification.user_name }}</p>
            <p class="date">{{ master_notification.created_at }}</p>
          </div>
        </div>
        <p class="content">{{ master_notification.description }}</p>
      </div>

      <div class="notification-box2">
        <textarea class="form-control" v-model="description" id="inputReference" rows="3"></textarea>
        <div style="right: 30px; position: absolute; margin: 10px 0px;">
          <a class="btn btn-primary" @click="addComment()" style="color: white">
            Submit
          </a>
        </div>
        <br><br>
        <!-- <p style="left: 0px; display: flex">
          {{ txtReply }}
          &nbsp;&nbsp;&nbsp;
          <button type="button" v-if="txtReply !== null" @click="cleanMessage()"
                  class="btn btn-outline-danger btn-sm add">
            <md-icon>clear</md-icon>
          </button>
        </p>
        <br> -->
      </div>

      <div class="nofitication">
        <div v-for="comment in comments" :key="comment.id">
          <!-- if comment is a denunciation, then change the box color -->
          <div class="notification-box2"
               :style="[comment.is_denunciation ? {'background': 'rgba(255, 255, 0, 0.70)'} : {}]">
            <div style="display: flex; align-items: center;">
              <div class="photo">
                <md-avatar class="md-avatar-icon">
                  <img :src="comment.user_picture"/>
                </md-avatar>
              </div>
              <div class="credentials">
                <p class="author">{{ comment.user_name }}</p>
                <p class="date">{{ comment.created_at }}</p>
              </div>
            </div>

            <p class="content">{{ comment.description }}</p>
            <p class="content" v-if="comment.is_denunciation">
              This comment is a denunciation!
            </p>
            <p class="comments">
              <!-- <button type="button" @click="replyNotification(comment)"
                      class="btn btn-outline-primary btn-sm add" title="Responder">
                <md-icon>replay</md-icon>
              </button>
              <button type="button" @click="reportNotification(comment)"
                      class="btn btn-outline-warning btn-sm add" title="Denunciar">
                <md-icon>report</md-icon>
              </button> -->
              <button type="button" @click="removeComment(comment)"
                      class="btn btn-outline-danger btn-sm add" title="Excluir"
                      v-if="canUserRemoveIt(comment)">
                <md-icon>clear</md-icon>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModalNotification()">
          Close
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import Api from '@/middleware/ApiVGI'
import iconPerson from '@/views/assets/images/icon_person.png'

export default {
  name: "ModalNotification",
  props: ['master_notification'],
  components: {
    "modal": {
      template: '#modal-template'
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  data () {
    return {
      comments: [],
      description: null,
      outerVisible: false,
      is_denunciation: false,
      // txtReply: null,
      // layer_id: null,
      // showInput2: false
    }
  },
  mounted() {
    this.updateComments()
  },
  methods: {
    showModalNotification() {
      this.outerVisible = true
      this.updateComments()
    },
    closeModalNotification() {
      this.outerVisible = false
    },
    addComment() {
      if (this.description === null || this.description === '') {
        this.$message.error("Comment cannot be empty!")
        return
      }

      this.__openFullLoading()

      let comment = {
        'properties': {
          'id': -1,
          'description': this.description,
          'is_denunciation': this.is_denunciation,
          'notification_id_parent': this.master_notification.id,
          'keyword_id': null,
          'layer_id': null
        },
        'type': 'Notification'
      }

      Api().post('/api/notification/create', comment).then(() => {
        this.description = null
        // this.cleanMessage()
        this.$message.success("The comment was added successfully!")
      }).catch(cause => {
        this.__error_message(cause)
      }).finally(() => {
        this.updateComments()
        this.__closeFullLoading()
      })
    },
    updateComments() {
      this.comments = []

      // get all comments (i.e. sub notifications) from master notification
      Api().get(
        '/api/notification/?notification_id_parent=' + this.master_notification.id
      ).then(response => {
        this.comments = response.data.features.map(c => {
          // fix user picture to each comment
          c.properties.user_picture = c.properties.user_picture === '' ?
                                        iconPerson : c.properties.user_picture

          return c.properties
        })
      }).catch(cause => {
        this.__error_message(cause)
      })
    },
    canUserRemoveIt(comment) {
      return this.user !== null &&
              (this.user.id === comment.user_id_creator || this.user.is_the_admin)
    },
    removeComment(comment) {
      this.__openFullLoading()

      Api().delete(
        '/api/notification/?notification_id=' + comment.id,
      ).then(() => {
        this.$message.success("The comment was removed successfully!")
      }).catch(cause => {
        this.__error_message(cause)
      }).finally(() => {
        this.updateComments()
        this.__closeFullLoading()
      })
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
    },
    __error_message(cause){
      this.$message.error(cause.response.data.toString())
    },
    // cleanMessage() {
    //   // this.txtReply = null
    //   this.is_denunciation = false
    //   // this.layer_id = null
    //   // this.showInput2 = false
    // },
    // replyNotification(notification) {
    //   this.showInput2 = true
    //   this.txtReply = 'Reply to ' + notification.user_name
    //   this.layer_id = notification.layer_id
    // },
    // reportNotification(notification) {
    //   this.showInput2 = true
    //   this.txtReply = 'Denunciation to ' + notification.user_name
    //   this.is_denunciation = true
    //   this.layer_id = notification.layer_id
    // },
  }
}
</script>

<style lang="sass" scoped>
  .el-button:focus, .el-button:hover
    color: #ff6107
    border-color: #ff6107
    background-color: #fff

  .notification-box2
    margin: 10px
    margin-right: 60px
    background: rgba(183, 200, 255, 0.70)
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
    width: 40px
    text-align: center
    border-radius: 50%

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
