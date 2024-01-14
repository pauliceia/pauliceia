# language: pt

Funcionalidade: Limpar filtros da camada

Cenário: Limpar filtros adicionados
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu abro o menu de filtros
E eu filtro pelo autor "Miguel"
E eu filtro pela data inicial "01/01/1921"
E eu filtro pela data final "31/12/1930"
Então espero visualizar "1" camadas como resultado
Quando eu fecho o menu de filtros
Então espero visualizar "6" camadas como resultado

