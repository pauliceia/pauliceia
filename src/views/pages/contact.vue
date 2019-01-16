<template>
    <div>
      <div class="row justify-content-md-center row-style" itemscope itemtype="https://schema.org/Organization">
        <div class="col-sm-4 column-style">
          <img class="picture" src="@/views/assets/images/untitled-4.png">
          <p itemprop="name">PAULICEIA 2.0:</p>
          <p style="position: relative; top: -10px;">{{ $t('contact.title1') }}</p>
          <br>
          <p>{{ $t('contact.contact') }}</p>
          <p class="picture2 orange-style"><md-icon>mail</md-icon></p>
          <p class="orange-style" itemprop="email">pauliceia_support@googlegroups.com</p>
          <p><img class="picture2" style="width: 25px; " src="@/views/assets/images/facebook.png">/grupohimaco</p>

        </div>
        <div class="col-sm-4 column-style">
          <p class="orange-style"><b>{{ $t('contact.links') }}</b></p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.institutional') }}</b></p>
          <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name">Arquivo Público do Estado de SP:</b> <span itemprop="url">www.arquivoestado.sp.gov.br</span></p>
          <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name">Emory University:</b> <span itemprop="url">www.emory.edu</span></p>
          <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name">Fundação de Amparo a Pesquisa de SP:</b> <span itemprop="url">www.fapesp.br</span></p>
          <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name">Instituto Nacional de Pesquisas Especial (INPE):</b> <span itemprop="url">www.inpe.br</span></p>
          <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name">Universidade Federal de SP (UNIFESP):</b> <span itemprop="url">www.unifesp.br</span></p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.platforms') }}</b></p>
          <p><b>Creative Commons:</b> https//creativecommons.org/</p>
          <p><b>gvSIG:</b> www.gvsig.com/pt</p>
          <p><b>TerraBrasilis:</b> http://terrabrasilis.dpi.inpe.br</p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.base') }}</b></p>
          <p><b>Open Street Map:</b> www.openstreetmap.org</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style lang="sass" scoped>
  .picture
    position: absolute
    top: 30px
    left: -50px
    width: 60px

  .picture2
    position: absolute
    left: -20px

  .column-style
    position: relative
    padding-top: 50px

  .orange-style
    color: #ff6107

</style>
