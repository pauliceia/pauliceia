Feature: Redirecionamento de páginas
  Como um usuário
  Quero poder navegar entre as diferentes páginas do site
  Para que eu possa explorar o conteúdo e funcionalidades disponíveis no site
    
  Scenario Outline: Redirecionamento de todas as páginas acessíveis na página home
    Given Estou na página "Home"
    When Eu clico no botao "<botao>"
    Then Eu sou redirecionado para a página "<pagina>"

    Examples:
        | botao     | pagina   |
        | Home      | home     |
        | Mapa      | explore  |
        | Tutorial  | tutorial |
        | Sobre     | about    |
        | Contato   | contact  |
        | Entrar    | login    |