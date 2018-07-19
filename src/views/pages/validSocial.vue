<template>
</template>

<script>
import User from '@/middleware/User'

export default {
    async mounted() {
        try {    
            let token = this.$route.params.token
            const response = await User.getUserByToken(token)

            if(response.status == 200){
                this.$store.dispatch('auth/setToken', token)
                this.$store.dispatch('auth/setUser', response.data.properties)

                this.$message({
                        showClose: true,
                        dangerouslyUseHTMLString: true,
                        message: this.$t('validSocial.msgSuccess')+' <strong>'+response.data.properties.name+'</strong>!',
                        type: 'success'
                    });
                this.$router.push({
                    path: '/explore'
                })
            }
        
        } catch(error) {
            this.$message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                message: this.$t('validSocial.msgErr'),
                type: 'error'
            });
            this.$router.push({
                path: '/login'
            })
        }        
    }
}
</script>
