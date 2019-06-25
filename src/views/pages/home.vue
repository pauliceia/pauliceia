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
      <img v-if="$t('home.title2')==='Como?'" src="@/views/assets/images/untitled-3.png">
      <img v-else src="@/views/assets/images/chamada-slider.png">
    </div>
    <div class="text-style">
      <div class="row justify-content-md-center">
        <div class="col-sm-3 column-style">
          <b>{{ $t('home.title1') }}</b>
          <br><br>
          <p>{{ $t('home.column1') }}</p>
        </div>
        <div class="col-sm-3 column-style">
          <b>{{ $t('home.title2') }}</b>
          <br><br>
          <div v-html="$t('home.column2')"/>
          <p>&nbsp;</p>
        </div>
        <div class="col-sm-3 column-style">
          <b>{{ $t('home.title3') }}</b>
          <br><br>
          <p>{{ $t('home.column3') }}</p>
        </div>
      </div>

      <br>

      <div class="row justify-content-md-center">
        <div class="col-sm-9 column-style">
          <b>{{ $t('home.title4') }}</b>
          <br><br>
        </div>
        <div class="col-sm-9 column-style">          
          <p>
            FERREIRA, K. R.; FERLA, L.; QUEIROZ, G. R.; VIJAYKUMAR, N. L.; NORONHA, C. A.; 
            MARIANO, R. M.; TAVEIRA, D.; SANSIGOLO, G.; GUARNIERI, O.; ROGERS, T.; 
            LESSER, J.; PAGE, M.; ATIQUE, F.; MUSA, D.; SANTOS, J. Y.; MORAIS, D. S.; 
            MIYASAKA, C. R.; ALMEIDA, C. R.; NASCIMENTO, L. G. M.; DINIZ, J. A.; SANTOS, M. C. 
            A Platform for Collaborative Historical Research based on Volunteered Geographical 
            Information. Journal of Information and Data Management, Vol. 9, No. 3, December 2018, 
            Pages 291–304.
            <a href="https://periodicos.ufmg.br/index.php/jidm/article/view/426">
              link
            </a>
          </p>
        </div>
        <div class="col-sm-9 column-style">
          <br>
          <p>
            FERREIRA, K. R.; FERLA, L.; QUEIROZ, G. R. de; VIJAYKUMAR, N. L.;NORONHA, C. A.; 
            MARIANO, R. M.; WASSEF, Y.; TAVEIRA, D.; DARDI,I. B.; SANSIGOLO, G.; et al. 
            Pauliceia 2.0: A Computational Platform for Collaborative Historical Research. 
            In: XVIII Brazilian Symposium on Geoinformatics (GeoInfo 2017), 2017, Salvador. 
            XVIII Brazilian Symposium on Geoinformatics Proceedings, 2017. v. 1. p. 1.
            <a href="http://mtc-m16c.sid.inpe.br/col/sid.inpe.br/mtc-m16c/2017/12.01.20.22/doc/4ferreira_etal.pdf">
              link
            </a>
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "home",
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
      font-size: 16px

      .column-style
        padding-right: 80px
</style>
