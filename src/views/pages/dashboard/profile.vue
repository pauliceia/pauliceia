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

                   <!-- Container centralizado para o botão "Resetar minha senha" -->
                   <div class="row justify-content-center">
                    <button @click="showForgotPasswordDialog" class="forgot-password">{{ $t('login.forgotPassword') }}</button>
                  </div>

                  <!-- Dialog para "Esqueci minha senha" -->
                  <el-dialog :visible.sync="forgotPasswordDialogVisible" title="Esqueci Minha Senha">
                    <form @submit.prevent="sendPassword">
                      <div class="form-group">
                        <label>{{ $t('login.inputEmail') }}</label>
                        <input type="email" v-model="forgotPasswordEmail" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <button type="button" @click="sendCode" :disabled="buttonDisabled" class="btn btn-sm">
                          {{ buttonDisabled ? `Aguarde ${remainingSeconds} segundos para mandar novamente` : $t('login.sendCode') }}
                        </button>
                      </div>
                      <div class="form-group">
                        <label>{{ $t('login.code') }}</label>
                        <input type="text" v-model="userToken" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <label>{{ $t('login.newPassword') }}</label>
                        <input type="password" v-model="newPassword" class="form-control" required>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-lg btn-block">{{ $t('login.resetPassword') }}</button>
                      </div>
                    </form>
                  </el-dialog>

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
  import User from '@/middleware/User'
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import Api from '@/middleware/ApiVGI'
  import PopoverLabels from '@/views/components/dashboard/PopoverLabels'
  import {mapState} from 'vuex'
  import ImgPerson from '@/views/assets/images/icon_person.png'
  import jsSHA from 'jssha'

  export default {
        name: "profile",
        components: {
          "p-popover-labels": PopoverLabels
        },
        computed: {
          ...mapState('auth', ['isUserLoggedIn', 'user']),
          buttonDisabled() {
            // Desabilita o botão se o tempo desde o ultimo click for inferior a 1 minuto
            return this.remainingSeconds > 0;
          }
        },
        data: function () {
          return {
            keywords: [],
            imagePerson: '',
            forgotPasswordDialogVisible: false,
            forgotPasswordEmail: '',
            generatedToken: '',
            userToken: '',
            newPassword: '',
            lastTokenSentTime: 0,
            remainingSeconds: 0
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
          showForgotPasswordDialog(event) {
            event.preventDefault();

            this.forgotPasswordDialogVisible = true;
            this.forgotPasswordEmail = '';
            this.generatedToken = '';
            this.userToken = '';
            this.newPassword = '';
          },
         async sendCode() {
            if (!this.buttonDisabled) {
              this.lastTokenSentTime = Date.now();
              this.startCountdown();

              const filledEmail = this.forgotPasswordEmail;

              const now = new Date();
              now.setHours(now.getHours() + 1);

              const response = await User.send_verification_code(filledEmail);

              console.log(response, 'Código enviado para:', filledEmail);
            }
          },
          startCountdown() {
            this.remainingSeconds = 60; // Defina o tempo de contagem regressiva em segundos

            const countdownInterval = setInterval(() => {
              this.remainingSeconds -= 1;

              if (this.remainingSeconds <= 0) {
                clearInterval(countdownInterval);
              }
            }, 1000);
          },
          async sendPassword() {
            const userInfo = await User.getUser(`email=${this.forgotPasswordEmail}`);
            const userId = userInfo.data.features[0].properties.user_id;

            let newPassword = new jsSHA("SHA-512", "TEXT");
            newPassword.update(this.newPassword);
            newPassword = newPassword.getHash('HEX');

            const response = await User.change_forgotten_password_by_user_id(userId, newPassword, this.userToken);
            console.log(response);
            this.forgotPasswordDialogVisible = false;
            console.log('Código verificado e senha redefinida.');
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

  .forgot-password
    color: #666
    cursor: pointer
    margin-top: 10px
    border: none
    background-color: #fff 
    padding: 10px 20px

  .el-dialog
    max-width: 400px
    width: 80%

  .btn-sm
    padding: 5px 10px
    font-size: 14px
    color: #666
    border: 0.1px solid #666

  .btn-lg
    padding: 10px 20px
    font-size: 18px
    background-color: rgb(255, 97, 7)
    color: rgb(255, 255, 255)
</style>