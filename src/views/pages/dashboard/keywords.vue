<template>
  <p-dash-layout title="Keywords">
    <div class="row" style="height: 500px">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">New Keyword</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-10">
                  <label for="inputName">Name</label>
                  <input class="form-control" id="inputName">
                </div>

                <div class="form-group col-md-2 align-self-end">
                  <a href="#" class="btn btn-primary" @click="Upload()">Submit</a>
                </div>
              </div>
            </form>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">My Keywords</h5>
            <div class="card-text">
              <div class="row" v-for="k in keywords">
                <div class="col-sm-9">{{ k.name }}</div>
                <div class="col-sm-3">
                  <router-link :to="{name: 'Keyword', params: {keyword_id: k.id}}">
                    <md-icon>edit</md-icon>
                  </router-link>
                </div>
                <hr>
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
  import {mapState} from 'vuex'

  Vue.component('v-select', vSelect)

  export default {
    name: "keywords",
    components: {
      "p-dash-layout": DashLayout
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data: function () {
      return {
        keywords: [],
      }
    },
    methods: {
      Upload() {
        let keyword = {
          'type': 'Keyword',
          'properties': {
            'keyword_id': -1,
            'name': document.getElementById("inputName").value,
            'parent_id': this.user
          }
        }
        console.log(keyword)

        let response = Api().post('/api/keyword/create',
          keyword
        )

        console.log(response)
      },
    },
    beforeCreate() {
      const vm = this
      Api().get('/api/keyword').then(function (response) {
        response.data.features.filter(e => {
          //console.log(e.properties)
        })
        Api().get('/api/keyword/?user_id_creator=' + vm.user.user_id).then(function (response) {
          response.data.features.filter(e => {
            vm.keywords.push(e.properties)
          })
        })
      })
    }
  }


</script>

<style lang="sass" scoped>


</style>
