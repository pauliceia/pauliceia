<template>
  <p-dash-layout :title="$t('dashboard.home.dashboard')">
    <div class="row">
      <div class="col-sm-8">
        <div class="card  text-center">
          <div class="card-header">
            {{ $t('dashboard.home.notifications') }}
          </div>
          <div class="card-body">
            <p-notifications showInput="true"></p-notifications>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card  ">
          <div class="card-header text-center">
            {{ $t('dashboard.home.myLayers') }}
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in myLayers">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="editLayer(layer.layer_id)"><md-icon>create</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.layer_id)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="card  ">
          <div class="card-header text-center">
            {{ $t('dashboard.home.sharedLayers') }}
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in sharedLayers">
                <div class="col-sm-8">{{ layer.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="editLayer(layer.layer_id)"><md-icon>create</md-icon></button>
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
  import {mapState} from 'vuex'
  import Notifications from '@/views/components/dashboard/Notifications'

  export default {
    components: {
      "p-dash-layout": DashLayout,
      'p-notifications': Notifications
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('map', ['boxNotifications']),
    },
    data: function () {
      return {
        myLayers: [],
        sharedLayers: [],
        layers: [],
        users: [],
        shownNotif: [],
        is_the_admin: false,
      }
    },
    methods: {
      deleteLayer(id){
        const vm = this;
        Api().delete('/api/layer/' + id).then(function (response) {
          vm.updateLayers()
        })
      },
      editLayer(id){
        this.$router.push({name: 'EditLayer', params: {layer_id: id}})
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      updateLayers(){
        const vm = this

        vm.sharedLayers = []
        vm.myLayers = []

        Api().get('/api/layer').then(function (response) {
          response.data.features.filter(e => {
            vm.layers.push({name: e.properties.name, id: e.properties.layer_id})
          })

          Api().get('/api/user_layer/?user_id='+vm.user.user_id).then(function (response) {
            response.data.features.filter(e => {
              Api().get('/api/layer/?layer_id='+e.properties.layer_id).then(function (response2) {
                if(e.properties.is_the_creator === true){
                  vm.myLayers.push(response2.data.features[0].properties)
                }
                else{
                  vm.sharedLayers.push(response2.data.features[0].properties)
                }

                vm.orderLayers(10)
              })
            })
          })
        })
      },
      orderLayers(x){
        const vm = this
        setTimeout(_=>{
          vm.myLayers.sort(function(a,b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
          vm.sharedLayers.sort(function(a,b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        }, x);
      }
    },
    mounted() {
      this.updateLayers()
      this.orderLayers(500)
      this.is_the_admin = this.user.is_the_admin
    }
  }
</script>

<style lang="sass" scoped>
.add
  top: 0px
  display: inline-block
  border: none
  padding: 0px
  margin: 0px
  position: absolute


</style>
