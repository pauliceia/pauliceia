<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Mapathon UNIFESP 2018
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-three-fifths is-offset-one-fifth">
              <p class="has-text-justified">
                Mapathon realizada no dia 03/01/2018 para o mapeamento do bairro
                da Liberdade, assim como pontos turísticos da região.
                <br/>
                A Liberdade é um bairro turístico da cidade de São Paulo, localizado
                parte no distrito da Liberdade e parte no distrito da Sé. É
                conhecido como o maior reduto da comunidade japonesa na cidade, a
                qual, por sua vez, congrega a maior colônia japonesa do mundo.
                <br/>
                Conhecido por ser um bairro de orientais, a Liberdade era um bairro
                de negros. Abrigou organização de ex escravos e descendentes como a
                Frente Negra Brasileira e mais tarde o Paulistano da Glória que foi
                um sindicato de domésticas que virou escola de samba e era liderado
                pelo sambista Geraldo Filme.
                <br/>
                A presença japonesa no bairro começa quando em 1912 os imigrantes
                japoneses começaram a residir na rua Conde de Sarzedas, ladeira
                íngreme, onde na parte baixa havia um riacho e uma área de várzea.
                <br/>
                Um dos motivos de procurarem essa rua é que quase todos os imóveis
                tinham porões, e os aluguéis dos quartos no subsolo eram
                incrivelmente baratos. Nesses quartos moravam apenas grupos de
                pessoas. Para aqueles imigrantes, aquele cantinho da cidade de São
                Paulo significava esperança por dias melhores. Por ser um bairro
                central, de lá poderiam se locomover facilmente para os locais de
                trabalho.
              </p>
            </div>
            <div class="column">
              <figure class="image is-4by3">
                <img :src="liberdade">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="columns">
      <div class="column is-half">
        <nav class="panel">
          <p class="panel-heading">
            Camadas
            <a class="panel-block is-active">
              Pontos Turisticos
            </a>
            <a class="panel-block">
              Fotos
            </a>
            <a class="panel-block">
              Depoimentos
            </a>
          </p>
        </nav>
      </div>
      <div class="column">

      </div>
    </div>
  </div>
</template>

<script>
  import liberdade from '../../img/liberdade.jpg'

  export default {
    data () {
      return {
        liberdade
      }
    }
  }
</script>
