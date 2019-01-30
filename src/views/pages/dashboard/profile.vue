<template>
  <div class="row ">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
      <div class="card styleCard">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center"><h3>Profile</h3></h5>
          <div class="card-text">
            <form>
              <div class="form-row">
                <div class="form-group col-md-4 text-center">
                  <p class="text-left">Profile Picture
                    <p-popover-labels text="Foto para o perfil" /></p>
                  <md-avatar class="md-avatar-icon stylePicture">
                    <div class="logo">
                      <img :src="imagePerson" />
                    </div>
                  </md-avatar>
                  <br>
                  <br>
                  <a class="btn btn-primary" style="color: #ffffff; background-color: #ff6107; border-color: #ff6107" @click="UploadPicture()">Upload new picture</a>
                </div>
                <div class="form-group col-md-7">
                  <div class="form-group">
                  <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                    <p-popover-labels text="Nome social" />
                    <input class="form-control"  v-model="user.name" id="inputName">
                  </div>
                  <div class="form-group">
                    <label>{{ $t('register.lbEmail') }}</label>
                    <p-popover-labels text="Não é possível modificar o e-mail" />
                    <input type="email" v-model="user.email" class="form-control" disabled>
                  </div>
                  <div class="form-group">
                    <label>User Name</label>
                    <p-popover-labels text="Nome de usuário" />
                    <input v-model="user.username" class="form-control">
                  </div>

                  <div class="box-check">
                    <el-checkbox :label="$t('register.lbCheckNotification')" v-model="user.receive_notification_by_email"></el-checkbox>
                  </div>

                </div>
                <div class="form-group col-md-11">
                  <div class="text-right align-self-end"><br>
                    <a  class="btn btn-primary" style="color: #ffffff; background-color: #ff6107; border-color: #ff6107" @click="submitInfo()">Submit</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Api from '@/middleware/ApiVGI'
  import PopoverLabels from '@/views/components/dashboard/PopoverLabels'
  import {mapState} from 'vuex'
  import ImgPerson from '@/views/assets/images/icon_person.png'

  export default {
        name: "profile",
        components: {
          "p-popover-labels": PopoverLabels
        },
        computed: {
          ...mapState('auth', ['isUserLoggedIn', 'user'])
        },
        data: function () {
          return {
            keywords: [],
            imagePerson: ''
          }
        },
        methods: {
          submitInfo(){
            const vm = this
            Api().put('/api/user',
              {
                'type': 'User',
                'properties': {
                  'user_id': vm.user.user_id,
                  'email': vm.user.email,
                  'username': vm.user.username,
                  'name': vm.user.name,
                  'terms_agreed': true,
                  'receive_notification_by_email': vm.user.receive_notification_by_email
                }
              }
            ).then(function (response) {
              //console.log(response)
              vm.$message.success("The profile was updated with success!")
              vm.$router.push({
                path: '/dashboard/home'
              })
            }, function (cause) {
               msg = cause.toString()
                vm._msgError(msg)
            })
          },
          _msgError(msg){
            this.$message.error(msg)
          },
        },
        mounted() {
          //console.log(this.user) //user.picture
          this.imagePerson = this.user.picture !== '' ? this.user.picture : ImgPerson
        }
    }
</script>

<style  lang="sass" scoped>
  .styleCard
    top: 40px
    background-color: whitesmoke
    border-radius: 20px

  .styleSubmit
    right: 20px

  .stylePicture
    width: 200px
    height: 200px

  .box-check
    padding: 10px

    a
      color: #0099ff
      cursor: pointer

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
