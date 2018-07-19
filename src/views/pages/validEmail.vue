<template>
</template>

<script>
import User from '@/middleware/User'

export default {
    async mounted() {
        try {    
            let token = this.$route.params.token
            const response = await User.validEmail(token)

            if(response.status < 400){
                this.$notify({
                    title: 'SUCESSO',
                    dangerouslyUseHTMLString: true,
                    message: this.$t('validEmail.msgSuccess'),
                    type: 'success'
                });
                this.$router.push({
                    path: '/login'
                })
            }
        
        } catch(error) {
            this.$message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                message: this.$t('validEmail.msgErr'),
                type: 'error'
            });
            this.$router.push({
                path: '/login'
            })
        }        
    }
}
</script>
