Feature: switch slider beetween single and double

  Scenario: Switch sliders
    Given Im at the Map page for the first time
    When click the começar button on the banner
    Then I will should see the "doubleSlider"
    When I click the Mudar régua button
    Then I will should see the "singleSlider"
