Feature: Mudança de idioma do site
  Como um usuário
  Quero poder mudar o idioma do site
  Para que eu possa entender e utilizar o conteúdo de maneira mais eficaz e alinhada com meu idioma nativo
    
  Scenario: Mudança de idioma
    Given Estou na página inicial
    And O site tem está em "<lingua_atual>"
    When Eu clico na bandeira "<bandeira>"
    Then O conteúdo da página deve ser traduzido para "<lingua_traduzida>"

    Examples:
        | lingua_atual | bandeira | lingua_traduzida |
        | portugues    | eua      | ingles           |
        | ingles       | brasil   | portugues        |
