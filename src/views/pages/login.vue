<template>
  <div style="background-color: rgba(255, 168, 134, 0.66); min-height: 820px">
    <section class="col-md-6 mx-auto">

      <!-- form card login -->
      <div class="card rounded stylecard">

        <div class="card-body">
          <h5 class="mb-0">Acesse sua conta</h5>
          <br><br>

          <form class="form-signin" @submit.prevent="loginSubmit">
            <div class="form-label-group">
              <label>{{ $t('login.inputEmail') }}</label>
              <input type="email" v-model="email" class="form-control form-control-lg" :placeholder="$t('login.inputEmail')" required autofocus>
            </div>
            <br />
            <div class="form-label-group">
              <label>{{ $t('login.inputPassword') }}</label>
              <input type="password" v-model="password" class="form-control form-control-lg" :placeholder="$t('login.inputPassword')" required>
            </div>
            <br />

            <router-link to="/register" class="register">{{ $t('login.register') }}</router-link><br>

            <div>
              <button type="submit" class="btn style-btn btn-lg btn-block">{{ $t('login.btnText') }}</button>
            </div>

            <div class="row">
              <div class="col-6 link-social">
                <md-list-item class="btn btn-danger style-google" @click="loginSocial('google')">
                  <md-icon>add_box</md-icon>
                  <span class="md-list-item-text"> Acesso com o Google+</span>
                </md-list-item>
              </div>
            </div>

            <div class="row">
              <div class="col-12 terms">
                {{ $t('login.terms') }}
                <a data-toggle="modal" data-target="#modalTerms"> ({{ $t('login.lbReadme') }}) </a>
              </div>
            </div>

            <!-- Container centralizado para o botão "Esqueci minha senha" -->
            <div class="row justify-content-center">
              <button @click="showForgotPasswordDialog" class="forgot-password">{{ $t('login.forgotPassword') }}</button>
            </div>

          </form>

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

        </div>
      </div>
      <!-- /form card login -->

      <p-terms></p-terms>
    </section>
  </div>
</template>

<script>
import User from '@/middleware/User'
import Terms from '@/views/components/Terms'
import jsSHA from 'jssha'

export default {
  components: {
    'p-terms': Terms
  },
  data() {
    return {
      email: '',
      password: '',
      loading: null,
      forgotPasswordDialogVisible: false,
      forgotPasswordEmail: '',
      generatedToken: '',
      userToken: '',
      newPassword: '',
      lastTokenSentTime: 0,
      remainingSeconds: 0
    };
  },
  computed: {
    buttonDisabled() {
      // Desabilita o botão se o tempo desde o ultimo click for inferior a 1 minuto
      return this.remainingSeconds > 0;
    }
  },
  methods: {
    loginSocial(type) {
      window.location = process.env.urlVGI + "/api/auth/" + type;
    },
    async loginSubmit() {
      try {
        this._openFullScreen();

        let password = new jsSHA("SHA-512", "TEXT");
        password.update(this.password);
        password = password.getHash('HEX');

        let credentials = decodeURI(window.btoa(encodeURI(this.email + ":" + password)));

        const response = await User.login(credentials);
        let token = response.headers.authorization;

        if (response.status == 200) {
          this.$store.dispatch('auth/setToken', token);

          const userInfo = await User.getUser(`email=${this.email}`);
          this.$store.dispatch('auth/setUser', userInfo.data.features[0].properties);

          this.loading.close();

          let query = this.$route.query.redirect ? this.$route.query.redirect : '/explore';

          this.$router.push({
            path: query
          });

          this.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: this.$t('login.msg.success') + ' <strong>' + userInfo.data.features[0].properties.name + '</strong>!',
            type: 'success'
          });
        }

      } catch (error) {
        let msg = '';

        if (error.response.status == 404)
          msg = this.$t('login.msg.err404');
        else if (error.response.status == 409)
          msg = this.$t('login.msg.err409');

        this._msgBox(
          'ERROR',
          msg,
          'error'
        );
      }
    },
    showForgotPasswordDialog() {
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
    _msgBox(title, msg, type) {
      this.$alert(msg, title, {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'OK',
        type
      });
      this.loading.close();
    },
    _openFullScreen() {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
  }
};
</script>

<style lang="sass" scoped>
section
  padding-top: 50px

.terms
  text-align: center
  a
    color: #0099ff
    cursor: pointer

.link-social
  float: right !important
  text-align: center
  padding: 0px

  .md-list-item-text
    color: #FFF !important

  .md-icon
    margin-right: 10px
    color: #FFF !important

.register
  float: right
  color: #666

.register:hover
  color: #000

.stylecard
  border-radius: 70px
  border-color: #ff6107
  padding: 40px

.style-btn
  position: relative
  width: 200px
  height: 40px
  float: right
  font-size: 15px
  padding: 0px
  background-color: rgb(255, 97, 7)
  color: rgb(255, 255, 255)

.style-google
  position: relative
  padding: 0px
  width: 235px
  height: 40px
  border: 0px

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
