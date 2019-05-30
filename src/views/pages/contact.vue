<template>
    <div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-4 column-style">
          <img class="picture" src="@/views/assets/images/untitled-4.png">
          <p>PAULICEIA 2.0:</p>
          <p style="position: relative; top: -10px;">{{ $t('contact.title1') }}</p>
          <br>
          <p>{{ $t('contact.contact') }}</p>

          <div class="cols2">
            <p class="orange-style">
              <span class="picture2 orange-style"><md-icon>mail</md-icon></span>
              pauliceia_support@googlegroups.com
            </p>
            <p>
              <img class="picture2" src="@/views/assets/images/facebook.png">
              /grupohimaco
            </p>
          </div>

          <img src="@/views/assets/images/rodape.png">
        </div>
        <div class="col-sm-4 column-style">
          <p class="orange-style"><b>{{ $t('contact.links') }}</b></p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.institutional') }}</b></p>
          <p>
            <b>
              {{ $t('contact.envolvidos.arquivo_publico_sp') }}:
            </b> <a href="http://www.arquivoestado.sp.gov.br" target="_blank">www.arquivoestado.sp.gov.br</a>
          </p>
          <p>
            <b>
              {{ $t('contact.envolvidos.emory_university') }}:
            </b> <a href="http://www.emory.edu" target="_blank">www.emory.edu</a>
          </p>
          <p>
            <b>
              {{ $t('contact.envolvidos.fapesp') }}:
            </b> <a href="http://www.fapesp.br" target="_blank">www.fapesp.br</a>
          </p>
          <p>
            <b>
              {{ $t('contact.envolvidos.himaco') }}:
            </b> <a href="http://www.unifesp.br/himaco" target="_blank">www.unifesp.br/himaco</a>
          </p>
          <p>
            <b>
              {{ $t('contact.envolvidos.inpe') }}:
            </b> <a href="http://www.inpe.br" target="_blank">www.inpe.br</a>
          </p>
          <p>
            <b>
              {{ $t('contact.envolvidos.unifesp') }}:
            </b> <a href="http://www.unifesp.br" target="_blank">www.unifesp.br</a>
          </p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.platforms') }}</b></p>
          <p>
            <b>Creative Commons:</b>
            <a href="http://creativecommons.org">creativecommons.org</a>
          </p>
          <p>
            <b>gvSIG:</b>
            <a href="http://www.gvsig.com/pt">www.gvsig.com/pt</a>
          </p>
          <p>
            <b>TerraBrasilis:</b>
            <a href="http://terrabrasilis.dpi.inpe.br">terrabrasilis.dpi.inpe.br</a>
          </p>
          <br>
          <p class="orange-style"><b>{{ $t('contact.base') }}</b></p>
          <p>
            <b>Open Street Map:</b>
            <a href="http://www.openstreetmap.org">www.openstreetmap.org</a>
          </p>
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
    position: relative
    margin-right: 5px
    width: 25px

  .column-style
    position: relative
    padding-top: 50px

  .orange-style
    color: #ff6107

  .cols2

    p
      width: calc(50% - 5px)
      display: inline-block
</style>
