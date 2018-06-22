<template>
  <p-dash-layout title="New Layer">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Layer</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Name</label>&nbsp;
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              content="this is content, this is content, this is content"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <input class="form-control" id="inputName" placeholder="Name">
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="keywordsSelect">Keywords</label>
                  <button type="button" class="btn btn-outline-warning btn-sm add" @click="newKeyword()">
                    <md-icon>add_circle_outline</md-icon>
                  </button>
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              content="this is content, this is content, this is content"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <v-select multiple v-model="chosenKeywords" :options="keywords" track-by="name" label="name"
                            value="description"
                            id="keywordsSelect"></v-select>
                </div>
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="userSelect">Collaborators</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            content="this is content, this is content, this is content"
                            type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <v-select multiple v-model="chosenUsers" :options="users" track-by="username" label="username"
                          id="userSelect"></v-select>
              </div>
              <div class="form-group">
                <label for="inputDescription">Description</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            content="this is content, this is content, this is content"
                            type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <textarea class="form-control" id="inputDescription" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="inputReference">Reference</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            content="this is content, this is content, this is content"
                            type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <textarea class="form-control" v-model="auxRef" id="inputReference" rows="3"></textarea>
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
              <div class="form-row">
                <div class="form-group col-md-9">
                  <label for="Upload">File Input</label>&nbsp;
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              content="this is content, this is content, this is content"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">ZIP File</span>
                    </div>
                    <div class="custom-file">
                      <input type="file" @change="updateName()" class="custom-file-input" id="Upload" accept=".zip">
                      <label v-model="fname" class="custom-file-label" for="Upload">{{fname}}</label>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-3">
                  <label for="Upload">EPSG</label>
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              content="this is content, this is content, this is content"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <input class="form-control" id="inputEpsg">
                </div>
              </div>
            </form>
            </p>
            <div class="row">
              <div class="col align-self-end">
                <br>
                <a href="#" class="btn btn-primary" @click="Upload()">Submit</a>
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
    name: "newLayer",
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
        fname: 'Choose file'
      }
    },
    methods: {
      newKeyword() {
        this.$router.push({
          path: '/dashboard/keywords'
        })

      },
      updateName() {
        this.fname = document.getElementById("Upload").files[0].name
      },
      Upload() {
        const vm = this

        this.chosenKeywords.forEach(e => {
          this.chosenKeywordsID.push(e.keyword_id)
        })

        let tableName = document.getElementById("inputName").value
        let epsg = document.getElementById("inputEpsg").value
        if (tableName.indexOf(' ') == 0) tableName = tableName.slice(1)
        if (tableName.lastIndexOf(' ') == tableName.length - 1) tableName = tableName.slice(0, tableName.length - 1)
        tableName = tableName.split(" ").join("_")
        tableName = tableName.toLocaleLowerCase()

        let layer = {
          'type': 'Layer',
          'properties': {
            'layer_id': -1,
            'f_table_name': tableName,
            'name': document.getElementById("inputName").value,
            'description': document.getElementById("inputDescription").value,
            'source_description': document.getElementById("inputDescription").value,
            'reference': this.chosenRefID,
            'keyword': this.chosenKeywordsID,
          }
        }


        var file = document.getElementById("Upload").files[0]


        Api().post('/api/layer/create/?is_to_create_feature_table=FALSE',
          layer
        ).then(function (response) {
          console.log("Layer")
          console.log(response)

          //POST cada usuario colaborar da layer
          vm.chosenUsers.forEach(u => {
            let user_layer = {
              'properties': {
                'is_the_creator': 'false',
                'user_id': u.user_id,
                'layer_id': response.data.layer_id
              },
              'type': 'UserLayer'
            }
            //console.log(user_layer)

            Api().post('/api/user_layer/create',
              user_layer
            ).then(function (response) {
              //console.log(response)
            })
          })

          let changeset = {
            'properties': {
              'changeset_id': -1,
              'layer_id': response.data.layer_id,
              'description': 'Creating layer_' + response.data.layer_id
            },
            'type': 'Changeset'
          }

          Api().post('/api/changeset/create',
            changeset
          ).then(function (response) {
            console.log("Changeset")
            console.log(response)

            Api().post('api/import/shp/?f_table_name=' + tableName + '&file_name=' + file.name + '&changeset_id=' + response.data.changeset_id +
              '&epsg=' + epsg,
              file
            ).then(function (response) {
              console.log("Import")
              console.log(response)
            })

          })
        })

        this.$router.push({
          path: '/dashboard/home'
        })

        //this.chosenKeywordsID = null
        //this.chosenRefID = null
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
      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          if (e.properties.user_id !== vm.user.user_id)
            vm.users.push(e.properties)
        })
      })

      Api().get('/api/keyword').then(function (response) {
        response.data.features.filter(e => {
          vm.keywords.push({name: e.properties.name, keyword_id: e.properties.keyword_id})
        })
      })

      // Api().get('/api/reference').then(function (response) {
      //   response.data.features.filter(e => {
      //     vm.references.push({description: e.properties.description, reference_id: e.properties.reference_id})
      //   })
      // })
    }
  }


</script>

<style lang="sass" scoped>
  .add
    top: -1px
    left: 110px
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

  .info
    top: -1px
    border: none
    padding: 0px
    margin: 0px
    position: relative

</style>
