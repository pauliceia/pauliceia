<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Register</h3>
            </div>
            
            <div class="card-body">
                <div v-show="msgAlert.message != ''" :class="'alert '+msgAlert.type" role="alert">
                    {{ msgAlert.message }}
                </div>

                <form class="form-signin" @submit.prevent="registerSubmit">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Name</label>
                            <input type="text" v-model="user.name" class="form-control form-control-lg" placeholder="Full Name">
                        </div>
                        <div class="form-group col-md-12">
                            <label>E-mail</label>
                            <input type="email" v-model="user.email" class="form-control form-control-lg" placeholder="E-mail address" required>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" v-model="user.username" class="form-control form-control-lg" placeholder="Username" >
                        </div>
                        <div class="form-group col-md-6">
                            <label>Passsword</label>
                            <input type="password" v-model="user.password" class="form-control form-control-lg" placeholder="Password" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" v-model="user.receive_notification_by_email" class="form-check-input">
                            <label class="form-check-label" style="font-size: 1.2em">Receive notification by email</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" v-model="terms_agreed" class="form-check-input">
                            <label class="form-check-label" style="font-size: 1.2em">I agree to the terms of use <a href="#" style="padding-left: 10px"> -> READ HERE <- </a></label>
                        </div>
                    </div>

                    <button type="submit" disabled class="btn btn-success btn-lg btn-block" id="btn-register">Register</button>
                </form>
            </div>

            <hr />
            <div class="col-lg-12">
                <p class="title-to-login">Are you already registered?
                    <router-link to="/login">CLICK HERE</router-link>
                </p>
            </div>
            <!--/card-block-->
        </div>
        <!-- /form card login -->
    </section>
   
</template>

<script>
import User from '@/middleware/User'
import jsSHA from 'jssha'

export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                username: '',
                password: '',
                receive_notification_by_email: true,
                terms_agreed: false,
                can_add_layer: true
            },
            terms_agreed: false,
            emailSuporte: 'suporte@pauliceia.com.br',
            msgAlert: {
                type: '',
                message: ''
            }
        }
    },
    watch: {
        terms_agreed(val){
            this.user.terms_agreed = this.terms_agreed
            if(this.user.terms_agreed) $('#btn-register').removeAttr('disabled')
            else $('#btn-register').attr('disabled', 'disabled')
        }
    },
    methods: {
        async registerSubmit () {
            try {
                if(this.user.email == '' || this.user.username == '' || this.user.password == '') {
                    this.msgAlert = {
                        type: "alert-danger",
                        message: "ERROR: complete all fields"
                    }

                } else {
                    let password = new jsSHA("SHA-512", "TEXT")
                    password.update(this.user.password)
                    password = password.getHash('HEX')

                    let user = { ...this.user, password }
                    const response = await User.register({
                        properties: user,
                        type: "User"
                    })

                    this.msgAlert = {
                        type: "alert-success",
                        message: "SUCCESS: Registration almost finished! Access your EMAIL and follow the instructions."
                    }
                    // this.$store.dispatch('auth/setToken', token)

                    // const response = await Authentication.getUser(`email=${this.email}`)
                    // this.$store.dispatch('auth/setUser', response.data.features[0].properties)
                }
                
            } catch (error) {
                if( error.response == undefined || error.response.status == 500 ) 
                    this.msgAlert = {
                        type: "alert-danger",
                        message: "ERROR: Internal Server Error - contact the administrator - "+this.emailSuporte
                    }
                else 
                    this.msgAlert = {
                        type: "alert-danger",
                        message: "ERROR: email or username already exists in our system"
                    }
            }
        }
    }

}
</script>

<style lang="sass" scoped>
section
    padding-top: 50px

    .title-to-login
        font-size: 1.3em
        color: #666
        text-align: center
        padding: 25px 0

</style>
