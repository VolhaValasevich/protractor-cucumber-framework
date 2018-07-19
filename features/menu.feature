@all
Feature: Mobile Plans

  @plans
  Scenario Outline: Verify user can change price
    Given I open "https://www.t-mobile.com/" url
    When I click link "PLANS"
    And I wait until "Price Slider" is present
    And I drag "Price Slider" to "<Number> Slider Tick"
    And I wait until "Monthly Price" is present
    Then Text of "Monthly Price" should equal "<Price>"

    Examples:
      | Number | Price |
      | Fourth | 40    |
      