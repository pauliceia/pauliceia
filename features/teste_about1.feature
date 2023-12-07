# features/javascript_about_message.feature

Feature: Testing JavaScript Message in the "About" Section

  Scenario: Verify a message is shown in the "About" section
    Given I am on the JavaScript site home page
    When I press the "Sobre" button to access the "About" section
    Then I should see the message after title "Quem desenvolveu?": 
      """
      O projeto é uma parceria entre a UNIFESP (campi de Guarulhos e São José dos Campos), o Arquivo do Estado de SP, o INPE (Instituto Nacional de Pesquisas Espaciais) e a Emory University (Estados Unidos).
      Mas a concepção de “ciência aberta” que orienta o projeto faz dele uma iniciativa amigável à participação de todos os interessados em diversas etapas de sua execução.
      """
