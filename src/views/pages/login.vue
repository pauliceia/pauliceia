<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
            </div>
            
            <div class="card-body">
                <div v-show="error != ''" class="alert alert-danger" role="alert">
                    <strong>Error:</strong> {{ error }}
                </div>

                <form class="form-signin" @submit.prevent="loginSubmit">
                    <div class="form-label-group">
                        <input type="email" v-model="email" class="form-control form-control-lg" :placeholder="$t('login.inputEmail')" required autofocus>
                    </div>
                    <br />
                    <div class="form-label-group">
                        <input type="password" v-model="password" class="form-control form-control-lg" :placeholder="$t('login.inputPassword')" required>
                    </div>
                    <br />
                    
                    <router-link to="/register" class="register">{{ $t('login.register') }} <-</router-link>
                    <button type="submit" class="btn btn-success btn-lg btn-block">{{ $t('login.btnText') }}</button>
                </form>
            </div>

            <hr />
            <div class="col-lg-12">
                <div class="col-6 link-social">
                    <md-list-item class="btn btn-primary">
                        <md-icon>thumb_up</md-icon> 
                        <span class="md-list-item-text">Facebook</span>
                    </md-list-item>
                </div>
                <div class="col-6 link-social">
                    <md-list-item class="btn btn-danger">
                        <md-icon>add_box</md-icon> 
                        <span class="md-list-item-text">Google+</span>
                    </md-list-item>
                </div>
            </div>
            <!--/card-block-->
        </div>
        <!-- /form card login -->

    </section>
   
</template>

<script>
import Authentication from '@/middleware/User'
import jsSHA from 'jssha'

export default {
    data () {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async loginSubmit () {
            try {
                let password = new jsSHA("SHA-512", "TEXT")
                password.update(this.password)
                password = password.getHash('HEX')
                let token = decodeURI(window.btoa(encodeURI(this.email+":"+password)))

                const response = await Authentication.login(token)
                if(response.status == 200) {
                    this.$store.dispatch('auth/setToken', token)

                    const response = await Authentication.getUser(`email=${this.email}`)
                    this.$store.dispatch('auth/setUser', response.data.features[0].properties)

                    this.error = ''

                    let query = this.$route.query.redirect ? this.$route.query.redirect : '/explore';
                    this.$router.push({
                        path: query
                    })
                }

                
            } catch (error) {
                this.error = "email or password incorrect!"
            }
        }
    }

}
</script>

<style lang="sass" scoped>
section
    padding-top: 50px

.link-social
    margin-top: -15px
    padding: 20px 40px
    float: left !important
    text-align: center

    .md-icon
        margin-right: 10px

.register
    float: right
    padding: 0 20px 10px 0
    color: #666
.register:hover
    color: #000
</style>
