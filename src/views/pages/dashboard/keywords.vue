<template>
  <p-dash-layout :title="$t('dashboard.keywords.keywords')">
    <div class="row" >
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.keywords.newKeyword') }}</h6>
            <p class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.keywords.nameD')" />
                  <button type="button" class="btn btn-outline-dark btn-sm add styleBtn" @click="back()" style="">
                    <md-icon>arrow_back</md-icon>
                  </button>
                  <input class="form-control" id="inputName">
                </div>

                <div class="form-group col-md-12">
                  <a class="btn btn-dark styleBtn" @click="Upload()">Submit</a>
                </div>
              </div>
            </form>
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">

            <h6 class="mb-0">{{ $t('dashboard.keywords.myKeywords') }}</h6><br><br>
            <div class="card-text">
              <div class="row" v-for="k in keywords">
                <div class="col-sm-5" v-if="user.is_the_admin">{{ k.name }}</div>
                <div class="col-sm-5" v-if="user.is_the_admin" style="color: #787878">{{ nameUsers[k.user_id_creator] }}</div>
                <div class="col-sm-10" v-else>{{ k.name }}</div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-danger btn-sm add2 styleBtn2" @click="deleteKeyword(k)" >
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
  import PopoverLabels from '@/views/components/dashboard/PopoverLabels'
  import {mapState} from 'vuex'

  Vue.component('v-select', vSelect)

  export default {
    name: "keywords",
    components: {
      "p-dash-layout": DashLayout,
      "p-popover-labels": PopoverLabels
    },
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data: function () {
      return {
        keywords: [],
        name: this.$route.params.name,
        layer_id: this.$route.params.layer_id,
        nameUsers: []
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

        Api().get('/api/user/').then(function (users) {
          users.data.features.forEach(user => {
            vm.nameUsers = {...vm.nameUsers, [user.properties.user_id]: user.properties.name,}
          })
        })

        vm.keywords = []
        Api().get('/api/keyword').then(function (all) {
          Api().get('/api/keyword/?user_id_creator=' + vm.user.user_id).then(function (response) {
            if(vm.user.is_the_admin){
              all.data.features.filter(e => {
                vm.keywords.push(e.properties)
              })
            }
            else {
              response.data.features.filter(e => {
                vm.keywords.push(e.properties)
              })
            }
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
    display: inline-block
    border: none
    padding: 0px
    margin: 0px
    float: right
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

  .styleBtn
    background-color: #ff6107
    border-color: #ff6107
    color: #ffffff !important
    float: right
    position: relative

  .styleBtn2
    background-color: #ff6107
    border-color: #ff6107
    color: #ffffff !important
    position: relative

</style>
