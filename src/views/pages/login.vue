<template>
    <section>login</section>
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
    
    .container
        margin-top: 40px
    .logo
        padding: 10% 0 40px 0
        margin: 0 auto
        display: block
    .btn 
        margin-top: 30px
    
    .input-group
        margin-bottom: 10px
    
    @media (min-width: 768px)
        .container
            width: 30%
        
</style>
