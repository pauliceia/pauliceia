# language: pt

Funcionalidade: Filtrar camadas por autor

Cenário: Filtrar apenas um autor
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu filtro pelo autor "Administrator"
Então todos os resultados visiveis devem conter "Administrator"

Cenário: Filtrar por mais de um autor
Dado que eu esteja na tela de adicionar e remover camadas
Quando eu filtro pelo autor "Administrator"
E eu filtro pelo autor "Rodrigo"
Então todos os resultados visiveis devem conter "Administrator" ou "Rodrigo"

