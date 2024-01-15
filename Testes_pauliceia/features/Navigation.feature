Feature: I want to navigate through the Pauliceia 2.0 pages
  I want to go to other Pauliceia 2.0 pages from the home page.

  Scenario: Click the "ENTRAR" button
    Given I'm on the home page
    When I click the Entrar button
    Then I should see "Acesse sua conta"
    When I click the Mapa button
    Then I should see "Procure um endereço"
    When I click the Sobre button
    Then I should see "Quem desenvolveu"
    When I click the Contato button
    Then I should see "Entre em contato"
    When I click the Home button
    Then I should see "O que é?"