<template>
  <section class="page-weapper" itemscope itemtype="http://schema.org/CreativeWork">

    <div class="container">
      <header class="row row-style justify-content-md-center">
        <div class="col-lg-4 col-md-12 col-sm-12 mb-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('about.title1') }}</h5><br>
              <div class="card-text" itemprop="about" v-html="$t('about.text1')"/>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12 mb-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('about.title2') }}</h5><br>
              <div class="card-text" v-html="$t('about.text2')"/>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 col-sm-12 mb-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('about.title3') }}</h5><br>
              <div class="card-text" v-html="$t('about.text3')"/>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="container" style="padding-top:0px;">
      <header class="row row-style justify-content-md-center">
        <div class="col-sm-12 column-style">
          <div class="card card-style">

            <div class="card-body">
              <br>
              <!-- <h5 class="card-title">
                {{ $t('home.title4') }}
              </h5> -->
              <div class="card-text">
                <how-to-cite/>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>

    <div class="container2">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 column-style text-center">
            <h5 class="title2">{{ $t('about.title7') }}</h5><br>
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name1') }}</h5>
            {{ $t('about.desc1') }}
          </div>
          
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/1.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name26') }}</h5>
            {{ $t('about.desc26') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/26.png">
          </div>
        </div>      
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name3') }}</h5>
            {{ $t('about.desc3') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/3.png">
          </div>
          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Ana Maria Alves Barbour</h5>
            {{ $t('about.desc4') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/4.png">
          </div>
          
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name27') }}</h5>
            {{ $t('about.desc27') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/27.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Carlos Alberto Noronha</h5>
            {{ $t('about.desc6') }}
          <div class="mb-4 col-sm-12 column-style">
            <img class="picture" src="@/views/assets/images/perfil/6.png">
          </div>
          </div>                    
        </div>
        
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Cíntia Rodrigues de Almeida</h5>
            {{ $t('about.desc5') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/5.png">
          </div>

          
          <div class="col-sm-14 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Cristiane Regina Myiasaka</h5>
            {{ $t('about.desc7') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/7.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Daniela Leal Musa</h5>
            {{ $t('about.desc8') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/8.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Denis Taveira de Lima</h5>
            {{ $t('about.desc10') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/10.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Eduardo de Souza Goiabeira</h5>
            {{ $t('about.desc12') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/12.png">
          </div>
          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Ester Dantas Reis Nunes </h5>
            {{ $t('about.desc9') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/9.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Fernando Atique</h5>
            {{ $t('about.desc11') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/11.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gabriel Reis</h5>
            {{ $t('about.desc25') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/25.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gabriel Sansigolo</h5>
            {{ $t('about.desc14') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/14.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gilberto Ribeiro de Queiroz</h5>
            {{ $t('about.desc16') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/16.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Jeffrey Lesser </h5>
            {{ $t('about.desc13') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/13.png">
          </div>

          
          <div class="col-sm-12 column-style text-center"  itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Karine Reis Ferreira </h5>
            {{ $t('about.desc2') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/2.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Luanna M. do Nascimento</h5>
            {{ $t('about.desc15') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/15.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Monaliza Caetano</h5>
            {{ $t('about.desc17') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/17.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Nandamudi Vijaykumar</h5>
            {{ $t('about.desc18') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/18.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Orlando Guarnier Farias</h5>
            {{ $t('about.desc19') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/19.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Priscila Machado Meireles</h5>
            {{ $t('about.desc21') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/21.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Raphael Augusto de Oliveira Silva</h5>
            {{ $t('about.desc28') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/28.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Rodrigo Mariano</h5>
            {{ $t('about.desc20') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/20.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Thomas Rogers</h5>
            {{ $t('about.desc22') }}
          </div>
          <div class="col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/21_1.png">
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Vitória Martins Fontes da Silva</h5>
            {{ $t('about.desc23') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/23.png">
          </div>

          
          <div class="col-sm-12 column-style text-center" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Wania Mazzarello</h5>
            {{ $t('about.desc24') }}
          </div>
          <div class="mb-4 col-sm-12 column-style text-center">
            <img class="picture" src="@/views/assets/images/perfil/24.png">
          </div>
        </div>
        {{/**/}}
      </div>
    </div>



    <div class="text-center">
        <h5 style="text-align: center; margin-top: 50px;">{{ $t('about.title4') }}</h5>
      </div>



    <div class="container">
    <header class="row justify-content-md-center text-center">
      <!-- <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        {{ $t('about.title4') }}
      </div> -->
      <!-- <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        {{ $t('about.title4') }}
      </div> -->
      
      <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        <img class="picture img-fluid" src="@/views/assets/images/logos/inpe_transparente.png">
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        <br>
        <img class="picture img-fluid" src="@/views/assets/images/logos/unifesp_verde_fundo_transparente.png">
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        <br>
        <img class="picture img-fluid" src="@/views/assets/images/logos/logo_himaco_fundo_transparente.png">
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 text-center">
        <br>
        <img class="picture img-fluid" src="@/views/assets/images/logos/labhum_2018-crop-u6539.jpg">
      </div>
      </header>
      </div>



      <div class="text-center">
        <h5 style="text-align: center; margin-top: 50px;">{{ $t('about.title5') }}</h5>
      </div>



      <div class="container">
        <header class="row justify-content-md-center text-center">
        <div class="col-lg-3 col-md-3 col-sm-12 text-center">
        <img class="picture img-fluid" src="@/views/assets/images/logos/logofapesp_transparente.png">
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 text-center">
        <img class="picture img-fluid" src="@/views/assets/images/logos/eu_vt_280.png">
        </div>
        </header>
        </div>

      <div class="text-center">
        <h5 style="text-align: center; margin-top: 50px;">{{ $t('about.title6') }}</h5>
      </div>

      <div class="container">
        <header class="row justify-content-md-center text-center">
        <div class="col-lg-3 col-md-3 col-sm-12 text-center">
          <img class="img-fluid picture" src="@/views/assets/images/logos/fapesp_fundo_transparente.png">
      </div>
        </header>
        </div>
 

          


  </section>
</template>

<script>
import HowToCite from '@/views/components/HowToCite.vue'

export default {
  components: {
    HowToCite
  }
}
</script>

<style lang="sass" scoped>

  .container3
    position: relative
    padding-top: 20px
    padding-bottom: 20px
  .page-weapper

    .container
      position: relative
      padding-top: 20px
      padding-bottom: 20px

    



      .card-style
        display: flex
        flex-direction: column
        height: 100%
        border-radius: 20px
        border-color: #f0470f
        transition: box-shadow 0.3s ease 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
        &:hover
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8)
          
        

        .card-text
          font-size: 16px

    .container2
      background-color: #333333
      padding-bottom: 50px
      color: white

      .container
        padding: 0

      .row
        margin: 0

      .row-style
        padding-bottom: 50px

      .title2
        position: relative
        padding-top: 20px
        color: white


    .picture
      position: relative
      top: 20px
      margin-top: 10px

    .picture2
      position: relative
      top: 0px
      padding-top: 20px
      width: 400px
      

</style>
