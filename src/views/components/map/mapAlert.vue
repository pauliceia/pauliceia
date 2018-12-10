<template>
  <section class="boxS" v-show="boxAlert">
    <header class="header">
      <img src="@/views/assets/images/logo.png" class="img">
      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
      <br>
    </header>
    <p><b>Bem-vindo(a) Plataforma "Pauliceia 2.0"</b></p>
    <p class="text1">VERSÃO BETA (fase de teste)</p>
    <p style="text-align: justify">Informamos que atualmente está disponível uma <b> versão beta para testes da plataforma. </b><br>
      Explore o mapa, pesquise e insira dados.<br>
      Qualquer dúvida, sugestão ou erro que porventura seja detectado durante sua navegação, solicitamos que, por gentileza,
      nos reporte por e-mail que está na aba "Contatos", para que possamos juntos construir uma ferramenta melhor.<br>
      Por favor, se acontecer algum problema na plataforma, reporte no e-mail e descreva-o detalhadamente, anexando o CSV, o Shapefile,
      imagem, print-screen ou outro arquivo usado e/ou desejado, para facilitar o rastreio do problema por parte da equipe. Além de que, adicionar o dia, hora e minuto do ocorrido, se possível.<br>
      Informamos ainda que, por estarmos na fase de testes, pode ser que nós limpemos o banco, fazendo com que você perca o seu usuário e seus dados. Isto é feito para melhor compatibilidade das novas
      funções que são criadas. Pedimos a sua compreensão em relação a isso, para que se registre novamente.<br>

      Agradecemos sua compreensão e contribuição."
    </p>
    <p style="text-align: right"> Equipe Pauliceia 2.0</p>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Vue from 'vue'

  export default {
    name: "mapAlert",

    computed: {
      ...mapState('map', ['boxAlert'])
    },

    data() {
      return {
      }
    },
    methods: {
      closeBox() {
        this.$store.dispatch('map/setBoxAlert', false)
      },
    }
  }
</script>

<style lang="sass" scoped>
  .boxS
    position: absolute
    display: inline-block
    vertical-align: middle
    top: 125px
    left: 20%
    width: 60%
    border-radius: 10px
    padding: 30px
    background: rgba(255, 255, 255, 0.95)
    z-index: 99


    .header
      width: 100%
      border-bottom: 0px solid #f15a29
      display: flex
      justify-content: center
      padding-bottom: 20px
      h1
        padding: 5px 5px 10px 5px
        font-size: 1.3em
        font-weight: 400
        font-family: 'Roboto' !important
        display: inline-block
        margin: 0 !important
        color: #000000

      .img
        width: 250px
        height: 120px

      .btn
        margin: 3px !important
        padding: 2px !important
        background: none
        font-size: 1em
        border: none
        float: right
        right: 20px
        position: absolute

      .btn:hover
        background: rgba(#000, 0.1)

    .text1
      color: #ff6107
      font-size: 30px
      text-align: center
      padding: 5px

</style>
