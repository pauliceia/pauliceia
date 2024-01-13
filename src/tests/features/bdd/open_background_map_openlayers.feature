# language: pt

Funcionalidade: Abrir mapa de fundo no OpenLayers

Cenário: Mapa de fundo selecionado e redirecionamento confirmado
Dado que eu esteja na tela de opções de download
Quando há um mapa de fundo selecionado
E eu clico no botão "Mapa de fundo"
E clico em "Sim"
Então deve abrir uma nova aba do OpenLayers

Cenário: Mapa de fundo selecionado e redirecionamento cancelado
Dado que eu esteja na tela de opções de download
Quando há um mapa de fundo selecionado
E eu clico no botão "Mapa de fundo"
E clico em "Voltar"
Então o popup de confirmação deve sumir

Cenário: Nenhum mapa de fundo selecionado
Dado que eu esteja na tela de opções de download
Quando não há um mapa de fundo selecionado
E eu clico no botão "Mapa de fundo"
Então deve aparecer uma mensagem de erro