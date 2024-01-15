<template>
    <div>
      <h1>Redefinição de Senha</h1>
      <form @submit.prevent="resetPassword">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
        <label for="newPassword">Nova Senha:</label>
        <input type="password" v-model="newPassword" required>
        <button type="submit">Redefinir Senha</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        newPassword: ''
      };
    },
    methods: {
      resetPassword() {
        // Chamar a API para redefinir a senha
        fetch('http://localhost:8888/api/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            new_password: this.newPassword
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Redirecionar para a página de login ou outra página conforme necessário
        })
        .catch(error => console.error('Erro:', error));
      }
    }
  };
  </script>