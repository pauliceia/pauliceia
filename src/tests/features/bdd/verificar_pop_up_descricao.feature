# language: pt

Funcionalidade: Ver descrição da camada antes de adicioná-la ao mapa
Como um usuário do Pauliceia 2.0
Para que eu possa saber do que se trata a camada antes de adicioná-la ao mapa 
Eu quero ver a descrição da camada antes de adicioná-la ao mapa

Cenário: Abrir as informações da camada
  Dado que estou na página de mapa com o popup de bem-vindo fechado
  Quando abro o seletor de camadas 
  E clico no botão "DESCRIÇÃO"
  Então eu vejo o popup da descrição