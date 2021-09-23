<template>
  <p-dash-layout :title="$t('dashboard.nav.layer')" v-if="layer !== null">
    <div class="row">

      <!-- layer -->
      <div class="col-sm-6" v-if="page === LAYER_PAGE">
        <div class="card">
          <div class="card-body">

            <!-- title -->
            <h5 class="card-title">{{ $t('dashboard.editLayer.layer') }}</h5>
            <p class="card-text"></p>

            <!-- <p class="card-text">Creator? {{ isTheCurrentUserTheLayerCreator }}</p>
            <p class="card-text">Collaborator? {{ isTheCurrentUserALayerCollaborator }}</p> -->

            <form>
              <!-- layer name and select keywords -->
              <div class="form-row">
                <!-- layer name -->
                <div class="form-group col-md-6">
                  <label for="inputName">{{ $t('dashboard.newLayer.name') }}</label>
                  <el-popover class="info" placement="top-start" width="200" trigger="hover"
                              :content="$t('dashboard.newLayer.nameD')" type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <input v-model="layer.name" class="form-control" id="inputName"
                         :disabled="!user.is_the_admin && !isTheCurrentUserTheLayerCreator">
                </div>

                <!-- select keywords -->
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="keywordsSelect">{{ $t('dashboard.newLayer.keywords') }}</label>
                  <el-popover class="info" placement="top-start" width="200" trigger="hover"
                              :content="$t('dashboard.newLayer.keywordsD')" type="primary">
                    <button type="button" slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <!-- button to go to the new keyword page -->
                  <button type="button" @click="goToNewKeywordPage()"
                          class="btn btn-outline-warning btn-sm add">
                    <md-icon>add_circle_outline</md-icon>
                  </button>
                  <v-select
                    multiple v-model="layer.keywords" :options="allKeywords" track-by="name"
                    label="name" value="description" id="keywordsSelect"
                  ></v-select>
                </div>
              </div>

              <div class="form-group"></div>

              <!-- collaborators -->
              <div class="form-group">
                <label for="userSelect">{{ $t('dashboard.newLayer.collaborators') }}</label>
                <el-popover class="info" placement="top-start" width="200" trigger="hover"
                            :content="$t('dashboard.newLayer.collaboratorsD')" type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <v-select multiple v-model="layer.collaborators" :options="allUsers"
                          :disabled="!user.is_the_admin && !isTheCurrentUserTheLayerCreator"
                          track-by="username" label="username" id="userSelect"></v-select>
              </div>

              <!-- description -->
              <div class="form-group">
                <label for="inputDescription">{{ $t('dashboard.newLayer.description') }}</label>
                <el-popover class="info" placement="top-start" width="200" trigger="hover"
                            :content="$t('dashboard.newLayer.descriptionD')" type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <textarea v-model="layer.description" class="form-control"
                          id="inputDescription" rows="3"></textarea>
              </div>

              <!-- reference -->
              <div class="form-group">
                <label for="inputReference">{{ $t('dashboard.newLayer.reference') }}</label>
                <el-popover class="info" placement="top-start" width="200" trigger="hover"
                            :content="$t('dashboard.newLayer.referenceD')" type="primary">
                  <button type="button" slot="reference" class="btn btn-outline-primary info">
                    <md-icon class="icon">error_outline</md-icon>
                  </button>
                </el-popover>
                <div class="form-row">
                  <!-- text area to add a new reference -->
                  <div class="form-group col-md-12">
                    <textarea class="form-control" v-model="reference_description"
                              id="inputReference" rows="3"></textarea>
                  </div>
                  <!-- button to add a new references -->
                  <div class="form-group col-md-4">
                    <button type="button" class="btn btn-primary" @click="addReference()">
                      {{ $t('dashboard.newLayer.add') }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- added references -->
              <div class="form-group" v-if="layer.references.length > 0">
                <label for="inputReference" >{{ $t('dashboard.newLayer.addedReferences') }}</label>
                <ol>
                  <li v-for="reference in layer.references" v-bind:key="reference.id">
                    {{ reference.description }}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" @click="removeReference(reference.id)"
                            class="btn btn-outline-danger btn-sm del">
                      <md-icon>clear</md-icon>
                    </button>
                  </li>
                </ol>
              </div>

              <div class="form-group"></div>
            </form>

            <br>

            <!-- submit and delete buttons -->
            <div class="row">
              <div class="col align-self-end">
                <button type="button" class="btn btn-primary" @click="uploadLayer()">
                  {{ $t('dashboard.newLayer.submit') }}
                </button>
                <button type="button" @click="deleteLayer()" class="btn btn-danger"
                        v-if="user.is_the_admin || isTheCurrentUserTheLayerCreator">
                  {{ $t('dashboard.editLayer.delete') }}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- temporal columns -->
      <div class="col-sm-6 tam">
        <div class="card" v-if="page === TEMPORAL_COLUMNS_PAGE">
          <div class="card-body">
            <!-- title -->
            <h5 class="card-title">{{ $t('dashboard.newLayer.temporalColumns') }}</h5>
            <p class="card-text"></p>

            <form>
              <!-- first row -->
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="inputName">{{ $t('dashboard.newLayer.lblStartDate') }}</label>&nbsp;
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
                  <label for="inputName">{{ $t('dashboard.newLayer.lblEndDate') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.newLayer.endDate')" />
                  <input type="date" v-model="temporal_columns.end_date"
                          class="form-control" id="end_date">
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

              <!-- submit button -->
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
  </p-dash-layout>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import Vue from 'vue'

import Api from '@/middleware/ApiVGI'
import DashLayout from '@/views/layouts/dashboard'
import PopoverLabels from '@/views/components/dashboard/PopoverLabels'

Vue.component('v-select', vSelect)

export default {
  name: "editLayer",
  components: {
    "p-dash-layout": DashLayout,
    "p-popover-labels": PopoverLabels
  },
  computed: {
    ...mapState('auth', ['user']),
    isTheCurrentUserTheLayerCreator () {
      // this method checks if the current user is the layer creator or not

      // check if the current user that is editing the layer is the creator one, then return True.
      // if the current user is just a collaborator one, then return False
      return this.user.id === this.layer_creator.id
    },
    isTheCurrentUserALayerCollaborator () {
      // this method checks if the current user is a layer collaborator or not

      // try to find the current user inside the list of collaborators
      let collaborator = this.layer.collaborators.filter(c => c.id === this.user.id)

      // if the current user that is editing the layer is a collaborator, then return True.
      // if the current user is the creator one, then return False
      if (collaborator.length > 0)
        return collaborator[0].is_the_creator === false

      // if the current user is the layer creator, then he is not a collaborator
      if (this.isTheCurrentUserTheLayerCreator)
        return false

      throw 'Current user is not inside the list of collaborators of the layer'
    }
  },
  data () {
    return {
      // layer form
      layer: null,
      layer_creator: null,
      reference_description: null,
      allKeywords: [],
      allUsers: [],

      // temporal columns form
      temporal_columns: null,
      feature_table_columns: null,
      allMasks: [],

      // pages control
      LAYER_PAGE: 1,
      TEMPORAL_COLUMNS_PAGE: 2,
      page: null,

      // loading
      loading: null
    }
  },
  mounted() {
    // open layer page
    this.page = this.LAYER_PAGE

    let layer_id = this.$route.params.layer_id

    if (layer_id === null || layer_id === undefined) {
      this.$router.push({path: '/dashboard/home'})
      return
    }

    // get all the available keywords
    Api().get('/api/keyword').then(response => {
      this.allKeywords = response.data.features.map(k => k.properties)
    }).catch(cause => {
      this.__showErrorMessages(cause)
    })

    // get all the available masks
    Api().get('/api/mask').then(response => {
      this.allMasks = response.data.features.map(m => m.properties)
    }).catch(cause => {
      this.__showErrorMessages(cause)
    })

    // get the layer information from the database
    Api().get('/api/layer/?id=' + layer_id).then(response => {
      this.layer = response.data.features[0].properties

      // get the layer creator from the list of collaborators
      this.layer_creator = this.layer.collaborators.filter(c => c.is_the_creator)[0]

      // remove the creator user from the local list of collaborators
      this.layer.collaborators = this.layer.collaborators.filter(c => c.id !== this.layer_creator.id)

      // get all users from database, except the layer creator one
      Api().get('/api/user').then(response => {
        // save the information of all users, except the creator one
        response.data.features.forEach(u => {
          if (u.properties.id !== this.layer_creator.id)
            this.allUsers.push(u.properties)
        })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })

      // get the Shapefile columns names
      Api().get(
        '/api/feature_table/?f_table_name=' + this.layer.f_table_name
      ).then(response => {
        // this returns an object where the key is the column name
        // and the value is its type (e.g. `id: integer`)
        this.feature_table_columns = response.data.features[0].properties

        // get just the column names, without their types
        this.feature_table_columns = Object.getOwnPropertyNames(this.feature_table_columns).filter(
          // these column names are reserved, then ignore them
          key => key !== 'geom' && key !== '__ob__' && key !== 'changeset_id'
        )
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })

      // get the temporal columns information
      Api().get('/api/temporal_columns/?f_table_name=' + this.layer.f_table_name).then(response => {
        this.temporal_columns = response.data.features[0].properties
      }).catch(cause => {
        this.__showErrorMessages(cause)
      })
    }).catch(cause => {
      this.__showErrorMessages(cause)
    })
  },
  methods: {
    goToNewKeywordPage() {
      this.$router.push({
        name: 'Keyword',
        params: {name: "EditLayer", layer_id: this.layer.id}
      })
    },
    uploadLayer() {
      // this method edits a layer in the server

      if (this.layer.name === null || this.layer.name === '') {
        this.$message.error("O nome da camada é obrigatório!")
        return
      } else if (this.layer.name.length < 5 || this.layer.name.length > 63) {
        this.$message.error("O nome da camada deve ter entre 5 e 63 caracteres!")
        return
      } else if (this.layer.keywords.length === 0) {
        this.$message.error("É obrigatório adicionar pelo menos uma palavra-chave!")
        return
      } else if (this.layer.description === null || this.layer.description === '') {
        this.$message.error("Descrição da camada não pode estar vazia!")
        return
      } else if (this.layer.description.length < 5) {
        this.$message.error("Descrição da camada não pode ter menos do que 5 caracteres!")
        return
      }

      this.__openFullLoading()

      // add the creator user to the list of collaborators again before editing the layer
      this.layer.collaborators.push(this.layer_creator)

      let layer = {'properties': this.layer, 'type': 'Layer'}

      Api().put('/api/layer', layer).then(() => {
        // go to temporal columns page
        this.page = this.TEMPORAL_COLUMNS_PAGE
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        // remove the creator user from the local list of collaborators again
        this.layer.collaborators = this.layer.collaborators.filter(c => c.id !== this.layer_creator.id)
        this.__closeFullLoading()
      })
    },
    uploadTemporalColumns(){
      // this method sends the temporal columns to VGIMWS

      if ((this.temporal_columns.start_date === "" || this.temporal_columns.end_date === "") ||
          (this.temporal_columns.start_date === null || this.temporal_columns.end_date === null)) {
        this.__errorMessage("O preenchimento das datas é obrigatório!")
        return
      }

      this.__openFullLoading()

      let temporal_columns = {
        'properties': {
          ...this.temporal_columns, 'f_table_name': this.layer.f_table_name
        },
        'type': 'TemporalColumns'
      }

      Api().put('/api/temporal_columns', temporal_columns).then(() => {
        this.$message.success("A camada foi atualizada com sucesso!")
        this.$router.push({path: '/dashboard/home'})
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
        this.__closeFullLoading()
      })
    },
    deleteLayer() {
      if (!this.isTheCurrentUserTheLayerCreator && !this.user.is_the_admin) {
        this.$message.error("Apenas o criador ou um administrador pode excluir a camada!")
        return
      }

      this.__openFullLoading()

      Api().delete('/api/layer/' + this.layer.id).then(() => {
        this.$message.success("A camada foi excluída com sucesso!")
        this.$router.push({ path: '/dashboard/home' })
      }).catch(cause => {
        this.__showErrorMessages(cause)
      }).finally(() => {
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
