#language: pt

Funcionalidade: Adição de nova camada pelo usuário logado

    Contexto: Dado que estou na página de criar uma nova camada, preencho as informações dela e envio

    Cenario: Adição de camada com dados coerentes
    Como usuário da plataforma
    Eu quero conseguir realizar a adição de uma camada
    Para que enriquecer o projeto Pauliceia 2.0

        Dado que estou na página de criar uma nova camada, preencho as informações dela e envio
        Quando que eu preencho os dados de forma coerente
        E clico em enviar
        Então eu devo ver um pop-up informando que a camada foi adicionada com sucesso

    Cenario: Adição de camada data final que excede a data atual
    Como o usuário da plataforma
    Eu quero conseguir realizar a adição de uma camada
    Para que enriquecer o projeto Pauliceia 2.0

        Dado que estou na página de criar uma nova camada, preencho as informações dela e envio
        Quando que eu preencho os dados em que a data final da camada excede a data atual do preenchimento
        E clico em enviar
        Então eu devo ver um pop-up informando que não é possível enviar a camada
