# language: pt

Funcionalidade: Ter cores diferentes entre point layers
Como um usuário do Pauliceia 2.0
Para que eu possa visualizar melhor as layers que estão no mapa
Eu quero ter cores diferentes entre as point layers 

Cenário: Abrir as informações da camada
  Dado que estou na página de mapa, abri o seletor de camadas e ativei as camadas "Edificios construidos na Avenida Sao Joao entre 1913 e 1936" e "Farmacias do ano de 1920 em Sao Paulo"
  Quando eu clico no botão de configurações da camada posicionada na posicao 1
  E eu clico no botão de configurações da camada posicionada na posicao 2
  Então vejo que as cores são diferentes