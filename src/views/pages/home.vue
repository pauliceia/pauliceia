<template>
  <div class="background">

    <div class="hero">
      <div class="hero-wrapper">
        <div class="hero-text">
          <h1>{{ $t('home.hero') }}</h1>
          <p>{{ $t('home.hero2') }}</p>
        </div>
        <div class="hero-button">
          <router-link to="/explore">
            <p>{{ $t('home.heroBtn') }}</p>
            <div class="btn-image">
              <img src="@/views/assets/images/arrow.svg" alt="arrow">
            </div>
          </router-link>
        </div>
      </div>
    
      <div class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src='@/views/assets/images/mapa1_1943.jpg' alt="First slide">
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="how-wrapper">
      <h3>
        {{ $t('home.how') }}
      </h3>

      <div class="how-container">
        <div class="how-item">
          <img src="@/views/assets/images/home/add.svg" alt="add">
          <h5>{{ $t('home.howTitle1') }}</h5>
          <p>{{ $t('home.howText1') }}</p>
        </div>

        <div class="how-item">
          <img src="@/views/assets/images/home/acumulate.svg" alt="visualize">
          <h5>{{ $t('home.howTitle2') }}</h5>
          <p>{{ $t('home.howText2') }}</p>
        </div>

        <div class="how-item">
          <img src="@/views/assets/images/home/world.svg" alt="compare">
          <h5>{{ $t('home.howTitle3') }}</h5>
          <p>{{ $t('home.howText3') }}</p>
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
    background-color: #111111

    .text-style
      padding: 100px
      color: white
      font-size: 24px

      .column-style
        padding-right: 80px

    .hero
      position: relative
      display: flex
      flex-direction: column
      justify-content: flex-end
      height: calc(100vh - 80px)
      width: 100%
      overflow: hidden
      font-family: 'PT Serif', serif

      .hero-wrapper
        display: flex
        justify-content: space-between
        align-items: flex-end
        height: 100%
        padding: 2%
        background-image: url("../assets/images/hero.svg")
        background-repeat: no-repeat
        background-size: cover
        background-position: bottom
        
        .hero-text
          color: #c6c6c6
          display: flex
          position: relative
          width: 650px

          h1
            font-size: 60px

          p
            position: absolute
            right: -120px
            top: 0px
            font-size: 24px
        .hero-button
          a
            display: flex
            align-items: flex-end
            gap: 12px

            font-size: 24px
            color: #c6c6c6;

            p
              margin-bottom: 0px

            img
              width: 42px
              aspect-ratio: 1/1
    
    .how-wrapper
      padding: 100px 5%
      color: #c6c6c6
      font-family: 'Archivo', sans-serif

      .how-container
        display: flex
        justify-content: space-between
        align-items: center
        
        .how-item
          display: flex
          flex-direction: column
          align-items: flex-start
          gap: 12px
          width: 444px

          img
            margin-top: 80px
            margin-bottom: 60px 

          h5
            font-size: 24px
            font-weight: 600
            line-height: 1.5

          p
            font-size: 18px
            line-height: 1.5
            font-weight: 300
            opacity: 0.8

        
</style>
