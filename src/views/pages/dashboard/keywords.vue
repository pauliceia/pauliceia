<template>
  <p-dash-layout :title="$t('dashboard.keywords.keywords')">
    <div class="row" >

      <!-- left column -->
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h6 class="mb-0">{{ $t('dashboard.keywords.newKeyword') }}</h6>
            <p class="card-text"></p>

            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                  <p-popover-labels :text="$t('dashboard.keywords.nameD')" />
                  <button type="button" class="btn btn-outline-dark btn-sm add styleBtn"
                      @click="back()" style="">
                    <md-icon>arrow_back</md-icon>
                  </button>
                  <input v-model="keyword.name" class="form-control" id="inputName">
                </div>

                <div class="form-group col-md-12">
                  <a class="btn btn-dark styleBtn" @click="addKeyword()">
                    Submit
                  </a>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      <!-- right column -->
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">

            <h6 class="mb-0">{{ $t('dashboard.keywords.myKeywords') }}</h6>
            <br><br>
            <div class="card-text">
              <div class="row" v-for="keyword in keywords" :key="keyword.id">
                <div class="col-sm-5">{{ keyword.name }}</div>
                <!-- keyword author name -->
                <div class="col-sm-5" style="color: #787878">
                  {{ nameUsers[keyword.user_id_creator] }}
                </div>
                <div v-if="user !== null && user.is_the_admin" class="col-sm-2">
                  <button type="button" @click="deleteKeyword(keyword)"
                      class="btn btn-danger btn-sm add2 styleBtn2">
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
      ...mapState('auth', ['user'])
    },
    data() {
      return {
        keyword: {
          name: null
        },
        keywords: [],
        name: this.$route.params.name,
        layer_id: this.$route.params.layer_id,
        nameUsers: []
      }
    },
    mounted() {
      this.updateListOfKeywords()
    },
    methods: {
      back(){
        if (this.name === undefined)
          this.name = 'Home'

        if (this.name === 'EditLayer') {
          this.$router.push({
            name: this.name,
            params: {'layer_id': this.layer_id}
          })
        } else {
          this.$router.push({
            name: this.name
          })
        }
      },
      addKeyword() {
        if (this.keyword.name === null || this.keyword.name === '') {
          this.$message.error("Keyword name cannot be empty!")
          return
        } else if (this.keyword.name.length < 5) {
          this.$message.error("Keyword name length cannot be less than 5!")
          return
        }

        let keyword = {'properties': this.keyword, 'type': 'Keyword'}

        Api().post('/api/keyword/create', keyword).then(() => {
          this.updateListOfKeywords()
          this.$message.success("The keyword was created successfully!")
        }, (cause) => {
          // default message
          let message = cause.toString()

          if (cause.response.status === 400)
            message = "Keyword already exists!"

          this.$message.error(message)
        })
      },
      deleteKeyword(keyword){
        if (this.user === null || !this.user.is_the_admin) {
          this.$message.error("The administrator is who can update/delete the keyword.")
          return
        }

        Api().delete('/api/keyword/' + keyword.id).then(() => {
          this.updateListOfKeywords()
          this.$message.success("The keyword was deleted successfully!")
        }, (cause) => {
          // default message
          let message = cause.toString()

          if (cause.response.status === 403)
            message = "The administrator is who can update/delete the keyword."

          this.$message.error(message)
        })
      },
      updateListOfKeywords(){
        Api().get('/api/user/').then((users) => {
          users.data.features.forEach(user => {
            this.nameUsers = {...this.nameUsers, [user.properties.user_id]: user.properties.name,}
          })
        })

        this.keywords = []

        if (this.user.is_the_admin) {
          // if user is admin, then get all the available keywords
          Api().get('/api/keyword').then(response => {
            this.__extractKeywordsFromResponse(response)
          })
        } else {
          // if user is not admin, then get just his keywords
          Api().get('/api/keyword/?user_id_creator=' + this.user.user_id).then((response) => {
            this.__extractKeywordsFromResponse(response)
          })
        }
      },
      __extractKeywordsFromResponse(response){
        this.keywords = response.data.features.map(k => k.properties)
      }
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
