# language: pt

Funcionalidade: Ver informações temporais da camada no modal de ver informações da camada

Cenário: Ver informações temporais da camada no modal de ver informações da camada
Dado que eu esteja na tela de adicionar e remover camadas
E adicione a camada "Addresses in 1869" a visualização
E fecho a tela de adicionar e remover camadas
E eu clico no botão de configurações da camada "Addresses in 1869"
E eu clico no botão de ver informações da camada "Addresses in 1869"
Então eu devo ver a informação temporal "DADOS TEMPORAIS: 01/01/1869 até 31/12/1975" no menu de informações da camada "Addresses in 1869"
