<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
            </div>
            
            <div class="col-lg-12">
                <div class="col-6 link-social">Facebook</div>
                <div class="col-6 link-social">Google+</div>
            </div>

            <hr />
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
                    
                    <span>register now</span>
                    <button type="button" class="btn btn-success btn-lg float-right">Login</button>
                </form>
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
    padding: 40px
    background: red
    float: left !important
    text-align: center     
</style>
