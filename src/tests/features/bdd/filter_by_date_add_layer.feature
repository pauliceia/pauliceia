# language: pt

Funcionalidade: Filtrar camadas por data

Cenário: Filtrar apenas pela data inicial
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu abro o menu de filtros
E eu filtro pela data inicial "31/12/1930"
Então espero visualizar "4" camadas como resultado

Cenário: Filtrar apenas pela data final
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu abro o menu de filtros
E eu filtro pela data final "01/01/1919"
Então espero visualizar "3" camadas como resultado

Cenário: Filtrar apenas por data inicial e final
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu abro o menu de filtros
E eu filtro pela data inicial "01/01/1900"
E eu filtro pela data final "01/01/1919"
Então espero visualizar "1" camadas como resultado
