Feature: Cadastro do usuário
  Como um Usuário
  Quero fazer cadastro
  Para acessar funcionalidades exclusivas
    
  Scenario: Cadastro não realizado por erro interno
    Given Estou na página de login
    When Eu escolho me registrar
    And Eu preencho informações válidas
    And Eu clico em "Cadastrar"
    Then Não há conexão com o servidor interno

