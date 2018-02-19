<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
            </div>
            
            <div class="card-body">
                <form class="form-signin">
                    <div class="form-label-group">
                        <input type="email" name="inputEmail" class="form-control form-control-lg" placeholder="Email address" required autofocus>
                    </div>
                    <br />
                    <div class="form-label-group">
                        <input type="password" name="inputPassword" class="form-control form-control-lg" placeholder="Password" required>
                    </div>
                    <br />
                    
                    <router-link to="/register" class="register">Register now <-</router-link>
                    <button type="button" class="btn btn-success btn-lg btn-block">Login</button>
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
import Authentication from '@/middleware/Authentication'

export default {
    data () {
        return {
            email: '',
            password: '',
            errors: [ {
                messages: []
            } ]
        }
    },
    methods: {
        async loginSubmit () {
            try {
                const response = await Authentication.login({
                    email: this.email,
                    password: this.password
                })

                this.$store.dispatch('auth/setToken', response.data.token)
                this.$store.dispatch('auth/setUser', response.data.user)

                let query = this.$route.query.redirect ? this.$route.query.redirect : '/dashboard';

                this.$router.push({
                    path: query
                })

            } catch (error) {
                this.errors = error.response.data.errors
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
