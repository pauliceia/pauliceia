# language: pt

Funcionalidade: Baixar arquivo de log dos endereços não enontrados

Cenário: Ao importar os endereços, um ou mais não foram encontrados
Dado que eu tenha importado um arquivo de endereços
Quando eu clicar em "Visualizar"
Então deve abrir uma tela de confirmação
Quando eu clicar em "Sim"
Então deve ser baixado um arquivo formato "csv"