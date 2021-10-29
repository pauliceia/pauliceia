<template>
  <div style="background-color: rgba(255,168,134,0.66); min-height: 820px">
    <section class="col-md-6 mx-auto">

      <!-- form card login -->
      <div class="card rounded stylecard">

        <div class="card-body">
          <!--<h3 class="mb-0">{{ $t('register.title') }}</h3>-->
          <h5 class="mb-0">Novo Cadastro</h5>
          <br><br>

          <form class="form-signin" @submit.prevent="registerSubmit">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>{{ $t('register.lbName') }}</label>
                <input type="text" v-model="user.name" class="form-control form-control-lg"
                       :placeholder="$t('register.lbName')" required>
              </div>
              <div class="form-group col-md-12">
                <label>{{ $t('register.lbEmail') }}</label>
                <input type="email" v-model="user.email" class="form-control form-control-lg"
                       :placeholder="$t('register.lbEmail')" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>{{ $t('register.lbUsername') }}</label>
                <input type="text" v-model="user.username" class="form-control form-control-lg"
                       :placeholder="$t('register.lbUsername')" required>
              </div>
              <div class="form-group col-md-6">
                <label>{{ $t('register.lbPassword') }}</label>
                <input type="password" v-model="user.password" class="form-control form-control-lg"
                       :placeholder="$t('register.lbPassword')" required>
              </div>
            </div>

            <div class="box-check">
              <el-checkbox :label="$t('register.lbCheckNotification')"
                           v-model="user.receive_notification_by_email"></el-checkbox>
              <br />

              <el-checkbox :label="$t('register.lbCheckAgree')" v-model="user.terms_agreed"></el-checkbox>
              <a data-toggle="modal" data-target="#modalTerms">
                ( {{ $t('register.lbReadme') }} )
              </a>
            </div>

            <button type="submit" :title="$t('register.msg.registerBtnHover')"
                    class="btn btn-lg btn-block" style="background-color: #ff6107; color: #ffffff"
                    :disabled="!user.terms_agreed">
              {{ $t('register.btnTitle') }}
            </button>
          </form>
        </div>
        <div class="col-lg-12">
          <p class="title-to-login">
            {{ $t('register.lbToLogin') }}
            <router-link to="/login" style="color: #ff6107">
              {{ $t('register.lbToLoginLink') }}
            </router-link>
          </p>
        </div>
        <!--/card-block-->
      </div>
      <!-- /form card login -->

      <p-terms></p-terms>

    </section>
  </div>
</template>

<script>
import jsSHA from 'jssha'

import Terms from  '@/views/components/Terms'
import User from '@/middleware/User'

export default {
  components: {
    'p-terms': Terms
  },
  data () {
    return {
      user: {
        name: '',
        email: '',
        username: '',
        password: '',
        receive_notification_by_email: true,
        terms_agreed: false
      },
      loading: null,
      support_email: 'pauliceia_support |at| googlegroups |dot| com'
    }
  },
  methods: {
    async registerSubmit () {
      this._openFullScreen()

      try {
        if (this.user.email === '' || this.user.username === '' || this.user.password === '') {
          this._msgBox('ERROR', this.$t('register.msg.emptyField'), 'error')
          return
        }

        let password = new jsSHA("SHA-512", "TEXT")
        password.update(this.user.password)
        password = password.getHash('HEX')

        // add user in the database
        await User.register({
          properties: { ...this.user, password },
          type: "User"
        })

        this._msgBox(
          'SUCESSO',
          '<strong>' + this.user.name + '</strong>, ' + this.$t('register.msg.success'),
          'success'
        )

        this._cleanForm()

        this.loading.close()
        this.$router.push({path: '/login'})

      } catch (error) {
        if (error.response == undefined || error.response.status == 500)
          this._msgBox(
            'ERROR', this.$t('register.msg.err500') + ' - ' + this.support_email, 'error'
          )
        else
          this._msgBox('ERROR', this.$t('register.msg.err409'), 'error')
      }
    },
    _cleanForm() {
      this.user = {
        name: '',
        email: '',
        username: '',
        password: '',
        receive_notification_by_email: true,
        terms_agreed: false
      }
    },
    _msgBox(title, msg, type) {
      this.$alert(msg, title, {
        dangerouslyUseHTMLString: true,
        confirmButtonText: 'OK',
        type
      })
      this.loading.close()
    },
    _openFullScreen() {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.stylecard
  border-radius: 70px
  border-color: #ff6107
  padding: 40px

section
    padding-top: 50px

    .title-to-login
        font-size: 1.3em
        color: #595959
        text-align: center
        padding: 25px 0

    .box-check
        padding: 10px

        a
            color: #ff6107
            cursor: pointer
</style>
