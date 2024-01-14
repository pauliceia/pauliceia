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

    <HowItWorks />

    <FAQ />

  </div>
</template>

<script>
import HowItWorks from '@/views/components/HowItWorks.vue'
import FAQ from '@/views/components/FAQ.vue'

export default {
  name: "home",
  components: {
    HowItWorks,
    FAQ
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
          
</style>
