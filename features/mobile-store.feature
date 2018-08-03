@all
Feature: Mobile Store

    @store
    Scenario: User can search for the most popular phone of a certain manufacturer and view its page
        Given I open "https://www.t-mobile.com/" url
        When I click link "PHONES"
        And I click "Filter Button"
        And I wait until "Apple Checkbox" is clickable
        And I click "Apple Checkbox"
        And I click "First Search Result"
        Then Page title should contain "Apple iPhone X"
