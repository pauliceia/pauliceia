<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <router-link :to="{ name: 'ProjectsSingle', params: {id: 1} }" class="tile is-child notification is-primary">
            <article>
              <p class="title">Mapathon UNIFESP 2018</p>
              <p class="subtitle">Mapathon do bairro da Liberdade</p>
              <div class="content">
                Mapathon realizada no dia 03/01/2018 para o mapeamento do bairro
                da Liberdade, assim como pontos turísticos da região.
              </div>
            </article>
          </router-link>
          <article class="tile is-child notification is-warning">
            <p class="title">Pesquisa sobre farmácias</p>
            <p class="subtitle">
              Pesquisa sobre a correlação entre farmácias e crimes em São Paulo
              de 1920.
            </p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">São Paulo 1886</p>
            <figure class="image is-4by3">
              <img :src="sp">
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Mapathon UNIFESP 2017</p>
          <p class="subtitle">Mapathon do bairro da Liberdade</p>
          <div class="content">
            <!-- Content -->
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import sp from '../../img/sp.jpg'

  export default {
    data () {
      return {
        sp
      }
    }
  }
</script>
