<template>
  <div class="row ">
    <div class="col-sm-2"></div>
    <div class="col-sm-8 ">
      <div class="card box">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center"><h3>Profile</h3></h5>
          <p class="card-text">
          <form>
            <div class="form-row">
              <div class="form-group col-md">
                <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                <el-popover class="info" placement="top-start" width="200" trigger="hover" :content="$t('dashboard.keywords.nameD')" type="primary">
                  <button type="button"  slot="reference" class="btn btn-outline-primary info"> <md-icon class="icon">error_outline</md-icon> </button>
                </el-popover>
                <input class="form-control" id="inputName">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-2 align-self-end">
                <a href="#" class="btn btn-primary" @click="Upload()">Submit</a>
              </div>
            </div>
          </form>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Api from '@/middleware/ApiVGI'
  import {mapState} from 'vuex'

  export default {
        name: "profile",
        computed: {
          ...mapState('auth', ['isUserLoggedIn', 'user'])
        },
        data: function () {
          return {
            keywords: [],
          }
        },
        methods: {

        },
        mounted() {
          console.log(this.user)
        }
    }
</script>

<style  lang="sass" scoped>
  .box
    top: 40px
    background-color: whitesmoke
    border-radius: 20px

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
