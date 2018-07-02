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
                    message: 'Olá, seu e-mail foi validado com <strong>sucesso</strong>! Agora é só realize o <i>login</i> para acessar o sistema.',
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
                message: 'Erro ao efetuar a validação do seu E-mail. Link inválido!',
                type: 'error'
            });
            this.$router.push({
                path: '/login'
            })
        }        
    }
}
</script>
