<template>
  <div class="row ">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
      <div class="card styleCard">
        <div class="card-body" v-if="user !== null">

          <h5 class="card-title" style="text-align: center">
            <h3>Profile</h3>
          </h5>

          <div class="card-text">
            <form>
              <div class="form-row">

                <div class="form-group col-md-4 text-center">
                  <p class="text-left">
                    Profile Picture
                    <p-popover-labels text="Foto para o perfil" />
                  </p>
                  <md-avatar class="md-avatar-icon stylePicture">
                    <div class="logo">
                      <img :src="user.picture" />
                    </div>
                  </md-avatar>
                  <br>
                  <br>
                  <a class="btn btn-primary" @click="addProfilePicture()"
                     style="color: #ffffff; background-color: #ff6107; border-color: #ff6107">
                    Upload new picture
                  </a>
                </div>

                <div class="form-group col-md-7">
                  <div class="form-group">
                  <label for="inputName">{{ $t('dashboard.keywords.name') }}</label>&nbsp;
                    <p-popover-labels text="Nome social" />
                    <input class="form-control" v-model="user.name" id="inputName">
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
                    <el-checkbox :label="$t('register.lbCheckNotification')"
                                 v-model="user.receive_notification_by_email"></el-checkbox>
                  </div>
                </div>

                <div class="form-group col-md-11">
                  <div class="text-right align-self-end"><br>
                    <a class="btn btn-primary" @click="updateUserData()"
                       style="color: #ffffff; background-color: #ff6107; border-color: #ff6107">
                      Submit
                    </a>
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
import { mapState } from 'vuex'

import Api from '@/middleware/ApiVGI'
import IconPerson from '@/views/assets/images/icon_person.png'
import PopoverLabels from '@/views/components/dashboard/PopoverLabels'
import User from '@/middleware/User'

export default {
  name: "profile",
  components: {
    "p-popover-labels": PopoverLabels
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  data () {
    return {}
  },
  mounted() {
    this.fixUserPicture()
  },
  methods: {
    addProfilePicture() {
      this.$message.error('Button is not working yet! :(')
    },
    updateUserData(){
      if (this.user.name === null || this.user.name === '' ||
          this.user.username === null || this.user.username === '') {
        this.$message.error("User data cannot be empty!")
        return
      } else if (this.user.name.length < 5 || this.user.username.length < 5) {
        this.$message.error("User data length cannot be less than 5!")
        return
      }

      const user = {'properties': this.user, 'type': 'User'}

      Api().put('/api/user', user).then(response => {
        // get updated token
        const token = response.headers.authorization

        User.getUserByToken(token).then(response2 => {
          // set updated token and user information in the state
          this.$store.dispatch('auth/setToken', token)
          this.$store.dispatch('auth/setUser', response2.data.properties)

          this.fixUserPicture()

          this.$message.success("The profile was updated successfully!")
        }).catch(cause => {
          this.$message.error(cause.response.data.toString())

          // if an error occurs, then clean the state and redirect to login page
          this.$store.dispatch('auth/setToken', null)
          this.$store.dispatch('auth/setUser', null)
          this.$router.push({
            path: '/login'
          })
        })

      }).catch(cause => {
        this.$message.error(cause.response.data.toString())
      })
    },
    fixUserPicture(){
      // update user picture in order to show an icon when user does not have one
      this.user.picture = this.user.picture !== '' ? this.user.picture : IconPerson
    }
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
