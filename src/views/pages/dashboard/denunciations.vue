<template>
  <p-dash-layout title="Denunciations">
    <div class="row">
      <div class="col-sm-4">
        <div class="card  ">
          <div class="card-header text-center">
            Denounced Layers
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in denouncedLayers">
                <div class="col-sm-8">{{ layer.name }} ({{ layer.n}})</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="editLayer(layer.id)"><md-icon>create</md-icon></button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-outline-danger btn-sm add" @click="deleteLayer(layer.id)"><md-icon>clear</md-icon></button>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="card  ">
          <div class="card-header text-center">
            Denounced Comments
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="row" v-for="layer in denouncedComments">
                <div class="col-sm-8">{{ layer.name }} ({{ layer.n}})</div>
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

      <div class="col-sm-8">
        <div class="card  text-center">
          <div class="card-header">
            Denunciations
          </div>
          <div class="card-body">


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
        ...mapState('auth', ['isUserLoggedIn', 'user']),
      },
        name: "denunciations",

      data: function () {
        return {
          denouncedLayers: [],
          denouncedComments: [],
          notifications: [],
          nameLayers: [],
        }
      },
      methods: {
          getDenunciations(){
            const vm = this

            Api().get('/api/notification/?is_denunciation=True&notification_id_parent=NULL').then(function (response) {
              //vm.notifications.push(response.data.features)
              Api().get('/api/layer/').then(function (layers) {
                layers.data.features.forEach(layer => {
                  vm.nameLayers = {...vm.nameLayers, [layer.properties.layer_id]: layer.properties.name,}
                })
              })
              setTimeout(_ => {
                  vm.denouncedLayers = response.data.features.reduce((acc, currvalue) => {

                    const id = currvalue.properties.layer_id;
                    const idCont = acc[id] ? acc[id].n + 1 : 1;

                    return {...acc, [id]: {'n': idCont, 'name': vm.nameLayers[id], 'id': id},}
                  }, {})

              }, 100);
            })

            Api().get('/api/notification/').then(function (response) {
                response.data.features.forEach( notification => {
                  vm.notifications = {...vm.notifications, [notification.properties.notification_id]: notification.properties}
                })

                Api().get('/api/user/').then(function (users) {
                  users.data.features.forEach(user => {
                    vm.nameUsers = {...vm.nameUsers, [user.properties.user_id]: user.properties.name,}
                  })
                })
                setTimeout(_ => {
                    vm.denouncedComments = response.data.features.filter( e => {
                      return (e.properties.notification_id_parent != null && e.properties.is_denunciation === true)
                    }).reduce((acc, currvalue) => {
                      const id = currvalue.properties.notification_id_parent;
                      const idCont = acc[id] ? acc[id].n + 1 : 1

                      return {...acc, [id]: {'n': idCont, 'name': vm.nameUsers[vm.notifications[currvalue.properties.notification_id_parent].user_id_creator], 'id': id},}
                    }, {})
                }, 100);
            })
          }
      },
      mounted() {
        const vm = this
        vm.getDenunciations()
        setTimeout(_ => {
          //console.log(vm.denouncedComments)
          //console.log(vm.denouncedLayers)
        }, 1000);
      }
    }
</script>

<style lang="sass"  scoped>
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
