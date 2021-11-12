<template>
  <p-dash-layout title="Denunciations">
    <div class="row">
      <div class="col-sm-4">

        <!-- Denounced Layers -->
        <div class="card">
          <div class="card-header text-center">
            Denounced Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in denouncedLayers" :key="layer.id">
                <div class="col-sm-8">{{ layer.name }} ({{ layer._denunciations.length }})</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add"
                          @click="selectLayer(layer)">
                    <md-icon>visibility</md-icon>
                  </button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add"
                          @click="deleteLayer(layer)">
                    <md-icon>clear</md-icon>
                  </button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>

        <!-- Denounced Comments -->
        <div class="card">
          <div class="card-header text-center">
            Denounced Comments
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="comment in denouncedComments" :key="comment.id">
                <div class="col-sm-8">{{ comment.user_name }} ({{ comment._denunciations.length }})</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add"
                          @click="selectComment(comment)">
                    <md-icon>visibility</md-icon>
                  </button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add"
                          @click="deleteComment(comment)">
                    <md-icon>clear</md-icon>
                  </button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="col-sm-8">

        <!-- if a layer was selected -->
        <div class="card text-center" v-if="selectedLayer">
          <div class="card-header">
            Layer
            <ul class="description" >
              <li><b> {{ $t('map.viewInfo.lbTitle') }}:</b> {{ selectedLayer.name }}</li>
              <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b> {{ selectedLayer.description }} </li>
              <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ selectedLayer.created_at }}</li>
              <li><b> {{ $t('map.viewInfo.lbKeywods') }}:</b>
                <el-tag v-for="keyword in selectedLayer.keywords" :key="'k' + keyword.id"
                    style="margin-left: 5px">
                  {{ keyword.name }}
                </el-tag>
              </li>
              <li><b>{{ $t('map.viewInfo.lbAuthors') }}:</b>
                <span v-for="collaborator in selectedLayer.collaborators" :key="'c' + collaborator.id">
                  {{ collaborator.name !== null ? collaborator.name : collaborator.username }};
                </span>
              </li>
              <li><b>{{ $t('map.viewInfo.lbReferences') }}:</b>
                <span v-for="reference in selectedLayer.references" :key="'r' + reference.id">
                  {{ reference.description }};
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- if a comment was selected -->
        <div class="card text-center" v-if="selectedComment">
          <div class="card-header">
            Comment
            <ul class="description" >
              <li><b> USER NAME:</b> {{ selectedComment.user_name }}</li>
              <li><b>{{ $t('map.viewInfo.lbDescription') }}:</b> {{ selectedComment.description }}  </li>
              <li><b>{{ $t('map.viewInfo.lbDate') }}:</b> {{ selectedComment.created_at }}</li>
              <li><b>LOCATION:</b> {{ location }}</li>
            </ul>
          </div>
        </div>

        <!-- list of denunciations -->
        <div class="card">
          <div class="card-header">
            Denunciations
          </div>
          <div class="card-body">
            <div class="nofitication">
              <div v-for="denunciation in denunciations" :key="denunciation.id">
                <div class="notification-box">

                  <div style="display: flex; align-items: center;">
                    <div class="photo">
                      <md-avatar class="md-avatar-icon">
                        <img :src="denunciation.user_picture"/>
                      </md-avatar>
                    </div>
                    <div class="credentials">
                      <p class="author">{{ denunciation.user_name }}</p>
                      <p class="date">{{ denunciation.created_at }}</p>
                    </div>
                  </div>

                  <p class="content">{{ denunciation.description }}</p>
                  <p class="comments">
                    <button type="button" @click="removeDenunciation(denunciation)"
                            class="btn btn-outline-danger btn-sm add">
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
import Api from '@/middleware/ApiVGI'
import DashLayout from '@/views/layouts/dashboard'
import iconPerson from '@/views/assets/images/icon_person.png'

