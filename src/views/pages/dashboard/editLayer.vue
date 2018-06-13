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
                  <input class="form-control" id="inputName" placeholder="Name">
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
                <v-select multiple v-model="chosenUsers" :options="users" track-by="name" label="name"
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
                    <v-select class="" v-model="auxRef" :options="references" track-by="description" label="description"
                              id="inputReference"></v-select>
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
                    <a href="#" class="" @click="removeRef(index)">x</a>
                  </li>
                </ol>
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="Upload">File Input</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">ZIP File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="Upload" accept=".zip">
                    <label class="custom-file-label" for="Upload">Choose file</label>
                  </div>
                </div>
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

  Vue.component('v-select', vSelect)

  export default {
    name: "editLayer",
    components: {
      "p-dash-layout": DashLayout
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

        let response = Api().post('/api/layer/create/?is_to_create_feature_table=FALSE',
          layer
        )

        this.chosenKeywordsID = null
        this.chosenRefID = null
        console.log(response)

        this.$router.push({
          path: '/dashboard/home'
        })

      },
      Delete() {
        const vm = this;
        Api().delete('/api/layer/delete/' + this.layer_id).then(function (response) {
          console.log(response)
        })
        this.$router.push({
          path: '/dashboard/home'
        })
      },
      removeRef(index) {
        this.chosenRef.splice(index, 1)
        this.chosenRefID.splice(index, 1)
      },
      addRef() {
        if (this.auxRef != null) {

          this.chosenRef.push({description: this.auxRef.description, reference_id: this.auxRef.reference_id})
          this.chosenRefID.push(this.auxRef.reference_id)
          this.auxRef = null
        }
      }
    },
    beforeCreate() {
      const vm = this
      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          vm.users.push({name: e.properties.username})
        })
      })

      Api().get('/api/keyword').then(function (response) {
        response.data.features.filter(e => {
          vm.keywords.push({name: e.properties.name, keyword_id: e.properties.keyword_id})
        })
      })

      Api().get('/api/reference').then(function (response) {
        response.data.features.filter(e => {
          vm.references.push({description: e.properties.description, reference_id: e.properties.reference_id})
        })
      })

      let id = this.$route.params.layer_id

      Api().get('/api/layer/?layer_id='+id).then(function (response) {
        vm.layer = response.data.features[0].properties
        //console.log(vm.layer)
        document.getElementById("inputName").value = vm.layer.name
        document.getElementById("inputDescription").value = vm.layer.description
        vm.chosenKeywordsID = vm.layer.keyword
        vm.chosenRefID = vm.layer.reference

        vm.chosenKeywordsID.forEach(key => {
          Api().get('/api/keyword/?keyword_id='+key).then(function (response) {
            response.data.features.filter(e => {
              vm.chosenKeywords.push(e.properties)
            })
          })
        })

        vm.chosenRefID.forEach(id => {
          Api().get('/api/reference/?reference_id='+id).then(function (response) {
            response.data.features.filter(e => {
              vm.chosenRef.push(e.properties)
            })
          })
        })

      })
    }
  }


</script>

<style lang="sass" scoped>

</style>
