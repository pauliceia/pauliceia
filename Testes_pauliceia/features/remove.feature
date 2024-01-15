Feature: Confirm removal of a layer by clicking the delete button

Scenario: Delete any layer via Dashboard HomePage2
    Given I am on the Home of the Dashboard
    When I click the delete icon next to the name of any layer called in the My Layers list
    Then a pop-up window should appear, asking if the user really wants to delete the layer

Scenario: Delete layer via layer edit page in Dashboard
    Given that Im on the edit page for any layer called 
    When I click on the red button labeled "Delete"
    Then a pop-up window should appear, asking if the user really wants to delete the layer