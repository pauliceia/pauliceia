<template>
  <p-dash-layout :title="$t('dashboard.keywords.keywords')">
    <div class="row" style="height: 500px">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ $t('dashboard.keywords.newKeyword') }}</h5>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-10">
                  <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                  <el-popover class="info" placement="top-start" width="200"
                              trigger="hover"
                              :content="$t('dashboard.keywords.nameD')"
                              type="primary">
                    <button type="button"  slot="reference" class="btn btn-outline-primary info">
                      <md-icon class="icon">error_outline</md-icon>
                    </button>
                  </el-popover>
                  <button type="button" class="btn btn-outline-primary btn-sm add" @click="back()">
                    <md-icon>arrow_back</md-icon>
                  </button>
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
            <h5 class="card-title">{{ $t('dashboard.keywords.myKeywords') }}</h5>
            <div class="card-text">
              <div class="row" v-for="k in keywords">
                <div class="col-sm-9">{{ k.name }}</div>
                <div class="col-sm-3">
                  <button type="button" class="btn btn-outline-danger btn-sm add2" @click="deleteKeyword(k)" >
                    <md-icon>clear</md-icon>
                  </button>
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
        name: this.$route.params.name,
        layer_id: this.$route.params.layer_id
      }
    },
    methods: {
      back(){
        const vm = this
        if (vm.name === undefined) vm.name = 'Home'

        if(vm.name === 'EditLayer'){
          this.$router.push({
            name: vm.name,
            params: {'layer_id': vm.layer_id}
          })
        }
        else{
          this.$router.push({
            name: vm.name
          })
        }

      },
      deleteKeyword(keyword){
        const vm = this
        Api().delete('/api/keyword/'+keyword.keyword_id).then(function (response) {
          vm.updateKeyword()
          vm.$message.success("The layer was deleted with success!")
        }, function (cause) {
          let msg = ''
          if (cause.response.status === 403) msg = "The administrator is who can update/delete the keyword."
          else msg = cause.toString()
          console.log(cause.response)
          vm.$message.error(msg)
        })
      },
      Upload() {
        const vm = this
        let keyword = {
          'type': 'Keyword',
          'properties': {
            'keyword_id': -1,
            'name': document.getElementById("inputName").value,
            'parent_id': 1001
          }
        }

        Api().post('/api/keyword/create',
          keyword
        ).then(function (response) {
          vm.updateKeyword()
          vm.$message.success("The Keyword was created with success!")
        }, function (cause) {
          let msg = ''
          if (cause.response.status === 400) msg = "Keyword already exists!"
          else msg = cause.toString()
          console.log(cause.response)
          vm.$message.error(msg)
        })


      },
      updateKeyword(){
        const vm = this
        vm.keywords = []
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
      },
    },
    mounted() {
      this.updateKeyword()
    }
  }


</script>

<style lang="sass" scoped>
  .add
    bottom: 20px
    left: 95%
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    zoom: 200%
    position: relative
    border-radius: 20px

  .info
    top: -1px
    border: none
    padding: 0px
    margin: 0px
    position: relative
    border-radius: 30px

  .add2
    top: -1px
    left: 0px
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    position: relative
    border-radius: 30px
</style>
