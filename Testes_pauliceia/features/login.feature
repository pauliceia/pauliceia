Feature: Login into the system.
  I want to go to Login into the Pauliceia page.

  Scenario: Login denied
    Given I'm at the Login page
    Then I will wait for 2 seconds
    When I enter wrong credentials
    Then I should see an error message

  Scenario: Login accepted
    Given I'm at the Login page
    Then I will wait for 2 seconds
    When I enter my credentials
    Then I should be succesfully logged in

