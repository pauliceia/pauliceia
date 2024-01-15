<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')">
    <div class="row">
      <!-- edit layer -->
      <div class="col-sm-6"  v-if="shapeCorrect === false">
        <div class="card">
          <div class="card-body">

            <!-- page title -->
            <h5 class="card-title">{{ $t('dashboard.editLayer.layer') }}</h5>

            <!-- <p class="card-text">Creator? {{ isTheCurrentUserTheLayerCreator }}</p>
            <p class="card-text">Collaborator? {{ isTheCurrentUserALayerCollaborator }}</p> -->

            <p class="card-text">
              <form>
                <!-- layer name and select keywords -->
                <div class="form-row">
                  <!-- layer name -->
                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>
                    <el-popover class="info" placement="top-start" width="200"
                                trigger="hover"
                                :content= " $t('dashboard.newLayer.nameD')"
                                type="primary">
                      <button type="button" slot="reference" class="btn btn-outline-primary info">
                        <md-icon class="icon">error_outline</md-icon>
                      </button>
                    </el-popover>
                    <input class="form-control" id="inputName" disabled>
                  </div>
                  <!-- select keywords -->
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
                    <!-- button to go to the new keyword page -->
                    <button type="button" class="btn btn-outline-warning btn-sm add" @click="newKeyword()">
                      <md-icon>add_circle_outline</md-icon>
                    </button>
                    <v-select multiple v-model="chosenKeywords" :options="keywords" track-by="name" label="name"
                              value="description"
                              id="keywordsSelect"></v-select>
                  </div>
                </div>

                <div class="form-group"></div>

                <!-- collaborators -->
                <div class="form-group">
                  <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content="$t('dashboard.newLayer.collaboratorsD')"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <v-select
                    multiple v-model="chosenUsers" :options="users" track-by="username" label="username"
                    id="userSelect" :disabled="!isTheCurrentUserTheLayerCreator"
                  ></v-select>
                </div>

                <!-- description -->
                <div class="form-group">
                  <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>
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

                <!-- reference -->
                <div class="form-group">
                  <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content="$t('dashboard.newLayer.referenceD')"
                              type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <div class="form-row">
                    <!-- text area to add a new reference -->
                    <div class="form-group col-md-12">
                      <textarea class="form-control" v-model="auxRef" id="inputReference" rows="3"></textarea>
                      <!--<input type="text" class="form-control" id="inputReference" placeholder="">
                      <select class="form-control">
                        <option v-for="r in references" :value="r.reference_id">{{r.description}}</option>
                      </select>-->
                    </div>
                    <!-- button to add a new references -->
                    <div class="form-group col-md-4">
                      <a href="#" class="btn btn-primary" @click="addRef()">{{ $t('dashboard.newLayer.add') }}</a>
                    </div>
                  </div>
                </div>

                <!-- added references -->
                <div class="form-group" v-show="chosenRef.length !== 0">
                  <label for="inputReference" >{{ $t('dashboard.newLayer.addedReferences') }}</label>

                  <ol>
                    <li v-for="(reference, index) in chosenRef" v-bind:key="reference.reference_id">
                      {{ reference.description }}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" class="btn btn-outline-danger btn-sm del" @click="removeRef(index)">
                        <md-icon>clear</md-icon>
                      </button>
                    </li>
                  </ol>
                </div>

                <div class="form-group"></div>
              </form>
            </p>

            <!-- submit and delete buttons -->
            <div class="row">
              <div class="col align-self-end">
                <br>
                <a href="#" class="btn btn-primary" @click="Upload()">{{ $t('dashboard.newLayer.submit') }}</a>
                <a href="#" class="btn btn-danger" @click="Delete()">{{ $t('dashboard.editLayer.delete') }}</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- edit temporal columns -->
      <div class="col-sm-6 tam">
        <div class="card" v-if="shapeCorrect">
          <div class="card-body">
            <!-- page title -->
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
  import {mapState} from 'vuex'

  Vue.component('v-select', vSelect)

  export default {
    name: "editLayer",
    components: {
      "p-dash-layout": DashLayout,
      "p-popover-labels": PopoverLabels
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
      ...mapState('dashboard', ['myLayers', 'sharedLayers']),

      isTheCurrentUserTheLayerCreator () {
        // this method checks if the current user is the layer creator or not of the current layer

        // if the current user is editing his own layer, then the method returns True...
        for (const myLayer of this.myLayers) {
          if (myLayer.layer_id === this.layer_id)
            return true;
        }

        // ... else, it returns False
        return false;
      },

      isTheCurrentUserALayerCollaborator () {
        // this method checks if the current user is the layer collaborator or not of the current layer

        // if the current user is editing a shared layer that he is a collaborator, then the method returns True...
        for (const myLayer of this.sharedLayers) {
          if (myLayer.layer_id === this.layer_id)
            return true;
        }

        // ... else, it returns False
        return false;
      }
    },
    data () {
      return {
        tableName: null,
        chosenUsers: [],
        references: [],
        chosenRef: [],
        chosenRefID: [],
        auxRef: null,
        users: [],
        usersAux: [],
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
        fullscreenLoading: false,
        layer_id: this.$route.params.layer_id
      }
    },
    methods: {
      newKeyword() {
        this.$router.push({
          name: 'Keyword',
          params: {name: "EditLayer", layer_id: this.layer_id}
        })
      },
      Upload2(){
        // this method sends the temporal columns to VGIMWS

        if ((this.startDate === "" || this.endDate === "") || (this.startDate === null || this.endDate === null)) {
          this._msgError("O preenchimento das datas é obrigatório!")
          return;
        }

        let temporalColumns = {
          'properties': {
            'f_table_name': this.tableName,
            'start_date': this.startDate,
            'end_date': this.endDate,
            'start_date_column_name': this.startColumnsName,
            'end_date_column_name': this.endColumnsName,
            'start_date_mask_id': (this.startDateMask != null && 'mask_id' in this.startDateMask) ? this.startDateMask.mask_id : null,
            'end_date_mask_id': (this.endDateMask != null && 'mask_id' in this.endDateMask) ? this.endDateMask.mask_id : null,
          },
          'type': 'TemporalColumns'
        }

        Api().put('/api/temporal_columns', temporalColumns).then(response => {
          this.$message.success("A camada foi atualizada com sucesso!")
          this.$router.push({path: '/dashboard/home'})
        }, cause => {
          this._showErrorMessages(cause)
        })

      },
      Upload() {
        // this method sends a layer to VGIMWS

        this.chosenKeywordsID = []

        this.chosenKeywords.forEach(e => {
          this.chosenKeywordsID.push(e.keyword_id)
        })

        //if(this.chosenRefID == null) this.chosenRefID = []

        if (this.chosenKeywordsID.length === 0) {
          this.$message.error("Having at least one keyword is mandatory!")
        } else {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })

          let layer = {
            'type': 'Layer',
            'properties': {
              'layer_id': this.layer_id,
              'f_table_name': this.tableName,
              'name': document.getElementById("inputName").value,
              'description': document.getElementById("inputDescription").value,
              'source_description': document.getElementById("inputDescription").value,
              'reference': this.chosenRefID,
              'keyword': this.chosenKeywordsID,
            }
          }
          //this.tableName = document.getElementById("inputName").value

          // only the layer creator can remove layer collaborators
          if (this.isTheCurrentUserTheLayerCreator) {
            this.usersAux.forEach(user => {
              Api().delete('/api/user_layer/?layer_id=' + this.layer_id + '&user_id=' + user.user_id)
            })
          }

          Api().put('/api/layer', layer).then(response => {
            // only the layer creator can add layer collaborators
            if (this.isTheCurrentUserTheLayerCreator) {
              this.chosenUsers.forEach(u => {          // PUT cada usuario colaborar da layer
                let user_layer = {
                  'properties': {
                    'is_the_creator': 'false',
                    'user_id': u.user_id,
                    'layer_id': this.layer_id
                  },
                  'type': 'UserLayer'
                }

                Api().post('/api/user_layer/create', user_layer)
                //.then((response) => {})
              })
            }

            Api().get('/api/feature_table/?f_table_name=' + this.tableName).then(response => {    //Pega as colunas do shapefile enviado
              response.data.features.filter(e => {
                //console.log(this.columns)
                this.columns = e.properties
                Object.getOwnPropertyNames(e.properties).forEach(c => {
                  if (c !== 'geom' && c !== '__ob__' && c !== 'changeset_id') {
                    this.columnsName.push(c)
                  }
                })
                this.shapeCorrect = true;
                loading.close();
                //console.log(this.columnsName)
              }, cause => {
                loading.close()
                this._showErrorMessages(cause)
              })
            }, cause => {
              loading.close()
              this._showErrorMessages(cause)
            })
          }, cause => {
            loading.close()
            this._showErrorMessages(cause)
          })

          // this.$router.push({
          //   path: '/dashboard/home'
          // })
        }
      },
      Delete() {
        Api().delete('/api/layer/' + this.layer_id)

        this.$router.push({ path: '/dashboard/home' })
      },
      removeRef(index) {
        //console.log(this.chosenRef[index].reference_id)

        Api().delete('/api/reference/' + this.chosenRef[index].reference_id)

        this.chosenRef.splice(index, 1)
        this.chosenRefID.splice(index, 1)
      },
      addRef() {
        if (this.auxRef != null) {
          let reference = {
            'type': 'Reference',
            'properties': { 'reference_id': -1, 'description': this.auxRef }
          }

          Api().post('/api/reference/create', reference).then(response => {
            let ref_id = response.data.reference_id
            this.chosenRef.push({description: this.auxRef, reference_id: ref_id})
            //console.log(this.chosenRef)
            this.chosenRefID.push(ref_id)
            this.auxRef = null
          }, cause => {
            this,_showErrorMessages(cause)
          })
        }
      },
      _msgError(msg){
        if(this.loading != '' && this.loading != null)
          this.loading.close()

        this.$message.error({
          message: msg,
          center: true,
          duration: 10000,
          showClose: true,
        })
      },
      _showErrorMessages(cause) {
        if ('data' in cause.response)
          this._msgError(cause.response.data)
        else
          this._msgError(cause.toString())

        if (cause.response.status >= 500)
          this._msgError("Problem when creating a resource. Please, contact the administrator.")
      },
    },
    mounted() {
      let id = this.$route.params.layer_id

      if (id === undefined) {
        this.$router.push({path: '/dashboard/home'})
      } else {

        // if array is empty, then I'm going to search them
        if (Array.isArray(this.users) && this.users.length === 0) {
          Api().get('/api/user').then(response => {
            this.users = response.data.features.map(e => e.properties)
          })
        }

        // if array is empty, then I'm going to search them
        if (Array.isArray(this.keywords) && this.keywords.length === 0) {
          Api().get('/api/keyword').then(response => {
            this.keywords = response.data.features.map(e => e.properties)
          })
        }

        Api().get('/api/layer/?layer_id=' + id).then(response => {
          this.layer = response.data.features[0].properties

          document.getElementById("inputName").value = this.layer.name
          document.getElementById("inputDescription").value = this.layer.description

          this.chosenKeywordsID = this.layer.keyword

          if (this.layer.reference !== null)
            this.chosenRefID = this.layer.reference
          else
            this.chosenRefID = []

          this.tableName = this.layer.f_table_name

          this.chosenKeywordsID.forEach(key => {
            Api().get('/api/keyword/?keyword_id=' + key).then(response => {
              response.data.features.filter(e => {
                this.chosenKeywords.push(e.properties)
              })
            })
          })
          this.chosenRefID.forEach(id => {
            Api().get('/api/reference/?reference_id=' + id).then(response => {
              response.data.features.filter(e => {
                this.chosenRef.push({description: e.properties.description, reference_id: e.properties.reference_id})
              })
            })
          })

          Api().get('/api/user_layer/?layer_id=' + id).then(response => {
            response.data.features.forEach(u => {
              Api().get('/api/user/?user_id=' + u.properties.user_id).then(response => {
                let properties = response.data.features[0].properties

                if (properties.user_id !== this.user.user_id)
                  this.chosenUsers.push(properties)
              })
              if (u.properties.user_id !== this.user.user_id)
                this.usersAux.push(u.properties)
            })
          })

          Api().get('/api/mask').then(response => {
            this.dateMask = response.data.features.map(e => e.properties)

            Api().get('/api/temporal_columns/?f_table_name=' + this.layer.f_table_name).then(response => {
              let p = response.data.features[0].properties

              this.startDate = p.start_date
              this.endDate = p.end_date
              this.endColumnsName = p.end_date_column_name === 'None' || p.end_date_column_name === '' ? null : p.end_date_column_name
              this.startColumnsName = p.start_date_column_name === 'None' || p.start_date_column_name === '' ? null : p.start_date_column_name

              // if `mask_id` is null, then it returns null
              // if `mask_id` is not null, then I get the mask object from the `this.dateMask` array by the `mask_id` property
              this.startDateMask = p.start_date_mask_id === null ? null : this.dateMask.filter(m => m.mask_id === p.start_date_mask_id)[0]
              this.endDateMask = p.end_date_mask_id === null ? null : this.dateMask.filter(m => m.mask_id === p.end_date_mask_id)[0]
            })

          })

        })
      }
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

  .tam
    min-width: 800px;
</style>
