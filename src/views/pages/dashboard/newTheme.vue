<template>
  <p-dash-layout title="New Theme">
    <div class="row" style="height: 500px">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Theme</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">Name</label>
                  <input class="form-control" id="inputName">
                </div>
                <div class="form-group col-md-6">
                  <label class="mr-sm-2" for="themeSelect">Theme</label>
                  <v-select multiple v-model="chosenTheme" :options="theme" track-by="name" label="name"
                            id="themeSelect"></v-select>
                </div>
              </div>
              <div class="form-group">
                <label for="userSelect">Curator</label>
                <v-select multiple v-model="chosenUsers" :options="users" track-by="name" label="name"
                          id="userSelect"></v-select>
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
    name: "newTheme",
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

      },
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
