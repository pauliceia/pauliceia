<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')">
    <div class="row">

      <!-- layer -->
      <div class="col-sm-12" v-if="page === LAYER_PAGE">
        <div class="card">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.nav.newLayer') }}</h6><br>

            <form class="row">

              <!-- left form -->
              <div class="card-left col-sm-6">
                <div class="form-row">
                  <!-- name -->
                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>
                    &nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.nameD')" />
                    <input v-model="layer.name" @blur="saveLayerInTheStore()"
                           id="inputName" class="form-control">
                  </div>

                  <!-- keywords -->
                  <div class="form-group col-md-6">
                    <label class="mr-sm-2" for="keywordsSelect">
                      {{ $t('dashboard.newLayer.keywords') }}
                    </label>
                    <p-popover-labels :text="$t('dashboard.newLayer.keywordsD')" />
                    <button type="button" @click="goToNewKeywordPage()"
                            class="btn btn-outline-warning btn-sm add">
                      <md-icon>add_circle_outline</md-icon>
                    </button>
                    <v-select v-model="layer.keywords" :options="allKeywords" @blur="saveLayerInTheStore()"
                              label="name" track-by="name" id="keywordsSelect" multiple></v-select>
                  </div>
                </div>

                <!-- collaborators -->
                <div class="form-group">
                  <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.collaboratorsD')" />
                  <v-select v-model="layer.collaborators" :options="allUsers" @blur="saveLayerInTheStore()"
                            label="username" track-by="username" id="userSelect" multiple></v-select>
                </div>

                <!-- description -->
                <div class="form-group">
                  <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.descriptionD')" />
                  <textarea v-model="layer.description" @blur="saveLayerInTheStore()"
                            class="form-control" id="inputDescription" rows="3"> </textarea>
                </div>

                <!-- reference -->
                <div class="form-group">
                  <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.referenceD')" />
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <textarea v-model="reference_description" class="form-control"
                                id="inputReference" rows="3"></textarea>
                    </div>
                    <div class="form-group  col-md-12">
                      <a @click="addReference()" class="btn styleBtn"
                         style="position: relative; float: right">
                        {{ $t('dashboard.newLayer.add') }}
                      </a>
                    </div>
                  </div>
                </div>

                <!-- added references -->
                <div class="form-group" v-if="layer.references.length > 0">
                  <label for="inputReference">{{ $t('dashboard.newLayer.addedReferences') }}</label>
                  <ol>
                    <li v-for="reference in layer.references" :key="reference.id">
                      {{ reference.description }}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" @click="removeReference(reference.id)"
                          class="btn btn-outline-danger btn-sm del">
                        <md-icon>clear</md-icon>
                      </button>
                    </li>
                  </ol>
                </div>
              </div>

              <!-- right form -->
              <div class="card-right col-sm-6">
                <div class="btn styleBtn"
                     style="padding-left: 50px; padding-right: 50px; margin-bottom: 30px">
                  {{ $t('dashboard.newLayer.mountLayer.btnRadio.import') }}
                </div>
                <!--<div class="box-radio">-->
                  <!--<el-radio-group v-model="typeSubmit">-->
                    <!--<el-radio-button label="file">{{ $t('dashboard.newLayer.mountLayer.btnRadio.import') }}</el-radio-button>-->
                    <!--<el-radio-button label="input">{{ $t('dashboard.newLayer.mountLayer.btnRadio.create') }}</el-radio-button>-->
                  <!--</el-radio-group>-->
                <!--</div>-->

                <div class="box-layer-file" v-if="typeSubmit === 'file'">
                  <label for="Upload">
                    {{ $t('dashboard.newLayer.fileInput') }}
                  </label>
                  &nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.fileInputD')" />
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">{{ $t('dashboard.newLayer.zipFile') }}</span>
                    </div>
                    <div class="custom-file">
                      <label for="Upload" class="custom-file-label">
                        {{ file.name }}
                      </label>
                      <input type="file" accept=".zip" @change="processFile($event)"
                             id="Upload" class="custom-file-input">
                    </div>
                  </div>
                </div>

                <!--<div class="box-layer-input" v-if="typeSubmit === 'input'">-->
                <!-- <div class="box-layer-input" v-if="false">
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
                </div> -->

                <button type="button" @click="uploadLayer()" class="btn styleBtn"
                        style="color: #FFF; margin-right: 15px; float: right">
                  {{ $t('dashboard.newLayer.submit') }}
                </button>
                <button type="button" @click="cleanForm()" class="btn btn-warning"
                        style="color: #FFF; margin-right: 15px; float: right">
                  {{ $t('dashboard.newLayer.cleanForm') }}
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>

      <!-- temporal columns -->
      <div class="col-sm-6">
        <div class="card" v-if="page === TEMPORAL_COLUMNS_PAGE">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.newLayer.temporalColumns') }}</h5>
            <div class="card-text">
              <form>
                <!-- first row -->
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="start_date">{{ $t('dashboard.newLayer.lblStartDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDate')" />
                    <input type="date" v-model="temporal_columns.start_date"
                           id="start_date" class="form-control">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateColumn')" />
                    <v-select v-model="temporal_columns.start_date_column_name" :options="feature_table_columns"
                              track-by="" label="" id="start_date_column_name"></v-select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblStartDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.startDateMask')" />
                    <v-select v-model="temporal_columns.start_date_mask" :options="allMasks"
                              track-by="id" label="mask" id="start_date_mask"></v-select>
                  </div>
                </div>

                <!-- second row -->
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="end_date">{{ $t('dashboard.newLayer.lblEndDate') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDate')" />
                    <input type="date" v-model="temporal_columns.end_date" id="end_date" class="form-control">
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateColumn') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateColumn')" />
                    <v-select v-model="temporal_columns.end_date_column_name" :options="feature_table_columns"
                              track-by="" label="" id="end_date_column_name"></v-select>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="userSelect">{{ $t('dashboard.newLayer.lblEndDateMask') }}</label>&nbsp;
                    <p-popover-labels :text="$t('dashboard.newLayer.endDateMask')" />
                    <v-select v-model="temporal_columns.end_date_mask" :options="allMasks"
                              track-by="id" label="mask" id="end_date_mask"></v-select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col align-self-end">
                    <br>
                    <button type="button" @click="uploadTemporalColumns()" class="btn btn-primary">
                      {{ $t('dashboard.newLayer.submit') }}
                    </button>
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
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import Vue from 'vue'

import Api from '@/middleware/ApiVGI'
import Dashboard from '@/middleware/Dashboard'
import DashLayout from '@/views/layouts/dashboard'
import PopoverLabels from '@/views/components/dashboard/PopoverLabels'

Vue.component('v-select', vSelect)
// configure language
locale.use(lang)

function doesTheStringHaveSpecialChars(string) {
  /*
  To be a valid string, it must:
  - start with a character without number (i.e. '^[a-zA-Z_]')
  - end with a character that can have numbers (i.e. '[a-zA-Z0-9_]+$')
  - have one or more occurrences of that letter (i.e. '+')
  - not have special characters (i.e. '^[a-zA-Z_]+[a-zA-Z0-9_]+$')

  Return: `True` if the string has some special character, else it returns `False`
  */

  let english_checker = /^[a-zA-Z_]+[a-zA-Z0-9_]+$/

  return !(english_checker.test(string))
}

export default {
  name: "newLayer",
  components: {
    "p-dash-layout": DashLayout,
    "p-popover-labels": PopoverLabels
  },
  computed: {
    ...mapState('auth', ['user']),

    // rename the default name of stored data
    ...mapState({
      storedLayer: state => state.dashboardNewLayer.layer,
    }),

    fTableName(){
      let tableName = this.layer.name.trim().replace(/ /g, '_').toLocaleLowerCase()

      // Replace accent letters by simple ones.
      // Source: https://stackoverflow.com/a/37511463
      return tableName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
  },
  data() {
    return {
      // layer form
      layer: {
        id: null,
        name: null,
        description: null,
        collaborators: [],
        keywords: [],
        references: []
      },
      reference_description: null,
      file: {
        name: this.$t('dashboard.newLayer.chooseFile')
      },
      allKeywords: [],
      allUsers: [],

      // temporal columns form
      temporal_columns: {
        start_date: null,
        end_date: null,
        start_date_column_name: null,
        end_date_column_name: null,
        start_date_mask: null,
        end_date_mask: null
      },
      feature_table_columns: [],
      allMasks: [],

      // input form
      optTpGeom: 'MULTIPOINT',
      optionsAttr: [{
        column_name: '',
        column_type: 'TEXT',
        visibleRemove: false,
        id: 0
      }],
      // optionsTypeGeom: [{
      //     value: 'MULTIPOINT',
      //     label: 'MultiPoint'
      //   }, {
      //     value: 'MULTILINESTRING',
      //     label: 'MultiLineString'
      //   }, {
      //     value: 'MULTIPOLYGON',
      //     label: 'MultiPolygon'
      // }],
      // optionsTypeColumn: [{
      //     value: 'text',
      //     label: 'TEXT'
      //   }, {
      //     value: 'numeric',
      //     label: 'NUMBER'
      //   }, {
      //     value: 'timestamp',
      //     label: 'DATE'
      // }],

      // pages control
      LAYER_PAGE: 1,
      TEMPORAL_COLUMNS_PAGE: 2,
      page: null,

      // other
      typeSubmit: 'file',
      loading: null
      // finished: 1,
    }
  },
  mounted() {
    // open layer page
    this.page = this.LAYER_PAGE

    // get stored properties
    if (this.storedLayer !== null)
      this.layer = this.storedLayer

    // get all users from database, except the current one
    Api().get('/api/user').then(response => {
      // save the information of all users, except the current one
      response.data.features.forEach(u => {
        if (u.properties.id !== this.user.id)
          this.allUsers.push(u.properties)
      })
    })

    // get all available keywords
    Api().get('/api/keyword').then(response => {
      this.allKeywords = response.data.features.map(k => k.properties)
    })

    // get all available masks
    Api().get('/api/mask').then(response => {
      this.allMasks = response.data.features.map(m => m.properties)
    })
  },
  methods: {
    goToNewKeywordPage() {
      // all form information is stored in the state by the
      // "@blur"s in the template (i.e. `@blur="saveLayerInTheStore()"`)

      this.$router.push({name: 'Keyword', params: {name: 'NewLayer'}})
    },
    saveLayerInTheStore(){
      // saves layer data in the store when elements lose their focus by @blur
      this.$store.dispatch('dashboardNewLayer/setLayer', this.layer)
    },
    cleanDataInTheStore(){
      // cleans the store data
      this.$store.dispatch('dashboardNewLayer/setLayer',  null)
    },
    processFile(event){
      // I get the only one chose file
      this.file = event.target.files[0]
    },
    cleanForm(){
      // remove all references from database before clean the form
      this.layer.references.forEach(reference => {
        this.removeReference(reference.id)
      })

      this.layer.name = null
      this.layer.description = null
      this.layer.collaborators = []
      this.layer.keywords = []
      this.layer.references = []
      this.reference_description = null

      this.saveLayerInTheStore()
    },
    uploadLayer() {  //Cadastrar a primeira parte da Camada
      this.__openFullLoading()

      if (this.layer.name === null || this.layer.name === '') {
        this.__errorMessage("O nome da camada é obrigatório!")

      } else if (this.layer.name.length < 5 || this.layer.name.length > 63) {
        this.__errorMessage("O nome da camada deve ter entre 5 e 63 caracteres!")

      } else if (doesTheStringHaveSpecialChars(this.layer.name)) {
        this.__errorMessage("O nome da camada NÃO pode começar com `número` e nem conter `caracteres especiais`!")

      } else if (this.layer.keywords.length === 0) {
        this.__errorMessage("É obrigatório adicionar pelo menos uma palavra-chave!")

      } else if (this.layer.description === null || this.layer.description === '') {
        this.__errorMessage("Descrição da camada não pode estar vazia!")

      } else if (this.layer.description.length < 5) {
        this.__errorMessage("Descrição da camada não pode ter menos do que 5 caracteres!")

      } else {
        if (this.typeSubmit === 'file') {   //Importando o arquivo
          this.uploadLayerFromFile()
        } else {                         //Criando a camada em branco
          this.uploadLayerFromInput()
        }
      }
    },
    uploadLayerFromFile() {
      if (!('size' in this.file)) {
        this.__errorMessage("Um arquivo é necessário!")
        return
      } else if (this.file.size > 104857600) {  // 104857600 === 50mb
        this.__errorMessage("O arquivo não pode ter um tamanho maior do que 50MB!")
        return
      }

      // this.timeout_upload()

      let layer = {
        'properties': {
          ...this.layer,
          'f_table_name': this.fTableName,
          'source_description': this.layer.description,
        },
        'type': 'Layer'
      }

      // add new layer in the database
      Api().post('/api/layer/create', layer).then(response => {
        this.layer.id = response.data

        let changeset = {
          'properties': {
            'layer_id': this.layer.id,
            'description': 'Creating layer ' + this.layer.id
          },
          'type': 'Changeset'
        }

        Api().post('/api/changeset/create', changeset).then(response => {
          Api().post(
            'api/import/shp/?f_table_name=' + this.fTableName +
                '&file_name=' + this.file.name + '&changeset_id=' + response.data,
            this.file
          ).then(() => {

            // get the Shapefile columns names
            Api().get('/api/feature_table/?f_table_name=' + this.fTableName).then(response => {
              // this returns an object where the key is the column name
              // and the value is its type (e.g. `id: integer`)
              this.feature_table_columns = response.data.features[0].properties

              // get just the column names, without their types
              this.feature_table_columns = Object.getOwnPropertyNames(this.feature_table_columns).filter(
                // these column names are reserved, then ignore them
                key => key !== 'geom' && key !== '__ob__' && key !== 'changeset_id'
              )

               // go to temporal columns page
              this.page = this.TEMPORAL_COLUMNS_PAGE
              this.__closeFullLoading()
              this.cleanDataInTheStore()
              // this.finished = 1
            }).catch(cause => {
              // error in get('/api/feature_table')
              this.removeLayerAfterError(cause)
            })

          }).catch(cause => {
            // error `post('api/import/shp')`
            this.removeLayerAfterError(cause)
          })
        }).catch(cause => {
          // error `post('/api/changeset/create')`
          this.removeLayerAfterError(cause)
        })
      }).catch(cause => {
        // error `.post('/api/layer/create'`
        this.__closeFullLoading()
        this.__showErrorMessages(cause)
        // this.finished = 1
      })
    },
    async uploadLayerFromInput(){
      try {
        if (this.optTpGeom == null) {
          this.__errorMessage('Tipo da geometria é necessário!')
        } else {
          let getNullAcenOrNumber = await this.optionsAttr.filter(
            attr => attr.column_name === '' || attr.column_type == null || !(/^[A-Za-z]{1}\w/.test(attr.column_name)) || (/[^a-zA-Z0-9_]/.test(attr.column_name))
          )

          let getWordNative = await this.optionsAttr.filter(
            attr => ['id', 'changeset_id', 'version'].some(attrName => attrName === attr.column_name)
          )

          if (getNullAcenOrNumber.length > 0) {
            this.__errorMessage('Atributos Inválidos. Lembrando que cada atributo NÃO pode começar com "números" e possuir "acentuação"!')
          } else if (getWordNative.length > 0) {
            this.__errorMessage('Atributos Inválidos. O nome do do atributo precisa ser diferente: id, changeset_id e version!')
          } else {
            // this.timeout_upload()

            //CREATE LAYER
            let layer = {
              'properties': {
                ...this.layer,
                'f_table_name': this.fTableName,
                'source_description': this.layer.description,
              },
              'type': 'Layer'
            }

            //ADD USER IN LAYER
            let responseCreateLayer = await Dashboard.createLayer(layer)
            this.layer.id = responseCreateLayer.data

            //CREATE FEATUTE TABLE
            let properties = {}
            this.optionsAttr.map( async attr => {
              let attrName = attr.column_name.replace(/\s+/g, '_').toLowerCase()
              properties[attrName] = attr.column_type
            })

            let featureTableInfo = {
              'type': 'FeatureTable',
              'f_table_name': this.fTableName,
              'properties': properties,
              'geometry': {
                  'crs': {'type': 'name', 'properties': {'name': 'EPSG:4326'}},
                  'type': this.optTpGeom
              }
            }

            // let responseCreateFeatureTable = await Dashboard.createFeatureTable(featureTableInfo)
            await Dashboard.createFeatureTable(featureTableInfo)

            let responseGetFeatureTable = await Dashboard.getFeatureTable(this.fTableName)

            responseGetFeatureTable.data.features.filter(e => {
              Object.getOwnPropertyNames(e.properties).forEach(c => {
                if (c !== 'geom' && c !== '__ob__' && c !== 'changeset_id') {
                  this.feature_table_columns.push(c)
                }
              })
              // go to temporal columns page
              this.page = this.TEMPORAL_COLUMNS_PAGE
              this.__closeFullLoading()
            })
          }
        }

        this.cleanDataInTheStore()
      } catch(error) {
        if(this.layer.id != null && this.layer.id !== undefined)
          await Dashboard.deleteLayer(this.layer.id)

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
        this.__closeFullLoading()
      }
    },
    removeLayerAfterError(cause){
      Api().delete('/api/layer/' + this.layer.id)

      this.__closeFullLoading()
      this.__showErrorMessages(cause)
      // this.finished = 1
    },
    uploadTemporalColumns(){  // cadastrar a segunda parte da camada - temporal columns
      this.__openFullLoading()

      if ((this.temporal_columns.start_date === null || this.temporal_columns.end_date === null) ||
          (this.temporal_columns.start_date === "" || this.temporal_columns.end_date === "")) {
        this.__errorMessage("O preenchimento das datas é obrigatório!")
        return
      }

      // this.timeout_upload()

      let temporal_columns = {
        'properties': {...this.temporal_columns, 'f_table_name': this.fTableName},
        'type': 'TemporalColumns'
      }

      Api().post('/api/temporal_columns/create', temporal_columns).then(() => {
        this.$message.success("A camada foi adicionada com sucesso!")
        this.$router.push({path: '/dashboard/home'})
      }).catch(cause => {
        Api().delete('/api/layer/' + this.layer.id)
        this.__showErrorMessages(cause)
      }).finally(() => {
        // this.finished = 1
        this.__closeFullLoading()
      })
    },
    addReference() {
      if (this.reference_description === null || this.reference_description === '') {
        this.$message.error("Descrição da referência não pode ser vazia!")
        return
      } else if (this.reference_description.length < 5) {
        this.$message.error("A referência precisa ter pelo menos 5 caracteres!")
        return
      }

      this.__openFullLoading()

      let reference = {
        'properties': {'description': this.reference_description},
        'type': 'Reference'
      }

      Api().post('/api/reference/create', reference).then(response => {
        this.layer.references.push({
          id: response.data,
          description: this.reference_description
        })
        this.reference_description = null
        this.saveLayerInTheStore()
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.__closeFullLoading()
      })
    },
    removeReference(reference_id) {
      this.__openFullLoading()

      // remove reference from the database
      Api().delete('/api/reference/' + reference_id).then(() => {
        // remove the reference from the local list of references
        this.layer.references = this.layer.references.filter(r => r.id !== reference_id)
        // save the references in the state
        this.saveLayerInTheStore()
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.__closeFullLoading()
      })
    },
    __errorMessage(msg){
      this.__closeFullLoading()

      this.$message.error({
        message: msg,
        center: true,
        duration: 10000,
        showClose: true,
      })
    },
    __showErrorMessages(cause) {
      if (cause.response !== undefined && 'data' in cause.response)
        this.__errorMessage(cause.response.data.toString())
      else
        this.__errorMessage(cause.toString())

      if (cause.response !== undefined && cause.response.status >= 500)
        this.__errorMessage("Internal error. Please, contact the administrator.")
    },
    __openFullLoading(){
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    __closeFullLoading(){
      if (this.loading !== null)
        this.loading.close()
    }
    // async removeAttr(id) {
    //   this.optionsAttr = await this.optionsAttr.filter( attr => attr.id != id )
    // },
    // addAttr() {
    //   this.optionsAttr.push({
    //     column_name: '',
    //     column_type: 'TEXT',
    //     visibleRemove: false,
    //     id: this.optionsAttr.length
    //   })
    // },
    // timeout_upload(){ //Erro de estouro de tempo ao criar a nova camada
    //   this.finished = 0

    //   setTimeout(_=>{
    //     if(this.finished === 0){
    //       Api().delete('/api/layer/' + this.layer.id)
    //       this.__closeFullLoading()
    //       this.__errorMessage("Timeout! Caso o erro persista entre em contato com os administradores da plataforma!")
    //     }
    //   }, 30000);
    // },
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
