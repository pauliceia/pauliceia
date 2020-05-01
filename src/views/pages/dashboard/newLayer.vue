<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')">
    <div class="row">

      <div class="col-sm-12" v-if="shapeCorrect === false">
        <div class="card">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.nav.newLayer') }}</h6><br>

            <form class="row">
              <div class="card-left col-sm-6">
                <div class="form-row">
                  <!-- name -->
                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.nameD')" />
                    <input :value="name" @blur="saveName()" class="form-control"  id="inputName"><!--placeholder="Name">-->
                  </div>

                  <!-- keywords -->
                  <div class="form-group col-md-6">
                    <label class="mr-sm-2" for="keywordsSelect">{{ $t('dashboard.newLayer.keywords') }}</label>
                    <p-popover-labels :text="$t('dashboard.newLayer.keywordsD')" />
                    <button @click="newKeyword()" class="btn btn-outline-warning btn-sm add" type="button">
                      <md-icon>add_circle_outline</md-icon>
                    </button>
                    <v-select :options="all_keywords" @blur="saveKeywords()" id="keywordsSelect" label="name" multiple
                      track-by="name" v-model="keywords">
                    </v-select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.collaboratorsD')" />
                  <v-select v-model="chosenUsers" :options="users" @blur="saveUsers()" id="userSelect"
                      label="username" track-by="username" multiple
                  ></v-select>
                </div>

                <!-- description -->
                <div class="form-group">
                  <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.descriptionD')" />
                  <textarea :value="description" @blur="saveDescription()" class="form-control" id="inputDescription" rows="3"> </textarea>
                </div>

                <!-- reference -->
                <div class="form-group">
                  <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.referenceD')" />
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <textarea class="form-control" id="inputReference" rows="3"
                                v-model="reference_description"
                      ></textarea>
                    </div>
                    <div class="form-group  col-md-12">
                      <a @click="addReference()" class="btn styleBtn" style="position: relative; float: right">{{ $t('dashboard.newLayer.add') }}</a>
                    </div>
                  </div>
                </div>

                <!-- added references -->
                <div class="form-group" v-show="references.length !== 0">
                  <label for="inputReference">{{ $t('dashboard.newLayer.addedReferences') }}</label>
                  <ol>
                    <li v-for="reference in references" :key="reference.reference_id">
                      {{ reference.description }}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button @click="removeReference(reference.reference_id)" class="btn btn-outline-danger btn-sm del" type="button">
                        <md-icon>clear</md-icon>
                      </button>
                    </li>
                  </ol>
                </div>
              </div><!--end card left-->

              <div class="card-right col-sm-6">
                <div class="btn styleBtn" style="padding-left: 50px; padding-right: 50px; margin-bottom: 30px">{{ $t('dashboard.newLayer.mountLayer.btnRadio.import') }}</div>
                <!--<div class="box-radio">-->
                  <!--<el-radio-group v-model="typeSubmit">-->
                    <!--<el-radio-button label="file">{{ $t('dashboard.newLayer.mountLayer.btnRadio.import') }}</el-radio-button>-->
                    <!--<el-radio-button label="input">{{ $t('dashboard.newLayer.mountLayer.btnRadio.create') }}</el-radio-button>-->
                  <!--</el-radio-group>-->
                <!--</div>-->

                <div class="box-layer-file" v-if="typeSubmit == 'file'">
                  <label for="Upload">{{ $t('dashboard.newLayer.fileInput') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.fileInputD')" />
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">{{ $t('dashboard.newLayer.zipFile') }}</span>
                    </div>
                    <div class="custom-file">
                      <input @change="updateName()" accept=".zip" class="custom-file-input" id="Upload" type="file">
                      <label class="custom-file-label" for="Upload">{{fname}}</label>
                    </div>
                  </div>
                </div> <!--end box-file-->

                <!--<div class="box-layer-input" v-if="typeSubmit == 'input'">-->
                <div class="box-layer-input" v-if="false">
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
                            <input class="form-control" disabled value="geom">
                          </div>
                          <div class="col-5">
                            <el-select style="width: 100%" v-model="optTpGeom">
                              <el-option
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                v-for="item in optionsTypeGeom">
                              </el-option>
                            </el-select>
                          </div>
                        </div>

                        <div :key="attr.id" class="col-12 row" v-for="attr in optionsAttr">
                          <div class="col-5">
                            <input :placeholder="$t('dashboard.newLayer.mountLayer.boxAttr.lblColumnName')" class="form-control" v-model="attr.column_name">
                          </div>
                          <div class="col-5">
                            <el-select style="width: 100%" v-model="attr.column_type">
                              <el-option
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                v-for="item in optionsTypeColumn">
                              </el-option>
                            </el-select>
                          </div>
                          <div class="col-2">
                          <el-popover
                            placement="top"
                            v-model="attr.visibleRemove"
                            width="160">
                            <p>{{ $t('dashboard.newLayer.mountLayer.boxAttr.msgAlertRemove') }}</p>
                            <div style="text-align: right; margin: 0">
                              <el-button @click="attr.visibleRemove = false" size="mini" type="text">{{ $t('dashboard.newLayer.mountLayer.boxAttr.btnAlert.no') }}</el-button>
                              <el-button @click="removeAttr(attr.id)" size="mini" type="primary">{{ $t('dashboard.newLayer.mountLayer.boxAttr.btnAlert.yes') }}</el-button>
                            </div>

                            <el-button circle icon="el-icon-delete" size="small" slot="reference" type="danger"></el-button>
                          </el-popover>
                          </div>
                        </div>

                      </div>
                      <button @click="addAttr()" class="btn btn-info btn-sm" type="button">+ ADD</button>
                  </div>
                </div><!--end box-input-->

                <button @click="Upload()" class="btn styleBtn" style="color: #FFF; margin-right: 15px; float: right" type="button"> {{ $t('dashboard.newLayer.submit') }}</button>
              </div><!--end card right-->
            </form>

          </div>
        </div>
      </div><!--end box newLayer-->

      <div class="col-sm-6"><!--start bounding box temporal-->
        <div class="card" v-if="shapeCorrect">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.newLayer.temporalColumns') }}</h5>
            <div class="card-text">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">{{ $t('dashboard.newLayer.lblStartDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDate')" />
                    <input class="form-control" id="start_date" type="date" v-model="startDate">
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateColumn')" />
                    <v-select :options="columnsName" id="start_date_column_name" label="" track-by=""
                              v-model="startColumnsName"></v-select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateMask')" />
                    <v-select :options="dateMask" id="start_date_mask" label="mask" track-by="mask"
                              v-model="startDateMask"></v-select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputName">{{ $t('dashboard.newLayer.lblEndDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDate')" />
                    <input class="form-control" id="end_date" type="date" v-model="endDate">
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateColumn')" />
                    <v-select :options="columnsName" id="end_date_column_name" label="" track-by=""
                              v-model="endColumnsName"></v-select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateMask')" />
                    <v-select :options="dateMask" id="end_date_mask" label="mask" track-by="mask"
                              v-model="endDateMask"></v-select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col align-self-end">
                    <br>
                    <a @click="Upload2()" class="btn btn-primary" href="#">{{ $t('dashboard.newLayer.submit') }}</a>
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
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('dashboard', ['name', 'key', 'ref', 'usersSaved', 'description'])
    },
    data() {
      return {
        tableName: null,
        all_keywords: [],
        reference_description: null,
        users: [],
        chosenUsers: [],
        references: [],
        keywords: [],
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
        loading: '',
        finished: 1,
        visibleRemove: false,
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
          visibleRemove: false,
          id: 0
        }]
      }
    },
    mounted() {
      this.shapeCorrect = false

      // get the information of all users, except the current one
      // Api().get('/api/user').then(response => {
      //   this.users = response.data.features.filter(u => {
      //     if (u.properties.user_id !== this.user.user_id) {
      //       return u.properties
      //     }
      //   })
      //   console.log('this.users: ', this.users)
      // })

      Api().get('/api/user').then(response => {
        response.data.features.forEach(u => {
          if (u.properties.user_id !== this.user.user_id)
            this.users.push(u.properties)
        })
      })

      // get all the available keywords
      Api().get('/api/keyword').then(response => {
        this.all_keywords = response.data.features.map(k => k.properties)
      })

      // get all the available masks
      Api().get('/api/mask').then(response => {
        this.dateMask = response.data.features.map(m => m.properties)
      })

      this.keywords =  this.key
      this.references = this.ref
      this.chosenUsers = this.usersSaved
    },
    methods: {
      newKeyword() {
        this.saveName()
        //Limpar valores: this.$store.dispatch('dashboard/setName',  "")
        this.$router.push({
          name: 'Keyword',
          params: {name: 'NewLayer'}
        })
      },
      clearData(){
        // this method cleans the store data

        this.$store.dispatch('dashboard/setName',  "")
        this.$store.dispatch('dashboard/setUsers',  [])
        this.$store.dispatch('dashboard/setReferences',  [])
        this.$store.dispatch('dashboard/setKeywords',  [])
        this.$store.dispatch('dashboard/setDescription',  "")
      },
      saveName(){ //Salvar os dados no Store
        this.$store.dispatch('dashboard/setName', document.getElementById("inputName").value)
      },
      saveUsers(){  //Salvar os dados no Store
        this.$store.dispatch('dashboard/setUsers',  this.chosenUsers)
      },
      saveReferences(){
        // this method stores the references in the store
        this.$store.dispatch('dashboard/setReferences', this.references)
      },
      saveDescription(){  //Salvar os dados no Store
        this.$store.dispatch('dashboard/setDescription',  document.getElementById("inputDescription").value)
      },
      saveKeywords(){ //Salvar os dados no Store
        this.$store.dispatch('dashboard/setKeywords', this.keywords)
      },
      updateName() {  //Salvar os dados no Store
        this.fname = document.getElementById("Upload").files[0].name
      },
      Upload2(){  //Cadastrar a segunda parte da camada - time column
        this._openFullLoading()

        if (this.startDate === null || this.endDate === null) {
          this._msgError("Datas são necessárias")
        } else {
          this.timeout_upload()

          let temporalColumns = {
            'properties': {
              'f_table_name': this.tableName,
              'start_date': this.startDate,
              'end_date': this.endDate,
              'end_date_column_name': this.endColumnsName!=null ? this.endColumnsName[0] : null,
              'start_date_column_name': this.startColumnsName!=null ? this.startColumnsName[0] : null,
              'start_date_mask_id': this.startDateMask!=null ? this.startDateMask.mask_id : null,
              'end_date_mask_id': this.endDateMask!=null ? this.endDateMask.mask_id : null,
            },
            'type': 'TemporalColumns'
          }

          Api().post('/api/temporal_columns/create', temporalColumns).then(response => {
            this.loading.close()
            this.$message.success("A layer foi adicionada com sucesso!")
            this.finished = 1
            this.$router.push({
              path: '/dashboard/home'
            })
          }, cause => {
            Api().delete('/api/layer/' + this.layer_id)

            this.loading.close()
            this.finished = 1

            if (cause.response.status === 403)
              this._msgError("Apenas o dono da camada ou administrador pode criar/atualizar uma coluna de tempo.")
            else if (cause.response.status === 401)
              this._msgError("Você não tem permissão. É necessário uma autorização válida!")
            else
              this._msgError(cause.toString())
          })
        }

      },
      timeout_upload(){ //Erro de estouro de tempo ao criar a nova camada
        this.finished = 0

        setTimeout(_=>{
          if(this.finished === 0){
            Api().delete('/api/layer/' + this.layer_id)
            this.loading.close();
            this._msgError("Timeout! Caso o erro persista entre em contato com os administradores da plataforma!")
          }
        }, 20000);
      },
      Upload() {  //Cadastrar a primeira parte da Camada
        this._openFullLoading()

        let tableName2 = document.getElementById("inputName").value

        if (tableName2.indexOf(' ') === 0)
          tableName2 = tableName2.slice(1)
        if (tableName2.lastIndexOf(' ') === tableName2.length - 1)
          tableName2 = tableName2.slice(0, tableName2.length - 1)

        tableName2 = tableName2.split(" ").join("_")
        tableName2 = tableName2.toLocaleLowerCase()
        this.tableName = tableName2

        if (document.getElementById("inputName").value === '') {
          this._msgError("O nome é necessário!")
        } else if(!/^[a-zA-Z]{1}\w/.test(this.tableName) || (/[^a-zA-Z0-9_]/.test(this.tableName))) {
          this._msgError("O nome da layer NÃO pode começar com 'número' e nem possuir 'acentuação'!")
        } else if (this.keywords.length === 0) {
          this._msgError("É necessário adicionar pelo menos uma palavra-chave!")
        } else {
          if (this.typeSubmit === 'file') {   //Importando o arquivo
            let file = document.getElementById("Upload").files[0]
            this.upload_from_file(file)
          } else {                         //Criando a camada em branco
            this.upload_from_input()
          }
        }
      },
      async upload_from_file(file) {
        if (file === undefined) {
          this._msgError("Um arquivo é necessário!")
        } else if (file.size > 104857600) {  // 104857600 == 50mb
          this._msgError("O arquivo não pode ter um tamanho maior do que 50MB!")
        } else {
          this.timeout_upload()

          try {
            let layer = {
              'type': 'Layer',
              'properties': {
                'layer_id': -1,
                'f_table_name': this.tableName,
                'name': document.getElementById("inputName").value,
                'description': document.getElementById("inputDescription").value,
                'source_description': document.getElementById("inputDescription").value,
                'reference': this.references.map(r => r.reference_id),
                'keyword': this.keywords.map(k => k.keyword_id),
              }
            }

            Api().post('/api/layer/create', layer).then(response => {   //Cadastrando nova Layer
              this.layer_id = response.data.layer_id

              this.chosenUsers.forEach(u => {
                let user_layer = {
                  'properties': {
                    'is_the_creator': 'false',
                    'user_id': u.user_id,
                    'layer_id': response.data.layer_id
                  },
                  'type': 'UserLayer'
                }

                Api().post('/api/user_layer/create', user_layer)
              })

              let changeset = {
                'properties': {
                  'changeset_id': -1,
                  'layer_id': response.data.layer_id,
                  'description': 'Creating layer_' + response.data.layer_id
                },
                'type': 'Changeset'
              }

              Api().post('/api/changeset/create', changeset).then(response => {
                Api().post('api/import/shp/?f_table_name=' + this.tableName + '&file_name=' + file.name + '&changeset_id=' + response.data.changeset_id, file).then(response => {
                  Api().get('/api/feature_table/?f_table_name=' + this.tableName).then(response => {    //Pega as colunas do shapefile enviado
                    response.data.features.filter(e => {
                      this.columns = e.properties

                      Object.getOwnPropertyNames(this.columns).forEach(column => {
                        // add the shapefile file columns inside the property
                        if (column !== 'geom' && column !== '__ob__' && column !== 'changeset_id')
                          this.columnsName.push(column)
                      })

                      this.shapeCorrect = true;
                      this.loading.close();
                      this.clearData()
                      this.finished = 1
                    })
                  }, cause => {
                    // error in get('/api/feature_table')

                    Api().delete('/api/layer/' + this.layer_id)

                    this.loading.close()
                    this.finished = 1
                    this._msgError(cause.toString())
                  })
                }, cause => {
                  // error `post('api/import/shp')`

                  Api().delete('/api/layer/' + this.layer_id)
                  Api().delete('/api/changeset/?changeset_id=' + response.data.changeset_id)

                  this.loading.close()
                  this.finished = 1

                  if (cause.response.status === 400)
                    this._msgError("1) ZIP inválido! É necessário existir um ShapeFile (.shp) dentro do ZIP." +
                                "2) The Shapefile has an invalid attribute: . It has a special character. Please, rename it.")
                  else if (cause.response.status === 403)
                    this._msgError("Just the owner of the layer or administrator can create/update a feature table or do a import.")
                  else if (cause.response.status === 404)
                    this._msgError("Not found .prj inside the zip.")
                  else if (cause.response.status === 409)
                    this._msgError("1) File is not a zip file." +
                                "2) It was not possible to find one EPSG from the .prj." +
                                "3) There is not a list of codes in the result. So it is an invalid .prj." +
                                "4) The Shapefile has the 'version' or 'changeset_id' attribute. Please, rename them." +
                                "5) Shapefile is not inside the default city of the project.")
                  else if (cause.response.status === 500)
                    this._msgError("1) Problem when to import the Shapefile. Fiona was not able to read the Shapefile. One reason can be that the Shapefile has an empty column name, so name it." +
                                "2) Some geometries of the Shapefile are with problem. Please, verify them and try to import again later." +
                                "3) Problem when import a resource. Please, contact the administrator.")
                  else if (cause.response.status === 503)
                    this._msgError("Problem with the prj2epsg web service.")
                  else
                    this._msgError(cause.toString())
                })
              }, cause => {
                // error `post('/api/changeset/create')`

                Api().delete('/api/layer/' + this.layer_id)

                this.loading.close()
                this.finished = 1

                if (cause.response.status === 500)
                  this._msgError("Problem when create a resource. Please, contact the administrator.")
                else
                  this._msgError(cause.toString())
              })
            }, cause => {
              // error `.post('/api/layer/create'`

              this.finished = 1
              this.loading.close();

              if (cause.response.status === 409)
                this._msgError("1) The table name already exist or is a reserved word. Please, rename it. 2) The maximum of keywords allowed to a layer are 5.")
              else if (cause.response.status === 500)
                this._msgError("Problem when create a resource. Please, contact the administrator.")
              else if (cause.response.status === 401)
                this._msgError("É necessário uma autorização válida!")
              else
                this._msgError(cause.toString())
            })

          } catch (error) {
            this.$alert(
              "Erro ao criar a camada, confira as informações inseridas. Caso o erro persista entre em contato com os administradores da plataforma!",
              "Erro ao cadastrar",
              {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type: 'error'
              }
            );
            this.finished = 1
            this.loading.close()
          }
        }
      },
      async upload_from_input(){
        const vm = this

        try {
          if (this.optTpGeom == null) {
            this._msgError('Tipo da geometria é necessário!')
          } else {
            let getNullAcenOrNumber = await this.optionsAttr.filter(
              attr => attr.column_name === '' || attr.column_type == null || !(/^[A-Za-z]{1}\w/.test(attr.column_name)) || (/[^a-zA-Z0-9_]/.test(attr.column_name))
            )

            let getWordNative = await this.optionsAttr.filter(
              attr => ['id', 'changeset_id', 'version'].some(attrName => attrName === attr.column_name)
            )

            if (getNullAcenOrNumber.length > 0) {
              this._msgError('Atributos Inválidos. Lembrando que cada atributo NÃO pode começar com "números" e possuir "acentuação"!')
            } else if (getWordNative.length > 0) {
              this._msgError('Atributos Inválidos. O nome do do atributo precisa ser diferente: id, changeset_id e version!')
            } else {
              this.timeout_upload()

              //CREATE LAYER
              let layer = {
                'type': 'Layer',
                'properties': {
                  'layer_id': -1,
                  'f_table_name': this.tableName,
                  'name': document.getElementById("inputName").value,
                  'description': document.getElementById("inputDescription").value,
                  'source_description': document.getElementById("inputDescription").value,
                  'reference': this.references.map(r => r.reference_id),
                  'keyword': this.keywords.map(k => k.keyword_id),
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
          vm.clearData()

        }
        catch(error) {
          console.log(error)
          if(this.layer_id != null && this.layer_id !== undefined)
            await Dashboard.deleteLayer(this.layer_id)

          if(error.response.status === 409)
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
      addReference() {
        if (this.reference_description != null) {
          let new_reference = {
            'type': 'Reference',
            'properties': { 'reference_id': -1, 'description': this.reference_description }
          }

          Api().post('/api/reference/create', new_reference).then(response => {
            this.references.push(
              {
                reference_id: response.data.reference_id,
                description: this.reference_description
              }
            )
            this.reference_description = null
            this.saveReferences()
          }, cause => {
            if (cause.response.status === 400)
              this.$message.error("O texto de referência já existe!")
            else
              this.$message.error(cause.toString())
          })
        }
      },
      removeReference(reference_id) {
        Api().delete('/api/reference/' + reference_id).then(response => {})

        // remove the `reference_id` from the references lists
        this.references = this.references.filter(r => r.reference_id !== reference_id)
        // save the references in the state
        this.saveReferences()
      },
      addAttr() {
        this.optionsAttr.push({
          column_name: '',
          column_type: 'TEXT',
          visibleRemove: false,
          id: this.optionsAttr.length
        })
      },
      async removeAttr(id) {
        this.optionsAttr = await this.optionsAttr.filter( attr => attr.id != id )
      },
      _msgError(msg){
        if(this.loading != '' && this.loading != null)
          this.loading.close()

        this.$message.error({
          message: msg,
          center: true,
          duration: 8000,
          showClose: true,
        })
      },
      _openFullLoading(){
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
    },
    components: {
      "p-dash-layout": DashLayout,
      "p-popover-labels": PopoverLabels
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

  .styleBtn
    background-color: #ff6107
    border-color: #ff6107
    color: #ffffff !important


</style>
