# features/registration.feature
Feature: Teste de aceitação para o botão de registro

  Scenario: Verificar a existência e o redirecionamento do botão de registro
    Given I am on the home page
    When I click on the "Register" button
    Then I should be redirected to the registration page
