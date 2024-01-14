Feature: Change the Home page language
  I want to change the Home page of Pauliceia 2.0 to English or Portuguese

  Scenario: Click the USA flag icon and then the Brazil Icon
    Given I'm on the home page
    When I click the USA flag icon
    Then I should see the message "What is it?" on the bottom left corner
    When I click the Brazil flag icon
    Then I should see the message "O que é?" on the bottom left corner
  

    