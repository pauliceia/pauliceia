<template>
  <p-dash-layout title="Dashboard">
    <div class="row">
      <div class="col-sm-8">
        <div class="card  text-center">
          <div class="card-header">
            Notifications
          </div>
          <div class="card-body">
            <p class="card-text" v-for="n in notifications">
              <a href="#">{{ n.user_id_creator }}</a> commented
              <a href="#">{{ n.name }}</a> on
              <a href="#">{{ n.layer_id }}</a> at
              <a href="#">{{ n.created_at }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card  ">
          <div class="card-header text-center">
            My Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in layers">
                <div class="col-sm-9">{{ layer.name }}</div>
                <div class="col-sm-3">
                  <router-link :to="{name: 'EditLayer', params: {layer_id: layer.id}}">
                    <md-icon>edit</md-icon>
                  </router-link>
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

  export default {
    components: {
      "p-dash-layout": DashLayout
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data: function () {
      return {
        notifications: [
          {
            id: 1,
            name: 'Ano Incorreto',
            description: 'Ano Incorreto',
            icon: '',
            created_at: '23/05/2018 18:45',
            user_id_creator: 'Rodrigo',
            layer_id: 'Streets in 1920',
            theme_id: 1,
            notification_id_parent: 1
          },
          {
            id: 2,
            name: 'Localização Errada',
            description: 'Ano incorreto',
            icon: '',
            created_at: '23/05/2018 14:50',
            user_id_creator: 'Beto',
            layer_id: 'Hospitals between 1800 to 1950',
            theme_id: 1,
            notification_id_parent: 1
          }
        ],
        layers: [],
        users: [],
        shownNotif: []
      }
    },
    beforeCreate() {
      const vm = this
      Api().get('/api/layer').then(function (response) {
        response.data.features.filter(e => {
          //if(e.properties.user_id_published_by == vm.user.user_id)
          vm.layers.push({name: e.properties.name, id: e.properties.layer_id})
        })
      })

      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          vm.users.push(e.properties)
        })
        //console.log(vm.users)
      })
    }
  }
</script>

<style lang="sass" scoped>

</style>
