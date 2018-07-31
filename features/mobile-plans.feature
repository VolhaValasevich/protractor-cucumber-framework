@all @plans
Feature: Mobile Plans

  Background: User is on the Plans page
    Given I open "https://www.t-mobile.com/" url
    When I click link "PLANS"
    Then Page title should contain "Cell Phone Plans"

  @general
  Scenario Outline: User can view prices of mobile lines  
    When I wait until "Price Slider" is present
    And I drag "Price Slider" to "<Number> Slider Tick"
    And I wait until "Monthly Price" is present
    Then Text of "Monthly Price" should equal "<Price>"

    Examples:
      | Number | Price |
      | First  | 70    |
      | Second | 60    |
      | Third  | 47    |
      | Fourth | 40    |


  @military
  Scenario: User can view prices of mobile lines for service members
    When I wait until "Military Plans Button" is present
    And I click "Military Plans Button"
    And I wait until "Pricing Container" is present
    And I click link "See pricing breakdown."
    And I wait until "Pricing Modal Window" is present
    Then Text of "Pricing Modal Window Header" should equal "Number of Lines"