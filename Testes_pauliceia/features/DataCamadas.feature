Feature: display temporal data of the layer (start date and end date) in the add and remove layers window

Scenario: observe temporal data of the layer in the add and remove layers window
    Given that I am in the add and remove layers window
    Then it should be possible to observe the "Data do ínicio" e "Data do término"

    Scenario: View the Start Date and End Date of the layer in the layer information window
        Given Im at the Map page for the first time
        When click the começar button on the banner
        When I click the Camadas button
        And click the "adicionar e remover camadas" icon
        When i search for "Streets in 1920" card
        And click the "Ativar" button on the "Streets in 1920" card
        Then i should close the window
        And click the engine button
        When i click in the information about layer
        Then i shoul see "DATA DO INÍCIO" e "DATA DO TÉRMINO"
        