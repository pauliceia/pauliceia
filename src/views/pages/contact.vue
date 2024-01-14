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
          <p class="orange-style" itemprop="email"><a :href="'mailto:' + $t('pauliceia_support@googlegroups.com')" target="_blank">{{ $t('pauliceia_support@googlegroups.com') }}</a></p>
          <p><a :href="$t('https://facebook.com/grupohimaco')" target="_blank"><img class="picture2" style="width: 25px;" src="@/views/assets/images/facebook.png">/grupohimaco</a></p>
          <p><a :href="$t('https://github.com/pauliceia')" target="_blank"><img class="picture2" style="width: 25px;" src="@/views/assets/images/github.png">/pauliceia</a></p>
        </div>

      <div class="col-sm-4 column-style">
        <p class="orange-style"><b>{{ $t('contact.links') }}</b></p>
        <br>
        <p class="orange-style"><b>{{ $t('contact.institutional') }}:</b></p>
        <p itemscope itemtype="https://schema.org/Organization">
          <b itemprop="name"><a :href="$t('https://www.arquivoestado.sp.gov.br')" target="_blank">{{ $t('contact.envolvidos.arquivo_publico_sp') }}</a></b>
        </p>   
        <p itemscope itemtype="https://schema.org/Organization">
            <b itemprop="name"><a :href="$t('https://www.emory.edu/home/')" target="_blank">{{ $t('contact.envolvidos.emory_university') }}</a></b>
        </p>
        <p itemscope itemtype="https://schema.org/Organization">
          <b itemprop="name"><a :href="$t('https://fapesp.br/')" target="_blank">{{ $t('contact.envolvidos.fapesp') }}</a></b>
        </p>
        <p itemscope itemtype="https://schema.org/Organization">
          <b itemprop="name"><a :href="$t('http://www2.unifesp.br/himaco/')" target="_blank">{{ $t('contact.envolvidos.himaco') }}</a></b>
        </p>
        <p itemscope itemtype="https://schema.org/Organization">
          <b itemprop="name"><a :href="$t('https://www.gov.br/inpe/')" target="_blank">{{ $t('contact.envolvidos.inpe') }}</a></b>
        </p>
        <p itemscope itemtype="https://schema.org/Organization">
          <b itemprop="name"><a :href="$t('https://www.unifesp.br/')" target="_blank">{{ $t('contact.envolvidos.unifesp') }}</a></b>
        </p>

        <br>
        <p class="orange-style"><b>{{ $t('contact.platforms') }}:</b></p>
        <p><b><a :href="$t('https://creativecommons.org/')" target="_blank">Creative Commons</a></b></p>
        <p><b><a :href="$t('http://www.gvsig.com')" target="_blank">gvSIG</a></b></p>
        <p><b><a :href="$t('http://terrabrasilis.dpi.inpe.br')" target="_blank">TerraBrasilis</a></b></p>

        <br>
        <p class="orange-style"><b>{{ $t('contact.base') }}:</b></p>
        <p><b><a :href="$t('https://www.openstreetmap.org')" target="_blank">Open Street Map</a></b></p>
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

