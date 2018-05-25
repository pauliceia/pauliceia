<template>
  <p-dash-layout title="Edit Layer">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Edit Layer</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input class="form-control" id="inputName" placeholder="Name">
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="themeSelect">Theme</label>
                  <v-select multiple v-model="chosenTheme" :options="theme" track-by="name" label="name"
                            id="themeSelect"></v-select>
                </div>
              </div>
              <div class="form-group">
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
                  <div class="form-group col-md-8">
                    <input type="text" class="form-control" id="inputReference" placeholder="">
                  </div>
                  <div class="form-group col-md-4">
                    <a href="#" class="btn btn-primary" @click="addRef()">Add</a>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="inputReference">Added References</label>
                <ol>
                  <li v-for="(t, index) in addedRef">
                    {{ t.bibtex }}
                    &nbsp; &nbsp;
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
                <a href="#" class="btn btn-primary" @click="Upload()">Update</a>
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
  import store from '@/store'

  Vue.component('v-select', vSelect)

  export default {
    name: "newLayer",
    components: {
      "p-dash-layout": DashLayout
    },
    data: function () {
      return {
        chosenTheme: [],
        chosenUsers: [],
        theme: [
          {name: 'Igrejas', theme_id: 201},
          {name: 'Fábricas', theme_id: 221},
          {name: 'Restaurantes', theme_id: 313}
        ],
        addedRef: [],
        users: [],
        layer: {},
        layer_id: this.$route.params.layer_id
      }
    },
    methods: {
      Upload() {
        let layer = {
          'type': 'Layer',
          'properties': {
            'layer_id': -1,
            'f_table_name': document.getElementById("inputName").value,
            'name': document.getElementById("inputName").value,
            'description': document.getElementById("inputDescription").value,
            'source_description': document.getElementById("inputDescription").value,
            'reference': this.addedRef,
            'theme': this.chosenTheme,
          }
        }


        this.$router.push({
          path: '/dashboard/home'
        })
      },
      Delete() {
        const vm = this;
        Api().delete('/api/layer/delete/'+this.layer_id).then(function (response) {
          console.log(response)
        })
        this.$router.push({
          path: '/dashboard/home'
        })
      },
      removeRef(index) {
        this.addedRef.splice(index, 1)
      },
      addRef() {
        this.addedRef.push({name: document.getElementById("inputReference").value})
      }
    },
    beforeCreate() {
      const vm = this
      Api().get('/api/user').then(function (response) {
        response.data.features.filter(e => {
          vm.users.push({name: e.properties.username})
        })
      })

      let id = this.$route.params.layer_id

      Api().get('/api/layer').then(function (response) {
        response.data.features.filter(e => {
          if (e.properties.layer_id == id)
            vm.layer = e.properties
        })
        //console.log(vm.layer)

        document.getElementById("inputName").value = vm.layer.name
        document.getElementById("inputDescription").value = vm.layer.description
        vm.chosenTheme.push(vm.theme[0])
        vm.chosenUsers.push(vm.users[3])
        vm.addedRef = vm.layer.reference
      })

    }
  }


</script>

<style lang="sass" scoped>

</style>
