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
                <label for="shpUpload">File Input</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">SHP File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="shpUpload">
                    <label class="custom-file-label" for="shpUpload">Choose file</label>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">SHX File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="shxUpload">
                    <label class="custom-file-label" for="shxUpload">Choose file</label>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">DBF File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="dbfUpload">
                    <label class="custom-file-label" for="dbfUpload">Choose file</label>
                  </div>
                </div>

                <label for="shpUpload">Optional File Input</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">PRJ File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="prjUpload">
                    <label class="custom-file-label" for="prjUpload">Choose file</label>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">CPG File</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="cpgUpload">
                    <label class="custom-file-label" for="cpgUpload">Choose file</label>
                  </div>
                </div>
              </div>
            </form>
            </p>
            <div class="row">
              <div class="col align-self-end">
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
          {name: 'Igrejas'},
          {name: 'Fábricas'},
          {name: 'Restaurantes'}
        ],
        users: [
          {name: 'Denis'},
          {name: 'Gabriel'},
          {name: 'Beto'},
          {name: 'Rodrigo'},
        ],
        addedRef: [],
      }
    },
    methods: {
      Upload() {
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
    created: {}
  }


</script>

<style lang="sass" scoped>

</style>
