# language: pt

Funcionalidade: Filtrar apenas um ano
    Cenário: Filtrar apenas um ano
        Dado a pagina incial
        Quando eu abro o menu de adicionar camadas
        E adiciono a camada de "Cinemas between 1900 to 1950"
        E no slider "Seleção de um espaço de tempo" seleciono "1895" como maximo do periodo
        Então nao devo ver mais a camada que apresenta dados de 1900 ate 1950

        E no slider "Seleção de um único ano" seleciono "1905"
        Então devo voltar a ver a camada de 1900 ate 1950
