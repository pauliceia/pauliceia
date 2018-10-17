<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
            </div>

            <div class="card-body">

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

                    <router-link to="/register" class="register">{{ $t('login.register') }}</router-link>
                    <button type="submit" class="btn btn-success btn-lg btn-block">{{ $t('login.btnText') }}</button>
                </form>
            </div>

            <hr />
            <div class="col-lg-12">
                <div class="col-12 terms">
                    <p>{{ $t('login.terms') }}</p>
                    <a data-toggle="modal" data-target="#modalTerms"> ({{ $t('login.lbReadme') }}) </a>
                </div>
                <div class="col-6 link-social">
                    <md-list-item class="btn btn-primary" @click="loginSocial('facebook')">
                        <md-icon>thumb_up</md-icon>
                        <span class="md-list-item-text">Facebook</span>
                    </md-list-item>
                </div>
                <div class="col-6 link-social">
                    <md-list-item class="btn btn-danger" @click="loginSocial('google')">
                        <md-icon>add_box</md-icon>
                        <span class="md-list-item-text">Google+</span>
                    </md-list-item>
                </div>
            </div>
            <!--/card-block-->
        </div>
        <!-- /form card login -->

        <p-terms></p-terms>
    </section>

</template>

<script>
import User from '@/middleware/User'
import Terms from  '@/views/components/Terms'

import jsSHA from 'jssha'

export default {
    components: {
        'p-terms': Terms
    },
    data () {
        return {
            email: '',
            password: '',
            loading: null
        }
    },
    methods: {
        loginSocial(type) {
            window.location = process.env.urlVGI+"/api/auth/"+type
        },
        async loginSubmit () {
            try {
                this._openFullScreen()

                let password = new jsSHA("SHA-512", "TEXT")
                password.update(this.password)
                password = password.getHash('HEX')
                let credentials = decodeURI(window.btoa(encodeURI(this.email+":"+password)))

                const response = await User.login(credentials)
                let token = response.headers.authorization
                if(response.status == 200) {
                    this.$store.dispatch('auth/setToken', token)
                    
                    const response = await User.getUser(`email=${this.email}`)
                    this.$store.dispatch('auth/setUser', response.data.features[0].properties)
                    
                    this.loading.close()
                    let query = this.$route.query.redirect ? this.$route.query.redirect : '/explore';
                    this.$router.push({
                        path: query
                    })

                    this.$message({
                        showClose: true,
                        dangerouslyUseHTMLString: true,
                        message: this.$t('login.msg.success')+' <strong>'+response.data.features[0].properties.name+'</strong>!',
                        type: 'success'
                    });
                }
                
            } catch (error) {
                let msg = ''
                if(error.response.status == 404) msg = this.$t('login.msg.err404')
                else if(error.response.status == 409) msg = this.$t('login.msg.err409')
                this._msgBox(
                    'ERROR',
                    msg,
                    'error'
                )
            }
        },
        _msgBox(title, msg, type) {
            this.$alert(msg, title, {
                dangerouslyUseHTMLString: true,
                confirmButtonText: 'OK',
                type
            });
            this.loading.close()
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

}
</script>

<style lang="sass" scoped>
section
    padding-top: 50px

.terms
    text-align: center
    padding: 10px 0 20px 0
    a
        color: #0099ff
        cursor: pointer

.link-social
    margin-top: -15px
    padding: 20px 40px
    float: left !important
    text-align: center
    
    .md-list-item-text
        color: #FFF !important

    .md-icon
        margin-right: 10px
        color: #FFF !important

.register
    float: right
    padding: 0 20px 10px 0
    color: #666
.register:hover
    color: #000
</style>
