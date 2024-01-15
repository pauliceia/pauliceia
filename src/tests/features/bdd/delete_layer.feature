#language: pt

Funcionalidade: Adição de nova camada pelo usuário logado

    Contexto: Dado que estou na página do painel

    Cenario: Remoção de camada determinada
    Como o usuário da plataforma
    Eu quero remover de uma camada que criei
    Para que outras pessoas não a utilizem

        Dado que estou na página do painel
        Quando eu seleciono o botão de remoção da camada que quero excluir
        Então eu devo ver um pop-up pedindo a confirmação de remoção
        Quando eu clico no botão de confirmação
        Então a camada é excluída

    Cenario: Remoção de camada desistente
    Como o usuário da plataforma
    Eu quero remover de uma camada que criei
    Para que outras pessoas não a utilizem

        Dado que estou na página do painel
        Quando eu seleciono o botão de remoção da camada que quero excluir
        Então eu devo ver um pop-up pedindo a confirmação de remoção
        Quando eu clico no botão de cancelamento da remoção
        Então a camada não é excluída
