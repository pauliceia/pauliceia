Feature: Buscar endereço
  Como um Usuário
  Quero buscar endereço em um dado ano
  Para verificar localização
    
  Scenario: Busca bem sucedida
    Given Estou na página do mapa
    When Eu preencho um endereço e ano de busca válidos
    And Eu clico em "Pesquisar"
    Then A localização é indicada no mapa junto com a legenda

  Scenario: Busca mal sucedida
    Given Estou na página do mapa
    When Eu preencho um endereço e ano de busca inválidos
    And Eu clico em "Pesquisar"
    Then A localização não é indicada no mapa nem a legenda