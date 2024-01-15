Feature: Login do usuário
  Como um Usuário
  Quero fazer login
  Para acessar funcionalidades exclusivas
    
  Scenario: Login bem-sucedido
    Given Estou na página de login
    When Eu preencho as informações válidas
    And Eu clico em "Entrar"
    Then o login é bem-sucedido e eu sou redirecionado para a página inicial

  Scenario: Login fracassado
    Given Estou na página de login
    When Eu preencho as informações inválidas
    And Eu clico em "Entrar"
    Then o login é negado e eu recebo um aviso de erro

