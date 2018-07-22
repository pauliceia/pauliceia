<template>
  <p-dash-layout title="Edit Layer">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Layer</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input class="form-control" id="inputName" placeholder="Name" disabled>
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="keywordsSelect">Keywords</label>
                  <v-select multiple v-model="chosenKeywords" :options="keywords" track-by="name" label="name"
                            value="description"
                            id="keywordsSelect"></v-select>
                  <!--<select class="custom-select mr-sm-2" id="themeSelect" @change="addTheme()">
                    <option selected>Choose...</option>
                    <option v-for="t in theme" :value="t.name">{{t.name}}</option>
                  </select>-->
                </div>
              </div>
              <div class="form-group">
                <!--<label for="inputDescription">Chosen Themes</label>
                <ol>
                  <li v-for="(t, index) in chosenTheme">
                    {{ t.name }}
                    &nbsp; &nbsp;
                    <a href="#" class="" @click="removeTheme(index)">x</a>
                  </li>
                </ol>-->
              </div>
              <div class="form-group">
                <label for="userSelect">Collaborators</label>
                <v-select multiple v-model="chosenUsers" :options="users" track-by="username" label="username"
                          id="userSelect"></v-select>
              </div>
              <div class="form-group">
                <label for="inputDescription">Description</label>
                <textarea class="form-control" id="inputDescription" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="inputReference">Reference</label>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <textarea class="form-control" v-model="auxRef" id="inputReference" rows="3"></textarea>
                    <!--<input type="text" class="form-control" id="inputReference" placeholder="">
                    <select class="form-control">
                      <option v-for="r in references" :value="r.reference_id">{{r.description}}</option>
                    </select>-->
                  </div>
                  <div class="form-group col-md-4">
                    <a href="#" class="btn btn-primary" @click="addRef()">Add</a>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputReference">Added References</label>
                <ol>
                  <li v-for="(t, index) in chosenRef">
                    {{ t.description }}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-danger btn-sm del" @click="removeRef(index)">
                      <md-icon>clear</md-icon>
                    </button>
                  </li>
                </ol>
              </div>
              <div class="form-group">
              </div>
            </form>
            </p>
            <div class="row">
              <div class="col align-self-end">
                <br>
                <a href="#" class="btn btn-primary" @click="Upload()">Submit</a>
                <a href="#" class="btn btn-danger" @click="Delete()">Delete</a>
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
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Api from '@/middleware/ApiVGI'
  import {mapState} from 'vuex'

  Vue.component('v-select', vSelect)

  export default {
    name: "editLayer",
    components: {
      "p-dash-layout": DashLayout
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data: function () {
      return {
        chosenUsers: [],
        references: [],
        chosenRef: [],
        chosenRefID: [],
        auxRef: null,
        users: [],
        keywords: [],
        chosenKeywords: [],
        chosenKeywordsID: [],
        layer_id: this.$route.params.layer_id
      }
    },
    methods: {
      Upload() {
        this.chosenKeywords.forEach(e => {
          this.chosenKeywordsID.push(e.keyword_id)
        })

        let layer = {
          'type': 'Layer',
          'properties': {
            'layer_id': -1,
            'f_table_name': document.getElementById("inputName").value,
            'name': document.getElementById("inputName").value,
            'description': document.getElementById("inputDescription").value,
            'source_description': document.getElementById("inputDescription").value,
            'reference': this.chosenRefID,
            'keyword': this.chosenKeywordsID,
          },
          'feature_table': {
            'properties': {
              'name': 'text',
              'start_date': 'text',
              'end_date': 'text'
            },
            'geometry': {
              "type": "MultiPoint"
            }
          }
        }
        console.log(layer)

        // let response = Api().post('/api/layer/create/?is_to_create_feature_table=FALSE',
        //   layer
        // )

        this.chosenKeywordsID = null
        this.chosenRefID = null
        console.log(response)

        this.$router.push({
          path: '/dashboard/home'
        })
      },
      Delete() {
        const vm = this;
        Api().delete('/api/layer/' + this.layer_id).then(function (response) {
          //console.log(response)
        })
        this.$router.push({
          path: '/dashboard/home'
        })
      },
      removeRef(index) {
        const vm = this
        //console.log(vm.chosenRef[index].reference_id)
        Api().delete('/api/reference/' + vm.chosenRef[index].reference_id
        ).then(function (response) {
          //console.log(response)
        })
        this.chosenRef.splice(index, 1)
        this.chosenRefID.splice(index, 1)
      },
      addRef() {
        const vm = this
        if (this.auxRef != null) {
          let ref_id
          let ref = {
            'type': 'Reference',
            'properties':
              {
                'reference_id': -1,
                'description': vm.auxRef
              }
          }

          Api().post('/api/reference/create',
            ref
          ).then(function (response) {
            ref_id = response.data.reference_id
            vm.chosenRef.push({description: vm.auxRef, reference_id: ref_id})
            //console.log(vm.chosenRef)
            vm.chosenRefID.push(ref_id)
            vm.auxRef = null

          })
        }
      }
    },
    beforeCreate() {
      const vm = this

      let id = this.$route.params.layer_id

      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          vm.users.push(e.properties)
        })
      })

      Api().get('/api/keyword').then(function (response) {
        response.data.features.filter(e => {
          vm.keywords.push({name: e.properties.name, keyword_id: e.properties.keyword_id})
        })
      })

      Api().get('/api/layer/?layer_id=' + id).then(function (response) {
        vm.layer = response.data.features[0].properties
        //console.log(vm.layer)
        document.getElementById("inputName").value = vm.layer.name
        document.getElementById("inputDescription").value = vm.layer.description
        vm.chosenKeywordsID = vm.layer.keyword
        vm.chosenRefID = vm.layer.reference

        console.log(vm.layer)

        vm.chosenKeywordsID.forEach(key => {
          Api().get('/api/keyword/?keyword_id=' + key).then(function (response) {
            response.data.features.filter(e => {
              vm.chosenKeywords.push(e.properties)
            })
          })
        })
        if(vm.chosenRefID != null) vm.chosenRefID.forEach(id => {
          Api().get('/api/reference/?reference_id=' + id).then(function (response) {
            response.data.features.filter(e => {
              vm.chosenRef.push(e.properties)
            })
          })
        })

        Api().get('/api/user_layer/?layer_id=' + id).then(function (response) {
          //console.log(response.data.features)
          response.data.features.forEach(u => {
            Api().get('/api/user/?user_id=' + u.properties.user_id).then(function (response) {
              //console.log(response.data.features)
              if (response.data.features[0].properties.user_id !== vm.user.user_id)
                vm.chosenUsers.push(response.data.features[0].properties)
            })
          })
        })

      })
    }
  }


</script>

<style lang="sass" scoped>
  .add
    top: -2px
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    position: absolute

  .del
    top: 0px
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    position: relative
</style>
