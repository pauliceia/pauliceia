<template>
  <p-dash-layout title="New Layer">
    <div class="row">
      <div class="col-sm-6" v-if="shapeCorrect === false">
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
                  <input class="form-control" id="inputName" placeholder="Name" required>
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
                            id="keywordsSelect" required></v-select>
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
      <div class="col-sm-6">
        <div class="card" v-if="shapeCorrect">
          <div class="card-body">
            <h5 class="card-title">Time Columns</h5>
            <div class="card-text">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">Start Date</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <input class="form-control" v-model="startDate" type="date" id="start_date">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">Start Date Column</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select multiple v-model="startColumnsName" :options="columnsName" track-by="" label=""
                              id="start_date_column_name"></v-select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">Start Date Mask</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select v-model="startDateMask" :options="dateMask" track-by="mask" label="mask"
                              id="start_date_mask"></v-select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">End Date</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <input class="form-control" type="date" v-model="endDate" id="end_date">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">End Date Column</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select multiple v-model="endColumnsName" :options="columnsName" track-by="" label=""
                              id="end_date_column_name"></v-select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">End Date Mask</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select v-model="endDateMask" :options="dateMask" track-by="mask" label="mask"
                              id="end_date_mask"></v-select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col align-self-end">
                    <br>
                    <a href="#" class="btn btn-primary" @click="Upload2()">Submit</a>
                  </div>
                </div>
              </form>
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
  import lang from 'element-ui/lib/locale/lang/en'
  import locale from 'element-ui/lib/locale'

  Vue.component('v-select', vSelect)
  // configure language
  locale.use(lang)

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
        layer_id: null,
        tableName: null,
        chosenUsers: [],
        references: [],
        chosenRef: [],
        chosenRefID: [],
        auxRef: null,
        users: [],
        keywords: [],
        chosenKeywords: [],
        chosenKeywordsID: [],
        fname: 'Choose file',
        columns: null,
        columnsName: [],
        startColumnsName: null,
        endColumnsName: null,
        dateMask: [],
        startDateMask: null,
        endDateMask: null,
        startDate: null,
        endDate: null,
        shapeCorrect: false,
        fullscreenLoading: false
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
      Upload2(){
        let timeColumn = {
          'properties': {
            'f_table_name': this.tableName,
            'start_date': this.startDate,
            'end_date': this.endDate,
            'end_date_column_name': this.endColumnsName[0],
            'start_date_column_name': this.startColumnsName[0],
            'start_date_mask_id': this.startDateMask.mask_id,
            'end_date_mask_id': this.endDateMask.mask_id,
          },
          'type': 'TemporalColumns'
        }
        console.log(timeColumn)
        Api().post('/api/temporal_columns/create',
          timeColumn
        ).then(function (response) {
          console.log(response)
        })

        this.$router.push({
          path: '/dashboard/home'
        })

      },
      Upload() {
        const vm = this
        this.chosenKeywordsID = []
        this.chosenKeywords.forEach(e => {
          this.chosenKeywordsID.push(e.keyword_id)
        })

        //POST de cada referência

        /*vm.chosenRef.forEach(r => {
          let ref = {
            'type': 'Reference',
            'properties':
              {
                'reference_id': -1,
                'description': r.description
              }
          }

          Api().post('/api/reference/create',
            ref
          ).then(function (response) {
            vm.auxRef = null
            vm.chosenRefID.push(response.data.reference_id)
            console.log(response)
          })
        })*/

        let tableName2 = document.getElementById("inputName").value
        let epsg = document.getElementById("inputEpsg").value
        if (tableName2.indexOf(' ') == 0) tableName2 = tableName.slice(1)
        if (tableName2.lastIndexOf(' ') == tableName2.length - 1) tableName2 = tableName2.slice(0, tableName2.length - 1)
        tableName2 = tableName2.split(" ").join("_")
        tableName2 = tableName2.toLocaleLowerCase()
        this.tableName = tableName2
        let file = document.getElementById("Upload").files[0]

        if(this.chosenKeywordsID.length === 0){
          let msg = "It's necessary have at least one keyword"
          vm.$message.error(msg)
        }
        else if(epsg === ''){
          let msg = "EPSG is missing"
          vm.$message.error(msg)
        }
        else if(file === undefined){
          let msg = "File is missing"
          vm.$message.error(msg)
        }
        else {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })

          let layer = {
            'type': 'Layer',
            'properties': {
              'layer_id': -1,
              'f_table_name': this.tableName,
              'name': document.getElementById("inputName").value,
              'description': document.getElementById("inputDescription").value,
              'source_description': document.getElementById("inputDescription").value,
              'reference': this.chosenRefID,
              'keyword': this.chosenKeywordsID,
            }
          }

          //console.log(layer)

          Api().post('/api/layer/create',
            layer
          ).then(function (response) {

            vm.layer_id = response.data.layer_id
            vm.chosenUsers.forEach(u => {          //POST cada usuario colaborar da layer
              let user_layer = {
                'properties': {
                  'is_the_creator': 'false',
                  'user_id': u.user_id,
                  'layer_id': response.data.layer_id
                },
                'type': 'UserLayer'
              }
              Api().post('/api/user_layer/create',
                user_layer
              )//.then(function (response) {})

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

              Api().post('api/import/shp/?f_table_name=' + vm.tableName + '&file_name=' + file.name + '&changeset_id=' + response.data.changeset_id +
                '&epsg=' + epsg,
                file
              ).then(function (response) {
                console.log("Import ok")

                Api().get('/api/feature_table/?f_table_name=' + vm.tableName).then(function (response) {    //Pega as colunas do shapefile enviado
                  response.data.features.filter(e => {
                    //console.log(vm.columns)
                    vm.columns = e.properties
                    Object.getOwnPropertyNames(e.properties).forEach(c => {
                      if (c !== 'geom' && c !== '__ob__' && c !== 'changeset_id') {
                        vm.columnsName.push(c)
                      }
                    })
                    vm.shapeCorrect = true;
                    loading.close();
                    //console.log(vm.columnsName)
                  })
                })
              }, function (cause) {
                loading.close()
                Api().delete('/api/layer/'+vm.layer_id)

                let msg = ''
                if (cause.response.status == 409) msg = "File is not a zip file."
                else if (cause.response.status == 400) msg = "Invalid ZIP! It is necessary to exist a ShapeFile (.shp) inside de ZIP."
                else if (cause.response.status == 500) msg = "invalid SRID! Please be sure that it is a valid SRID."
                else msg = cause.toString()
                console.log(cause.response)
                vm.$message.error(msg)
              })
            })
          }, function (cause) {
            loading.close()
            let msg = ''
            if (cause.response.status == 409) msg = "Layer name already exists!"
            else if (cause.response.status == 401) msg = "It is necessary an Authorization valid!"
            else msg = cause.toString()
            console.log(cause.response)
            vm.$message.error(msg)
          })
        }
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

          //vm.chosenRef.push({description: vm.auxRef})

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
        //this.auxRef = null
        //document.getElementById("Upload").focus();
      }
    },
    beforeCreate() {
      const vm = this

      this.shapeCorrect = false
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


      Api().get('/api/mask').then(function (response) {
        response.data.features.filter(e => {
          vm.dateMask.push(e.properties)
        })
        //console.log(vm.dateMask)
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
