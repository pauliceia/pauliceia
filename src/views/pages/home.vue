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
          <how-to-cite/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HowToCite from '@/views/components/HowToCite.vue'

export default {
  name: "home",
  components: {
    HowToCite
  }
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
