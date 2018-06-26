<template>
    <section class="col-md-6 mx-auto">

        <!-- form card login -->
        <div class="card rounded">
            <div class="card-header">
                <h3 class="mb-0">Register</h3>
            </div>
            
            <div class="card-body">

                <form class="form-signin" @submit.prevent="registerSubmit">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Name</label>
                            <input type="text" v-model="user.name" class="form-control form-control-lg" placeholder="Full Name" required>
                        </div>
                        <div class="form-group col-md-12">
                            <label>E-mail</label>
                            <input type="email" v-model="user.email" class="form-control form-control-lg" placeholder="E-mail address" required>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Username</label>
                            <input type="text" v-model="user.username" class="form-control form-control-lg" placeholder="Username" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Password</label>
                            <input type="password" v-model="user.password" class="form-control form-control-lg" placeholder="Password" required>
                        </div>
                    </div>
                    
                    <div class="box-check">
                        <el-checkbox label="Receive notification by email" v-model="user.receive_notification_by_email"></el-checkbox>
                        <br />
                        <el-checkbox label="I agree to the terms of use." v-model="terms_agreed"></el-checkbox> <a data-toggle="modal" data-target="#modalTerms"> ( read here ) </a>
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
            user: {
                name: '',
                email: '',
                username: '',
                password: '',
                receive_notification_by_email: true,
                terms_agreed: false,
                can_add_layer: true
            },
            loading: '',
            terms_agreed: false,
            emailSuporte: 'suporte@pauliceia.com.br',
            msgAlert: {
                type: '',
                message: 'Cadastro realizado com sucesso. Obrigado!'
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
            this.msgAlert.type = ''
            this.msgAlert.message = ''
            this._openFullScreen()
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

                    let idUser = response.data.user_id
                    const infoUser = await User.getUser('user_id='+idUser)

                    this.$store.dispatch('auth/setUser', infoUser.data.features[0].properties)
                    
                    this.loading.close()
                    let query = '/login';
                    this.$router.push({
                        path: query
                    })

                    this.$notify({
                        title: 'SUCESSO',
                        dangerouslyUseHTMLString: true,
                        message: 'Olá <strong>'+infoUser.data.features[0].properties.name+'</strong>, cadastro realizado com sucesso! Realize o login para acessar o sistema.',
                        type: 'success'
                    });

                    this._cleanForm()
                }
                
            } catch (error) {
                if( error.response == undefined || error.response.status == 500 ) 
                    this._msgBox(
                        'ERROR',
                        'Internal Server Error - contact the administrator - '+this.emailSuporte,
                        'error'
                    )
                else 
                    this._msgBox(
                        'ERROR',
                        '<strong>email</strong> or <strong>username</strong> already exists in our system',
                        'error'
                    )
            }
        },
        _cleanForm() {
            let userClean = {
                name: '',
                email: '',
                username: '',
                password: '',
                receive_notification_by_email: true,
                terms_agreed: false,
                can_add_layer: true
            }
            this.terms_agreed = false

            this.user = userClean
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

    .title-to-login
        font-size: 1.3em
        color: #666
        text-align: center
        padding: 25px 0
    
    .box-check
        padding: 10px

        a 
            color: #0099ff
            cursor: pointer

</style>
