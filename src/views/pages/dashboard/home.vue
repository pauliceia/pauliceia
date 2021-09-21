<template>
  <p-dash-layout :title="$t('dashboard.home.dashboard')">
    <div class="row">

      <!-- notifications -->
      <div class="col-sm-8">
        <div class="card ">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.home.notifications') }}</h6>
            <br>
            <p-notifications showInput="true"></p-notifications>
          </div>
        </div>
      </div>

      <!-- list of layers -->
      <div class="col-sm-4">

        <!-- list of my layers -->
        <div class="card ">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.home.myLayers') }}</h6>
            <br>
            <div class="card-text">
              <div class="row" v-for="layer in myLayers" v-bind:key="layer.id">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" @click="editLayer(layer.id)"
                          class="btn btn-outline-dark btn-sm add">
                    <md-icon>create</md-icon>
                  </button>
                </div>
                <div class="col-sm-2">
                  <button type="button" @click="deleteLayer(layer.id)"
                          class="btn btn-outline-danger btn-sm add2">
                    <md-icon>clear</md-icon>
                  </button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>

        <!-- list of shared layers -->
        <div class="card " style="margin-top: 20px">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.home.sharedLayers') }}</h6>
            <br>
            <div class="card-text">
              <div class="row" v-for="layer in sharedLayers" v-bind:key="layer.id">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" @click="editLayer(layer.id)"
                          class="btn btn-outline-dark btn-sm add">
                    <md-icon>create</md-icon>
                  </button>
                </div>
                <div class="col-sm-2">
                  <!-- just admin user can delete all layers -->
                  <button type="button" v-if="user.is_the_admin" @click="deleteLayer(layer.id)"
                          class="btn btn-outline-danger btn-sm add2">
                    <md-icon>clear</md-icon>
                  </button>
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
import { mapState } from 'vuex'

import Api from '@/middleware/ApiVGI'
import DashLayout from '@/views/layouts/dashboard'
import Notifications from '@/views/components/dashboard/Notifications'

export default {
  components: {
    "p-dash-layout": DashLayout,
    'p-notifications': Notifications
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('map', ['boxNotifications'])
  },
  data () {
    return {
      myLayers: [],
      sharedLayers: []
    }
  },
  mounted() {
    this.updateLayers()
  },
  methods: {
    editLayer(id){
      this.$router.push({name: 'EditLayer', params: {layer_id: id}})
    },
    deleteLayer(layer_id){
      this.__openFullLoading()

      Api().delete('/api/layer/' + layer_id).then(() => {
        this.$message.success("A camada foi excluída com sucesso!")
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.updateLayers()
        this.__closeFullLoading()
      })
    },
    updateLayers(){
      this.sharedLayers = []
      this.myLayers = []

      Api().get('/api/user_layer/?user_id=' + this.user.id).then(response => {
        response.data.features.filter(user_layer => {

          Api().get('/api/layer/?id=' + user_layer.properties.layer_id).then(response2 => {
            if (user_layer.properties.is_the_creator)
              this.myLayers.push(response2.data.features[0].properties)
            else
              this.sharedLayers.push(response2.data.features[0].properties)
          })
        })
      })

      // this.__orderLayers(1000)
    },
    __errorMessage(msg){
      this.$message.error({
        message: msg,
        center: true,
        duration: 10000,
        showClose: true,
      })
    },
    __showErrorMessages(cause) {
      if ('data' in cause.response)
        this.__errorMessage(cause.response.data.toString())
      else
        this.__errorMessage(cause.toString())

      if (cause.response.status >= 500)
        this.__errorMessage("Problem when creating a resource. Please, contact the administrator.")
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
    // __orderLayers(x){
    //   setTimeout(_ => {
    //     this.myLayers.sort((a, b) => {
    //       if (a.name.toLowerCase() > b.name.toLowerCase())
    //         return 1

    //       if (a.name.toLowerCase() < b.name.toLowerCase())
    //         return -1

    //       // a must be equal to b
    //       return 0
    //     })
    //     this.sharedLayers.sort((a, b) => {
    //       if (a.name.toLowerCase() > b.name.toLowerCase())
    //         return 1

    //       if (a.name.toLowerCase() < b.name.toLowerCase())
    //         return -1

    //       // a must be equal to b
    //       return 0
    //     })
    //   }, x)
    // }
  }
}
</script>

<style lang="sass" scoped>
.add
  top: 0px
  display: inline-block
  padding: 0px
  margin: 0px
  border: none
  float: right
  border-radius: 20px

.add2
  top: 0px
  float: right
  display: inline-block
  padding: 0px
  margin-left: 10px
  color: #ff6107
  border-color: #ff6107
  border-radius: 20px
</style>
