<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')">
    <div class="row">
      <div class="col-sm-6" v-if="shapeCorrect === false">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.nav.newLayer') }}</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>&nbsp;
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content= " $t('dashboard.newLayer.nameD')"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <input class="form-control" id="inputName"><!--placeholder="Name">-->
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="keywordsSelect">{{ $t('dashboard.newLayer.keywords') }}</label>
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content="$t('dashboard.newLayer.keywordsD')"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <button type="button" class="btn btn-outline-warning btn-sm add" @click="newKeyword()">
                    <md-icon>add_circle_outline</md-icon>
                  </button>
                  <v-select multiple v-model="chosenKeywords" :options="keywords" track-by="name" label="name"
                            value="description"
                            id="keywordsSelect"></v-select>
                </div>
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            :content="$t('dashboard.newLayer.collaboratorsD')"
                            type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <v-select multiple v-model="chosenUsers" :options="users" track-by="username" label="username"
                          id="userSelect"></v-select>
              </div>
              <div class="form-group">
                <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            :content="$t('dashboard.newLayer.descriptionD')"
                            type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <textarea class="form-control" id="inputDescription" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200"
                            trigger="hover"
                            :content="$t('dashboard.newLayer.referenceD')"
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
                    <a href="#" class="btn btn-primary" @click="addRef()">{{ $t('dashboard.newLayer.add') }}</a>
                  </div>
                </div>
              </div>
              <div class="form-group" v-show="chosenRef.length !== 0">
                <label for="inputReference">{{ $t('dashboard.newLayer.addedReferences') }}</label>
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
                  <label for="Upload">{{ $t('dashboard.newLayer.fileInput') }}</label>&nbsp;
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content="$t('dashboard.newLayer.fileInputD')"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">{{ $t('dashboard.newLayer.zipFile') }}</span>
                    </div>
                    <div class="custom-file">
                      <input type="file" @change="updateName()" class="custom-file-input" id="Upload" accept=".zip">
                      <label v-model="fname" class="custom-file-label" for="Upload">{{fname}}</label>
                    </div>
                  </div>
                </div>
                <!--<div class="form-group col-md-3">-->
                  <!--<label for="Upload">EPSG</label>-->
                  <!--<el-popover class="info" placement="top-start" width="200"-->
                              <!--trigger="hover"-->
                              <!--:content="$t('dashboard.newLayer.epsgD')"-->
                              <!--type="primary">-->
                    <!--<button type="button" slot="reference" class="btn btn-outline-primary info">-->
                      <!--<md-icon class="icon">error_outline</md-icon>-->
                    <!--</button>-->
                  <!--</el-popover>-->
                  <!--<input class="form-control" id="inputEpsg">-->
                <!--</div>-->
              </div>
            </form>
            </p>
            <div class="row">
              <div class="col align-self-end">
                <a href="#" class="btn btn-primary" @click="Upload()"> {{ $t('dashboard.newLayer.submit') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card" v-if="shapeCorrect">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.newLayer.temporalColumns') }}</h5>
            <div class="card-text">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">{{ $t('dashboard.newLayer.startDate') }}</label>&nbsp;
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
                    <label for="userSelect">{{ $t('dashboard.newLayer.startDateColumn') }}</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select v-model="startColumnsName" :options="columnsName" track-by="" label=""
                              id="start_date_column_name"></v-select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.startDateMask') }}</label>&nbsp;
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
                    <label for="inputName">{{ $t('dashboard.newLayer.endDate') }}</label>&nbsp;
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
                    <label for="userSelect">{{ $t('dashboard.newLayer.endDateColumn') }}</label>&nbsp;
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                content="this is content, this is content, this is content"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <v-select v-model="endColumnsName" :options="columnsName" track-by="" label=""
                              id="end_date_column_name"></v-select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.endDateMask') }}</label>&nbsp;
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
                    <a href="#" class="btn btn-primary" @click="Upload2()">{{ $t('dashboard.newLayer.submit') }}</a>
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
        fname: this.$t('dashboard.newLayer.chooseFile'),
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
          name: 'Keyword',
          params: {name: 'NewLayer'}
        })

      },
      updateName() {
        this.fname = document.getElementById("Upload").files[0].name
      },
      Upload2(){
        const vm = this

        if(this.startDate === null || this.endDate === null){
          let msg = "Date is missing"
          vm.$message.error(msg)
        }
        else if(this.endColumnsName.length === 0 || this.startColumnsName.length === 0){
          let msg = "Column name is missing"
          vm.$message.error(msg)
        }
        else if(this.startDateMask === null || this.endDateMask === null){
          let msg = "Mask is missing"
          vm.$message.error(msg)
        }
        else {
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
          //console.log(timeColumn)
          Api().post('/api/temporal_columns/create',
            timeColumn
          ).then(function (response) {
            //console.log(response)
            vm.$message.success("The layer was added with success!")
            vm.$router.push({
              path: '/dashboard/home'
            })
          }, function (cause) {
            Api().delete('/api/layer/'+vm.layer_id)
            let msg = ''
            if (cause.response.status === 403) msg = "Just the owner of layer or administrator can create/update a time columns."
            else if (cause.response.status === 401) msg = "It is necessary an Authorization valid!"
            else msg = cause.toString()
            console.log(cause.response)
            vm.$message.error(msg)
          })
        }

      },
      Upload() {
        const vm = this
        this.chosenKeywordsID = []
        this.chosenKeywords.forEach(e => {
          this.chosenKeywordsID.push(e.keyword_id)
        })

        let tableName2 = document.getElementById("inputName").value
        //let epsg = document.getElementById("inputEpsg").value
        if (tableName2.indexOf(' ') === 0) tableName2 = tableName.slice(1)
        if (tableName2.lastIndexOf(' ') === tableName2.length - 1) tableName2 = tableName2.slice(0, tableName2.length - 1)
        tableName2 = tableName2.split(" ").join("_")
        tableName2 = tableName2.toLocaleLowerCase()
        this.tableName = tableName2
        let file = document.getElementById("Upload").files[0]

        if(document.getElementById("inputName").value === ''){
          let msg = "Name is missing"
          vm.$message.error(msg)
        }
        else if(this.chosenKeywordsID.length === 0){
          let msg = "It's necessary have at least one keyword"
          vm.$message.error(msg)
        }
        else if(file === undefined){
          let msg = "File is missing"
          vm.$message.error(msg)
        }
        else if(file.size > 104857600){
          let msg = "File can not exceed 100MB!"
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

                Api().post('api/import/shp/?f_table_name=' + vm.tableName + '&file_name=' + file.name + '&changeset_id=' + response.data.changeset_id,
                  //'&epsg=' + epsg,
                  file
                ).then(function (response) {
                    //console.log("Import ok")

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
                    }, function (cause) {
                      loading.close()
                      Api().delete('/api/layer/'+vm.layer_id)

                      let msg = ''
                      msg = cause.toString()
                      vm.$message.error(msg)
                    })
                  }, function (cause) {
                    loading.close()
                    Api().delete('/api/layer/'+vm.layer_id)

                  let msg = ''
                  if (cause.response.status === 409) msg = "File is not a zip file."
                  else if (cause.response.status === 400) msg = "Invalid ZIP! It is necessary to exist a ShapeFile (.shp) inside de ZIP."
                  else if (cause.response.status === 500) msg = "invalid SRID! Please be sure that it is a valid SRID."
                  else msg = cause.toString()
                  vm.$message.error(msg)
                })
            }, function (cause) {
              loading.close()
              Api().delete('/api/layer/'+vm.layer_id)

              let msg = ''
              msg = cause.toString()
              vm.$message.error(msg)
            })
          }, function (cause) {
            loading.close()
            let msg = ''
            if (cause.response.status === 409) msg = "Layer name already exists!"
            else if (cause.response.status === 401) msg = "It is necessary an Authorization valid!"
            else msg = cause.toString()
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
          }, function (cause) {
            let msg = ''
            if (cause.response.status === 400) msg = "Reference text already exists!"
            else msg = cause.toString()
            console.log(cause.response)
            vm.$message.error(msg)
          })
        }
        //this.auxRef = null
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
    }
  }


</script>

<style lang="sass" scoped>
  .add
    top: -1px
    left: 0px
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    position: relative
    border-radius: 30px

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
    border-radius: 30px

</style>
