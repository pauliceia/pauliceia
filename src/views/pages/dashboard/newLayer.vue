<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')">
    <div class="row">
    
      <div class="col-sm-12" v-if="shapeCorrect === false">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.nav.newLayer') }}</h5>
              
            <form class="row">
              <div class="card-left col-sm-6">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.nameD')" />
                    <input class="form-control" id="inputName"><!--placeholder="Name">-->
                  </div>

                  <div class="form-group col-md-6">
                    <label class="mr-sm-2" for="keywordsSelect">{{ $t('dashboard.newLayer.keywords') }}</label>
                    <p-popover-labels :text="$t('dashboard.newLayer.keywordsD')" />
                    <button type="button" class="btn btn-outline-warning btn-sm add" @click="newKeyword()">
                      <md-icon>add_circle_outline</md-icon>
                    </button>
                    <v-select multiple v-model="chosenKeywords" :options="keywords" track-by="name" label="name"
                      value="description"
                      id="keywordsSelect">
                    </v-select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.collaboratorsD')" />
                  <v-select multiple v-model="chosenUsers" :options="users" track-by="username" label="username"
                      id="userSelect"></v-select>
                </div>

                <div class="form-group">
                  <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.descriptionD')" />
                  <textarea class="form-control" id="inputDescription" rows="3"></textarea>
                </div>

                <div class="form-group">
                  <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.referenceD')" />
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <textarea class="form-control" v-model="auxRef" id="inputReference" rows="3"></textarea>
                    </div>
                    <div class="form-group col-md-4">
                      <a style="color: #FFF" class="btn btn-primary" @click="addRef()">{{ $t('dashboard.newLayer.add') }}</a>
                    </div>
                  </div>
                </div>

                <div class="form-group" v-show="chosenRef.length !== 0">
                  <label for="inputReference">{{ $t('dashboard.newLayer.addedReferences') }}</label>
                  <ol>
                    <li v-for="(t, index) in chosenRef" :key="t">
                      {{ t.description }}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" class="btn btn-outline-danger btn-sm del" @click="removeRef(index)">
                        <md-icon>clear</md-icon>
                      </button>
                    </li>
                  </ol>
                </div>
              </div><!--end card left-->

              <div class="card-right col-sm-6">
                <div class="box-radio">
                  <el-radio-group v-model="typeSubmit">
                    <el-radio-button label="file">{{ $t('dashboard.newLayer.mountLayer.btnRadio.import') }}</el-radio-button>
                    <el-radio-button label="input">{{ $t('dashboard.newLayer.mountLayer.btnRadio.create') }}</el-radio-button>
                  </el-radio-group>
                </div>
                
                <div v-if="typeSubmit == 'file'" class="box-layer-file">
                  <label for="Upload">{{ $t('dashboard.newLayer.fileInput') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.fileInputD')" />                  
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">{{ $t('dashboard.newLayer.zipFile') }}</span>
                    </div>
                    <div class="custom-file">
                      <input type="file" @change="updateName()" class="custom-file-input" id="Upload" accept=".zip">
                      <label class="custom-file-label" for="Upload">{{fname}}</label>
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
                </div> <!--end box-file-->

                <div v-if="typeSubmit == 'input'" class="box-layer-input">
                  <label>{{ $t('dashboard.newLayer.mountLayer.lblAttr') }}:</label>
                  <p-popover-labels :text="$t('dashboard.newLayer.mountLayer.lblAttrD')" />
                  <div class="box-attr">
                      <div class="row">
                        <div class="col-5">
                            <label>{{ $t('dashboard.newLayer.mountLayer.boxAttr.lblColumnName') }}</label>
                        </div>
                        <div class="col-5">
                            <label>{{ $t('dashboard.newLayer.mountLayer.boxAttr.lblColumnType') }}</label>
                        </div>

                        <div class="col-12 row">
                          <div class="col-5">
                            <input class="form-control" value="geom" disabled>
                          </div>
                          <div class="col-5">
                            <el-select style="width: 100%" v-model="optTpGeom">
                              <el-option
                                v-for="item in optionsTypeGeom"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                        </div>

                        <div v-for="attr in optionsAttr" :key="attr.id" class="col-12 row">
                          <div class="col-5">
                            <input class="form-control" v-model="attr.column_name" :placeholder="$t('dashboard.newLayer.mountLayer.boxAttr.lblColumnName')">
                          </div>
                          <div class="col-5">
                            <el-select style="width: 100%" v-model="attr.column_type">
                              <el-option
                                v-for="item in optionsTypeColumn"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="col-2">
                            <el-button type="danger" icon="el-icon-delete" @click="removeAttr(attr.id)" size="small" circle></el-button>
                          </div>
                        </div>

                      </div>
                      <button type="button" class="btn btn-info btn-sm" @click="addAttr()">+ ADD</button>
                  </div>
                </div><!--end box-input-->

                <button type="button" style="color: #FFF; margin-left: 15px" class="btn btn-primary" @click="Upload()"> {{ $t('dashboard.newLayer.submit') }}</button>
              </div><!--end card right-->
            </form>

          </div>
        </div>
      </div><!--end box newLayer-->

      <div class="col-sm-6">
        <div class="card" v-if="shapeCorrect">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.newLayer.temporalColumns') }}</h5>
            <div class="card-text">
              <form>

                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">{{ $t('dashboard.newLayer.lblStartDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDate')" />
                    <input class="form-control" v-model="startDate" type="date" id="start_date">
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateColumn')" />
                    <v-select v-model="startColumnsName" :options="columnsName" track-by="" label=""
                              id="start_date_column_name"></v-select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateMask')" />
                    <v-select v-model="startDateMask" :options="dateMask" track-by="mask" label="mask"
                              id="start_date_mask"></v-select>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">{{ $t('dashboard.newLayer.lblEndDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDate')" />
                    <input class="form-control" type="date" v-model="endDate" id="end_date">
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateColumn')" />
                    <v-select v-model="endColumnsName" :options="columnsName" track-by="" label=""
                              id="end_date_column_name"></v-select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateMask')" />
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
  import PopoverLabels from '@/views/components/dashboard/PopoverLabels'
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Api from '@/middleware/ApiVGI'
  import { mapState } from 'vuex'
  import lang from 'element-ui/lib/locale/lang/en'
  import locale from 'element-ui/lib/locale'

  import Dashboard from '@/middleware/Dashboard'

  Vue.component('v-select', vSelect)
  // configure language
  locale.use(lang)

  export default {
    name: "newLayer",

    components: {
      "p-dash-layout": DashLayout,
      "p-popover-labels": PopoverLabels
    },

    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },

    data() {
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
        fullscreenLoading: false,
        typeSubmit: 'file',
        layer_id: null,
        is_the_admin: false,
        loading: '',
        optionsTypeGeom: [{
            value: 'MULTIPOINT',
            label: 'MultiPoint'
          }, {
            value: 'MULTILINESTRING',
            label: 'MultiLineString'
          }, {
            value: 'MULTIPOLYGON',
            label: 'MultiPolygon'
        }],
        optTpGeom: 'MULTIPOINT',
        optionsTypeColumn: [{
            value: 'text',
            label: 'TEXT'
          }, {
            value: 'numeric',
            label: 'NUMBER'
          }, {
            value: 'timestamp',
            label: 'DATE'
        }],
        optionsAttr: [{
          column_name: '',
          column_type: 'TEXT',
          id: 0
        }]
      }
    },

    mounted() {
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

      this.is_the_admin = this.user.is_the_admin
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
        this._openFullLoading()

        if(this.startDate === null || this.endDate === null)
          this._msgError("Datas são necessárias")
        else if(this.endColumnsName.length === 0 || this.startColumnsName.length === 0)
          this._msgError("Colunas são necessárias")
        else if(this.startDateMask === null || this.endDateMask === null)
          this._msgError("Mascaras são necessárias")
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
            vm.loading.close()
            vm.$message.success("A layer foi adicionada com sucesso!")
            vm.$router.push({
              path: '/dashboard/home'
            })
          }, function (cause) {
            Api().delete('/api/layer/'+vm.layer_id)
            let msg = ''
            if (cause.response.status === 403) msg = "Apenas o dono da camada ou administrador pode criar/atualizar uma coluna de tempo."
            else if (cause.response.status === 401) msg = "Você não tem permissão. É necessário uma autorização válida!"
            else msg = cause.toString()
            vm._msgError(msg)
          })
        }

      },
      Upload() {
        this._openFullLoading()
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

        if(document.getElementById("inputName").value === '')
          vm._msgError("O nome é necessário!")
        else if(!/^[a-zA-Z]{1}\w/.test(this.tableName))
          vm._msgError("O nome da layer NÃO pode começar com 'número' e nem possuir 'acentuação'!")
        else if(this.chosenKeywordsID.length === 0)
          vm._msgError("É necessário adicionar pelo menos uma palavra-chave!")

        else {
          if(vm.typeSubmit == 'file'){
            let file = document.getElementById("Upload").files[0]
            this.upload_from_file(file)
          } else
            this.upload_from_input()
        } 

      },
      async upload_from_file(file) {
        const vm = this

        if(file === undefined)
          vm._msgError("Um arquivo é necessário")
        else if(file.size > 104857600)
          vm._msgError("O arquivo não pode ter um tamanho maior do que 50MB!")
          
        else {
          try {
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
                          vm.loading.close();
                          //console.log(vm.columnsName)
                        })
                      }, function (cause) {
                        Api().delete('/api/layer/'+vm.layer_id)

                        let msg = ''
                        msg = cause.toString()
                        vm._msgError(msg)
                      })
                    }, function (cause) {
                      Api().delete('/api/layer/'+vm.layer_id)

                      let msg = ''
                      if (cause.response.status === 409) msg = "O arquivo precisa ser um .zip."
                      else if (cause.response.status === 400) msg = "ZIP inválido! É necessário existir um ShapeFile (.shp) dentro do ZIP."
                      else if (cause.response.status === 404) msg = "Not found .prj inside the zip."
                      else if (cause.response.status === 500) msg = "Problem when import a resource. Please, contact the administrator."
                      else msg = cause.toString()
                      vm._msgError(msg)
                  })
              }, function (cause) {
                Api().delete('/api/layer/'+vm.layer_id)

                let msg = ''
                msg = cause.toString()
                vm._msgError(msg)
              })
            }, function (cause) {
              let msg = ''
              if (cause.response.status === 409) msg = "O nome dessa camada já existe em nosso banco de dados!"
              else if (cause.response.status === 401) msg = "É necessário uma autorização válida!"
              else msg = cause.toString()
              vm._msgError(msg)
            })

          } catch (error) {
            this.$alert("Erro ao criar a camada, confira as informações inseridas. Caso o erro persista entre em contato com os administradores da plataforma!", "Erro ao cadastrar", {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: 'error'
            });
            this.loading.close()
          }
        }
      },
      async upload_from_input(){
        try {
          if(this.optTpGeom == null)
            this._msgError('Tipo da geometria é necessário!')

          else {  
            let attrs = await this.optionsAttr.filter( attr => attr.column_name == '' || attr.column_type == null || !/^[a-zA-Z]{1}\w/.test(attr.column_name))
            if(attrs.length > 0)
              this._msgError('Atributos Inválidos. Lembrando que cada atributo NÃO pode começar com "números" e possuir "acentuação"!')

            else {
              this.layer_id = null
              //CREATE LAYER
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

              //ADD USER IN LAYER
              let responseCreateLayer = await Dashboard.createLayer(layer)
              this.layer_id = responseCreateLayer.data.layer_id
              this.chosenUsers.forEach(async u => {
                let user_layer = {
                  'properties': {
                    'is_the_creator': 'false',
                    'user_id': u.user_id,
                    'layer_id': responseCreateLayer.data.layer_id
                  },
                  'type': 'UserLayer'
                }

                let responseUserLayer = await Dashboard.createUserLayer(user_layer)
              })

              //CREATE FEATUTE TABLE
              let properties = {}
              this.optionsAttr.map( async attr => {
                let attrName = attr.column_name.replace(/\s+/g, '_').toLowerCase()
                properties[attrName] = attr.column_type
              })

              let featureTableInfo = {
                'type': 'FeatureTable',
                'f_table_name': this.tableName,
                'properties': properties,
                'geometry': {
                    'crs': {'type': 'name', 'properties': {'name': 'EPSG:4326'}},
                    'type': this.optTpGeom
                }
              }

              let responseCreateFeatureTable = await Dashboard.createFeatureTable(featureTableInfo)

              let responseGetFeatureTable = await Dashboard.getFeatureTable(this.tableName)
              let vm = this
              responseGetFeatureTable.data.features.filter(e => {
                vm.columns = e.properties
                Object.getOwnPropertyNames(e.properties).forEach(c => {
                  if (c !== 'geom' && c !== '__ob__' && c !== 'changeset_id') {
                    vm.columnsName.push(c)
                  }
                })
                vm.shapeCorrect = true
                vm.loading.close()
              })
            }
          }

        } catch(error) {
          if(this.layer_id != null && this.layer_id != undefined)
            await Dashboard.deleteLayer(this.layer_id)

          if(error.response.status == 409) 
            this.$alert("Já existe uma camada com esse nome, por favor, escolha outro!", "Nome da camada", {
              dangerouslyUseHTMLString: true,
              confirmButtonText: 'OK',
              type: 'error'
            });
          else
            this.$alert("Erro ao criar a camada, confira as informações inseridas. Caso o erro persista entre em contato com os administradores da plataforma!", "Erro ao cadastrar", {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: 'error'
            });
          this.loading.close()
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
            if (cause.response.status === 400) msg = "O texto de referência já existe!"
            else msg = cause.toString()
            vm.$message.error(msg)
          })
        }
        //this.auxRef = null
      },
      addAttr() {
        this.optionsAttr.push({
          column_name: '',
          column_type: 'TEXT',
          id: this.optionsAttr.length
        })
      },
      async removeAttr(id) {
        this.optionsAttr = await this.optionsAttr.filter( attr => attr.id != id )
      },
      _msgError(msg){
        if(this.loading != '' && this.loading != null) 
          this.loading.close()
        this.$message.error(msg)
      },
      _openFullLoading(){
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .card-right
    .box-radio
      display: flex
      justify-content: center
      background: rgba(#000, 0.06)
      border-radius: 10px
      margin-bottom: 15px
      padding: 7px 0 0 0
    .box-layer-input, .box-layer-file
      padding: 7px 15px 20px 15px

    .box-layer-input
      .box-attr
        padding: 10px
        border: 1px solid #CCC
        clear: both
        input
          margin-bottom: 7.5px

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
