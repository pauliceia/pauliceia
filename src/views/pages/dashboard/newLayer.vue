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
                  <label for="inputName">Nome</label>
                  <input type="email" class="form-control" id="inputName" placeholder="Nome">
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="themeSelect">Theme</label>
                  <v-select multiple v-model="chosenTheme" :options="theme" track-by="name" label="name"
                            id="themeSelect"></v-select>
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
                    {{ t.name }}
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
        users: []
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
            'source_description': document.getElementById("inputName").value,
            'reference': this.addedRef,
            'theme': this.chosenTheme,
          }
        }
        //console.log(layer)

        let response = Api().put('/api/layer/create/?is_to_create_feature_table=FALSE',
          layer
        )

        console.log(response)

        var file = document.getElementById("Upload").files[0]
        var r = new FileReader();
        r.onload = function () {
          let response = Api().put('/api/import/shp/?f_table_name=' + document.getElementById("inputName").value + '&?file_name=' + document.getElementById("Upload").files[0].name,
            r.result
          )
          console.log(response)
        }
        r.readAsBinaryString(file);

        //console.log(response)

        // response = Api().put('/api/import/shp/?f_table_name='+document.getElementById("inputName").value+'&?file_name='+document.getElementById("Upload").files[0].name,
        //   document.getElementById("Upload").files[0]
        // )
        // console.log(response)
      },
      /* removeTheme(index) {
         //console.log(index)
         this.chosenTheme.splice(index, 1)
       },*/
      /*addTheme() {
         this.chosenTheme.push({name: document.getElementById("themeSelect").value})
       },*/
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
    }
  }


</script>

<style lang="sass" scoped>

</style>
