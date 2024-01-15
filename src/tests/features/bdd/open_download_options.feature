# language: pt

Funcionalidade: Abrir opções de download

Cenário: Abrir tela com as opções de download
Dado que eu esteja na tela de explorar o mapa
Quando eu clico no ícone de download
Então deve aparecer uma tela com os botões "Visualização atual" e "Mapa de fundo"
# E clico em "Mapa de fundo"
# E clico em "Sim"
# Então deve abrir uma nova aba com o mapa selecionado

# Cenário: Baixar mapa de fundo quando não há um mapa ativo
# Dado que eu esteja na tela de explorar o mapa
# Quando eu clico no ícone de download
# E clico em "Mapa de fundo"
# Se nenhum mapa estiver selecionado
# Então deve aparecer um erro