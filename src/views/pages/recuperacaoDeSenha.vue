<template>
    <div style="background-color: rgba(255,168,134,0.66); min-height: 820px">
        <section class="col-md-6 mx-auto" >
            <div class="card rounded stylecard">
                <div class="card-body">
                    <div>
                    <h5 class="mb-0">Recuperação de Senha</h5>
                    <br />
                    <form class="form-signin" @submit.prevent="requestPasswordReset">
                        <div class="form-label-group">
                            <label for="email">Email:</label>
                            <input class="form-control form-control-lg" type="email" v-model="email" :placeholder="email" required>
                        </div>
                        <br />
                        <div>
                        <button class="btn style-btn btn-lg btn-block" type="submit">Enviar Email de Recuperação</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </template>
  
  <script>
  import Api from '@/middleware/ApiVGI'
  import User from '@/middleware/User'
  import Terms from  '@/views/components/Terms'

  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
    async requestPasswordReset() {
        try{
            let password = "123"
            let credentials = decodeURI(window.btoa(encodeURI(this.email + ":" + password)))
            const response2 = await User.requestPasswordReset(`email=${this.email}`, credentials);
            console.log(response.data)

        } catch(error){
            console.log("Erro:" + error);
        }
      },

    }
  };
  </script>

<style lang="sass" scoped>
section
    padding-top: 50px

.stylecard
    border-radius: 70px
    border-color: #ff6107
    padding: 40px

.style-btn
    position: relative
    width: 200px
    height: 40px
    float: right
    font-size: 15px
    padding: 0px
    background-color: rgb(255, 97, 7)
    color: rgb(255, 255, 255)

</style>