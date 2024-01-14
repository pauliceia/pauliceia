<template>
  <section class="page-weapper" itemscope itemtype="http://schema.org/CreativeWork">

    <div class="container">
      <header class="row row-style justify-content-md-center">
        <div class="col-sm-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('about.title1') }}</h5><br>
              <div class="card-text" itemprop="about" v-html="$t('about.text1')"/>
            </div>
          </div>
        </div>

        <div class="col-sm-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('about.title2') }}</h5><br>
              <div class="card-text" v-html="$t('about.text2')"/>
            </div>
          </div>
        </div>

        <div class="col-sm-4 column-style">
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
          <div class="col-sm-12 column-style">
            <h5 class="title2">{{ $t('about.title7') }}</h5><br>
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name1') }}</h5>
            {{ $t('about.desc1') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/1.png" alt="Imagem com descrito sobre o projeto">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/26.png" alt="Imagem com descrito sobre o projeto">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name26') }}</h5>
            {{ $t('about.desc26') }}
          </div>
        </div>      
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name3') }}</h5>
            {{ $t('about.desc3') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/3.png" alt="Imagem com descrito sobre o projeto">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/4.png" alt="Imagem com descrito sobre o projeto">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Ana Maria Alves Barbour</h5>
            {{ $t('about.desc4') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">{{ $t('about.name27') }}</h5>
            {{ $t('about.desc27') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/27.png" alt="Imagem com descrito sobre o projeto">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/6.png" alt="Imagem de Carlos Alberto Noronha">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Carlos Alberto Noronha</h5>
            {{ $t('about.desc6') }}
          </div>                    
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Cíntia Rodrigues de Almeida</h5>
            {{ $t('about.desc5') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/5.png" alt="Imagem de Cintia Rodrigues de Almeida">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/7.png" alt="Imagem de Cristiane Regina Myiasaka">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Cristiane Regina Myiasaka</h5>
            {{ $t('about.desc7') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Daniela Leal Musa</h5>
            {{ $t('about.desc8') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/8.png" alt="Imagem de Daniela Leal Musa">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/10.png" alt="Imagem de Denis Taveira de Lima">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Denis Taveira de Lima</h5>
            {{ $t('about.desc10') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Eduardo de Souza Goiabeira</h5>
            {{ $t('about.desc12') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/12.png" alt="Imagem de Eduardo de Souza Goiabeira">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/9.png" alt="Imagem de Ester Danta Reis Nunes">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Ester Dantas Reis Nunes </h5>
            {{ $t('about.desc9') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Fernando Atique</h5>
            {{ $t('about.desc11') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/11.png" alt="Imagem de Fernando Atique">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/25.png" alt="Imagem de Gabriel Reis">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gabriel Reis</h5>
            {{ $t('about.desc25') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gabriel Sansigolo</h5>
            {{ $t('about.desc14') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/14.png" alt="Imagem de Gabriel Sansigolo">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/16.png" alt="Imagem de Gilbero Ribeiro de Queiroz">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Gilberto Ribeiro de Queiroz</h5>
            {{ $t('about.desc16') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Jeffrey Lesser </h5>
            {{ $t('about.desc13') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/13.png" alt="Imagem de Jeffrey Lesser">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/2.png" alt="Imagem de Karine Reis Ferreira">
          </div>
          <div class="col-sm-4 column-style"  itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Karine Reis Ferreira </h5>
            {{ $t('about.desc2') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Luanna M. do Nascimento</h5>
            {{ $t('about.desc15') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/15.png" alt="Imagem de Luanna do Nascimento">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/17.png" alt="Imagem de Monaliza Caetano">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Monaliza Caetano</h5>
            {{ $t('about.desc17') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Nandamudi Vijaykumar</h5>
            {{ $t('about.desc18') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/18.png" alt="Imagem de Nandamudi Vijaykumar">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/19.png" alt="Imagem de Orlando Guarnier Farias">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Orlando Guarnier Farias</h5>
            {{ $t('about.desc19') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Priscila Machado Meireles</h5>
            {{ $t('about.desc21') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/21.png" alt="Imagem de Priscila Machado Meireles">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/28.png" alt="Imagem de Raphael Augusto de Oliveira Silva">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Raphael Augusto de Oliveira Silva</h5>
            {{ $t('about.desc28') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Rodrigo Mariano</h5>
            {{ $t('about.desc20') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/20.png" alt="Imagem de Rodrigo Mariano">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/21_1.png" alt="Thomas Rogers">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Thomas Rogers</h5>
            {{ $t('about.desc22') }}
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-center row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Vitória Martins Fontes da Silva</h5>
            {{ $t('about.desc23') }}
          </div>
          <div class="col-sm-2 column-style text-right">
            <img class="picture" src="@/views/assets/images/perfil/23.png" alt="Vitória Martins Fontes da Silva">
          </div>

          <div class="col-sm-2 column-style">
            <img class="picture" src="@/views/assets/images/perfil/24.png" alt="Wania Mazzarello">
          </div>
          <div class="col-sm-4 column-style" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2" itemprop="name">Wania Mazzarello</h5>
            {{ $t('about.desc24') }}
          </div>
        </div>
        {{/**/}}
      </div>
    </div>

    <div class="container">
      <header class="row">
        <div class="row justify-content-md-center">
          <div class="col-sm ">
            {{ $t('about.title4') }}
            <img class="picture" style="left: 30px" src="@/views/assets/images/logos/inpe_transparente.png" alt="logo INPE">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/unifesp_verde_fundo_transparente.png" alt="logo UNIFESP">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/logo_himaco_fundo_transparente.png" alt="logo himaco">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture2" src="@/views/assets/images/logos/labhum_2018-crop-u6539.jpg" alt="logo labhum">
          </div>

          <div class="col-sm ">
            {{ $t('about.title5') }}
            <img class="picture2" style="left: 30px" src="@/views/assets/images/logos/logofapesp_transparente.png" alt="logo FAPESP">
          </div>
          <div class="col-sm ">
            <br>
            <img class="picture" style="left: 30px" src="@/views/assets/images/logos/eu_vt_280.png" alt="logo FAPESP">
          </div>
          <div class="col-sm ">
            {{ $t('about.title6') }}
            <img class="picture2" style="left: 30px" src="@/views/assets/images/logos/fapesp_fundo_transparente.png" alt="logo FAPESP">
          </div>
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
  .page-weapper

    .container
      position: relative
      padding-top: 50px
      padding-bottom: 50px

      .column-style:first-child
        padding-left: 0

      .column-style:last-child
        padding-right: 0

      .card-style
        border-radius: 20px
        background-color: #ffb364
        min-height: 400px

        .card-text
          font-size: 16px

    .container2
      background-color: #c6c6c6
      padding-bottom: 50px

      .container
        padding: 0

      .row
        margin: 0

      .row-style
        padding-bottom: 50px

      .title2
        position: relative
        padding-top: 20px


    .picture
      position: relative
      top: 20px

    .picture2
      position: relative
      top: 0px
      padding-top: 20px
      width: 400px
</style>
