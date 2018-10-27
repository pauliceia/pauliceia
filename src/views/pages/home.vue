<template>
  <div class="background">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src='@/views/assets/images/mapa1_1943.jpg' alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/views/assets/images/mapa2_1924.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/views/assets/images/mapa3_1890.png" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="@/views/assets/images/mapa5_1877.jpg" alt="Fourth slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="logo">
      <img src="@/views/assets/images/untitled-3.png">
    </div>
    <div class="text-style">
      <div class="row justify-content-md-center">
        <div class="col-sm-3 column-style">
          O que é?
          <br><br>
          <p>A Pauliceia 2.0 é uma plataforma que tem o objetivo de fazer o <span
            id="u2402-2">mapeamento colaborativo</span> da história de São Paulo no período de 1870 a 1940.</p>
        </div>
        <div class="col-sm-3 column-style">
          Como?
          <br><br>
          <p>Por meio da interface da plataforma, pesquisadores e estudiosos da cidade podem alimentar os seus
            dados,
            desde que sejam espacialmente localizáveis.
          <p>Dessa forma, uma <span id="u2445-4">base cartográfica</span> <span
            id="u2445-6">histórica da cidade</span>
            será enriquecida a cada alimentação, tornando esses dados também <span
              id="u2445-8">disponíveis a todos</span>.</p>
          <p>Por outro lado, o usuário que colaborar terá dessa forma um mapa ou uma visualização de sua própria
            pesquisa.</p>
          <p>&nbsp;</p>
        </div>
        <div class="col-sm-3 column-style">
          Quando ficará pronta?
          <br><br>
          <p>Atualmente está disponível uma <span id="u2454-2">versão beta para testes</span>.&nbsp; A versão final
            está prevista para janeiro de 2019.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style lang="sass" scoped>
  .background
    background-color: #333333

    .logo
      position: absolute
      display: flex
      right: 300px
      top: 100px

    .text-style
      padding: 100px
      color: white
      text-align: justify
      font-weight: bold
      font-size: 16px

      .column-style
        padding-right: 80px
</style>
