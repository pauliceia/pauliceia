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

      <!-- layers lists -->
      <div class="col-sm-4">

        <!-- my layers list -->
        <div class="card ">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.home.myLayers') }}</h6>
            <br>
            <div class="card-text">
              <div class="row" v-for="layer in myLayers" v-bind:key="layer.layer_id">
                <div class="col-sm-7">{{ layer.name }}</div>
                <div class="col-sm-5">
                  <button type="button" class="btn btn-outline-danger btn-sm add2" @click="deleteLayer(layer.layer_id)"><md-icon>clear</md-icon></button>
                  <button type="button" class="btn btn-outline-dark btn-sm add" @click="editLayer(layer.layer_id)"><md-icon>create</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>

        <!-- shared layers list -->
        <div class="card " style="margin-top: 20px">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.home.sharedLayers') }}</h6>
            <br>
            <div class="card-text">
              <div class="row" v-for="layer in sharedLayers" v-bind:key="layer.layer_id">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-dark btn-sm add" @click="editLayer(layer.layer_id)"><md-icon>create</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <!--<button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.layer_id)"><md-icon>clear</md-icon></button>-->
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
  import { mapState } from 'vuex'
  import Notifications from '@/views/components/dashboard/Notifications'

  export default {
    data () {
      return {
        myLayers: [],
        sharedLayers: []
      }
    },
    mounted() {
      this.updateLayers()
      this.orderLayers(500)
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications']),
    },
    methods: {
      deleteLayer(id){
        Api().delete('/api/layer/' + id).then((response) => {
          this.updateLayers()
        })
      },
      editLayer(id){
        this.$router.push({name: 'EditLayer', params: {layer_id: id}})
      },
      // handleClick(tab, event) {
      //   console.log('\n handleClick: ');
      //   console.log(' tab: ', tab);
      //   console.log(' event: ', event);
      // },
      updateLayers(){
        this.sharedLayers = []
        this.myLayers = []

        Api().get('/api/user_layer/?user_id='+this.user.user_id).then((response) => {
          response.data.features.filter(e => {

            Api().get('/api/layer/?layer_id=' + e.properties.layer_id).then((response2) => {
              if (e.properties.is_the_creator)
                this.myLayers.push(response2.data.features[0].properties)
              else
                this.sharedLayers.push(response2.data.features[0].properties)

              this.orderLayers(10)

              // save the layers inside the state
              this.$store.dispatch('dashboard/setMyLayers', this.myLayers)
              this.$store.dispatch('dashboard/setSharedLayers', this.sharedLayers)
            })

          })
        })

      },
      orderLayers(x){
        // const vm = this
        setTimeout(_ => {
          this.myLayers.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase())
              return 1;

            if (a.name.toLowerCase() < b.name.toLowerCase())
              return -1;

            // a must be equal to b
            return 0;
          })
          this.sharedLayers.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase())
              return 1;

            if (a.name.toLowerCase() < b.name.toLowerCase())
              return -1;

            // a must be equal to b
            return 0;
          })
        }, x);
      }
    },
    components: {
      "p-dash-layout": DashLayout,
      'p-notifications': Notifications
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
