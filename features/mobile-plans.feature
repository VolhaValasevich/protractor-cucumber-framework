@all
Feature: Mobile Plans

  @plans @general
  Scenario Outline: User can view prices of mobile lines
    Given I open "https://www.t-mobile.com/" url
    When I click link "PLANS"
    And I wait until "Price Slider" is present
    And I drag "Price Slider" to "<Number> Slider Tick"
    And I wait until "Monthly Price" is present
    Then Text of "Monthly Price" should equal "<Price>"

    Examples:
      | Number | Price |
      | First  | 70    |
      | Second | 60    |
      | Third  | 47    |
      | Fourth | 40    |


  @plans @military
  Scenario Outline: User can view prices of mobile lines for service members
    Given I open "https://www.t-mobile.com/" url
    When I click link "PLANS"
    And I wait until "Military Plans Button" is present
    And I click "Military Plans Button"
    And I wait until "Price Slider" is present
    And I drag "Price Slider" to "<Number> Slider Tick"
    And I wait until "Monthly Price" is present
    Then Text of "Monthly Price" should equal "<Price>"

    Examples:
      | Number | Price |
      | First  | 55    |
      | Second | 40    |
      | Third  | 37    |
      | Fourth | 25    |