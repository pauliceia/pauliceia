<template>
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
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
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