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
    <div class="logo" style="z-index: 1000;">
      <img v-if="$t('home.title2')==='Como?'" src="@/views/assets/images/home_slider_pt_br.png">
      <img v-else src="@/views/assets/images/home_slider_en.png">
    </div>
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-sm col-md column-style">
          <h5>{{ $t('home.title1') }}</h5>
          <br>
          <p>{{ $t('home.column1') }}</p>
        </div>
        <div class="col-sm col-md column-style">
          <h5>{{ $t('home.title2') }}</h5>
          <br>
          <div v-html="$t('home.column2')"/>
          <p>&nbsp;</p>
        </div> 
        <div class="col-sm col-md column-style">
          <h5>{{ $t('home.title3') }}</h5>
          <br>
          <p>{{ $t('home.column3') }}</p>
        </div> 
      </div>
      
      <div class="row learn">
        <a href="about" class="btn btn-info learn_more" role="button">
          {{ $t('home.learnmore') }}
        </a>
      </div>

    </div>

    <div class="footer">
        <div class="row justify-content-md-center">
          <div class="col-sm ">
            {{ $t('about.title4') }}
            <img class="picture"  src="@/views/assets/images/logos/unifesp_white.png">
          </div>
          <div class="col-sm ">
            <img class="picture2"  src="@/views/assets/images/logos/inpe_white.png">
          </div>
          <div class="col-sm ">
            <img class="picture2" src="@/views/assets/images/logos/himaco_white.png">
          </div>
          <div class="col-sm ">
            <img class="picture2"  src="@/views/assets/images/logos/labhum_white.png">
          </div>
          <div class="col-sm ">
            {{ $t('about.title5') }}
            <img class="picture"  src="@/views/assets/images/logos/arquivo_white.png">
          </div>
          <div class="col-sm ">
            <img class="picture2"  src="@/views/assets/images/logos/emory_white.png">
          </div>
          <div class="col-sm ">
            {{ $t('about.title6') }}
            <img class="picture" src="@/views/assets/images/logos/fapesp_white.png">
          </div>
        </div>
        <div class="row site_info">
          <div class="col-sm col-md">
            {{ $t('home.siteinfo') }}
          </div>
        </div>
    </div>

  </div>
</template>

<style lang="sass" scoped>
  .background
    background-color: #333333

    .logo
      position: absolute
      display: flex
      right: 300px
      top: 100px

    .container-fluid
      font-family: Montserrat-Regular
      padding: 100px
      color: white
      font-size: 16px
      letter-spacing: 2px
      line-height: 1.6

      .column-style h5
        color: #f15a29
        font-weight: 700
      
      .column-style
        padding-right: 50px
        padding-left: 50px

      .learn
        display: flex
        align-items: center
        justify-content: center
        padding-top: 10px

      .btn 
        font-size: 16px
        color: #f15a29
        border-color: #f15a29
        background-color: #333333
        margin-top: 10px
        
      .btn:hover
        text-decoration: none
        color: #FFF
        background: #f0470f        

  .footer
    color: #FFF
    position: relative
    padding: 0
    text-align: center

    .justify-content-md-center
      font-weight: 700
      margin: 0
      padding: 50px 200px    
      align-items: center

    .col-sm         
      display: grid
      align-items: baseline

  .picture
    position: relative
    padding-top: 50px
    max-width: 100%
    height: auto

  .picture2
    position: relative
    padding-top: 100px
    max-width: 100%
    height: auto
  
  .site_info
    color: #cccccc
    font-style: italic
    border-top: 1px solid
    border-color: rgba(255, 255, 255, 0.05)
    padding: 10px
    margin: 0

</style>
