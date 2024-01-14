Feature: Cadastro do usuário
  Como um Usuário
  Quero fazer cadastro
  Para acessar funcionalidades exclusivas
    
  Scenario: Cadastro bem-sucedido
    Given Estou na página de login
    When Eu escolho me registrar
    And Eu preencho informações válidas
    And Eu clico em "Cadastrar"
    Then Cadastro é bem-sucedido e eu sou redirecionado para a página de login