export default {
  name: "denunciations",
  components: {
    "p-dash-layout": DashLayout
  },
  data() {
    return {
      allLayers: [],
      allNotifications: [],
      denouncedLayers: [],
      denouncedComments: [],
      selectedLayer: null,
      selectedComment: null,
      denunciations: [],
      location: null,
      loading: null
    }
  },
  mounted() {
    this.getDenunciations()
  },
  methods: {
    cleanProperties(){
      this.selectedLayer = null
      this.selectedComment = null
      this.denunciations = []
      this.location = null
    },
    selectLayer(layer){
      this.__openFullLoading()

      this.selectedComment = null
      this.selectedLayer = layer
      this.denunciations = layer._denunciations

      this.__closeFullLoading()
    },
    deleteLayer(layer){
      this.__openFullLoading()

      Api().delete('/api/layer/' + layer.id).then(() => {
        this.cleanProperties()
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.getDenunciations()
        this.__closeFullLoading()
      })
    },
    selectComment(comment){
      this.__openFullLoading()

      this.selectedLayer = null
      this.selectedComment = comment
      this.denunciations = comment._denunciations

      if (this.selectedComment.layer_id !== null)
        this.location = 'Layer: ' + this.allLayers.filter(
          layer => layer.id === this.selectedComment.layer_id
        )[0].name
      else
        this.location = 'Global notification'

      this.__closeFullLoading()
    },
    deleteComment(comment){
      this.__openFullLoading()

      Api().delete('/api/notification/?id=' + comment.id).then(() => {
        this.cleanProperties()
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.getDenunciations()
        this.__closeFullLoading()
      })
    },
    getDenunciations(){
      // get denunciations by layers and comments

      // get denunciations by layers
      Api().get('/api/layer/').then(layers => {
        this.allLayers = layers.data.features.map(layer => layer.properties)

        Api().get(
          '/api/notification/?is_denunciation=True&notification_id_parent=NULL'
        ).then(denunciations => {
          this.denouncedLayers = denunciations.data.features.reduce((acc, denunciation) => {
            const layer_id = denunciation.properties.layer_id

            let layer = null
            if (acc[layer_id]) {
              // get existing layer
              layer = acc[layer_id]
            } else {
              // search layer for once
              layer = this.allLayers.filter(layer => layer.id === layer_id)[0]
              layer['_denunciations'] = []
            }

            denunciation = this.__fixNotificationObject(denunciation)

            // add new denunciation to layer
            layer['_denunciations'].push(denunciation.properties)

            return {...acc, [layer_id]: layer}
          }, {})
        })
      })

      // get denunciations by comments
      Api().get('/api/notification/').then(notifications => {
        this.allNotifications = notifications.data.features.map(notification => notification.properties)

        this.denouncedComments = notifications.data.features.filter( e => {
          // get just denunciations and not comments
          return e.properties.is_denunciation && e.properties.notification_id_parent !== null
        }).reduce((acc, denunciation) => {
          const comment_id = denunciation.properties.notification_id_parent;

          let comment = null
          if (acc[comment_id]) {
            // get existing comment
            comment = acc[comment_id]
          } else {
            // search comment for once
            comment = this.allNotifications.filter(comment => comment.id === comment_id)[0]
            comment['_denunciations'] = []
          }

          denunciation = this.__fixNotificationObject(denunciation)

          // add new denunciation to comment
          comment['_denunciations'].push(denunciation.properties)

          return {...acc, [comment_id]: comment}
        }, {})
      })
    },
    removeDenunciation(denunciation){
      this.__openFullLoading()

      Api().delete('/api/notification/?id=' + denunciation.id).then(() => {
        // remove item from the list manually, because component does not render automatically
        this.denunciations = this.denunciations.filter(d => d.id !== denunciation.id)
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.getDenunciations()
        this.__closeFullLoading()
      })
    },
    __fixNotificationObject(notification){
      // fix user picture
      notification.properties.user_picture = notification.properties.user_picture === '' ?
                                                iconPerson : notification.properties.user_picture
      return notification
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

<style lang="sass"  scoped>
.notification-box
  margin: 10px
  background: rgba(#000, 0.1)
  padding: 20px
  border-radius: 20px
  position: relative

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
