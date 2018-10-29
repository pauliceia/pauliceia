<template>
    <div>
      <div class="row justify-content-md-center row-style">
        <div class="col-sm-4 column-style">
          <img class="picture" src="@/views/assets/images/untitled-4.png">
          <p>PAULICEIA 2.0:</p>
          <p style="position: relative; top: -10px;">Mapeamento colaborativo da história de São Paulo (1870 a 1940).</p>
          <br>
          <p>Entre em contato:</p>
          <p class="picture2 orange-style"><md-icon>mail</md-icon></p>
          <p class="orange-style">pauliceia_support@googlegroups.com</p>
          <p><img class="picture2" style="width: 25px; " src="@/views/assets/images/facebook.png">/grupohimaco</p>

        </div>
        <div class="col-sm-4 column-style">
          <p class="orange-style"><b>LINKS ÚTEIS</b></p>
          <br>
          <p class="orange-style"><b>Institucionais</b></p>
          <p><b>Arquivo Público do Estado de SP:</b> www.arquivoestado.sp.gov.br</p>
          <p><b>Emory University:</b> www.emory.edu</p>
          <p><b>Fundação de Amparo a Pesquisa de SP:</b> www.fapesp.br</p>
          <p><b>Instituto Nacional de Pesquisas Especial (INPE):</b> www.inpe.br</p>
          <p><b>Universidade Federal de SP (UNIFESP):</b> www.unifesp.br</p>
          <br>
          <p class="orange-style"><b>Plataformas / Software Livres</b></p>
          <p><b>Creative Commons:</b> https//creativecommons.org/</p>
          <p><b>gvSIG:</b> www.gvsig.com/pt</p>
          <p><b>TerraBrasilis:</b> http://terrabrasilis.dpi.inpe.br</p>
          <br>
          <p class="orange-style"><b>Base cartográfica</b></p>
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
