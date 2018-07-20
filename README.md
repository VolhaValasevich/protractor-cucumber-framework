# protractor-cucumber-framework
TA Framework based on protractor-cucumber-framework

The framework tests functionality of [T-Mobile](https://www.t-mobile.com) website.

## Implemented scenarios

* **Scenario for checking the prices on mobile plans page:**
  * Open https://www.t-mobile.com
  * Click the PLANS link
  * Drag the price slider to the 1st, 2nd, 3rd and 4th tick
  * Check if the displayed price is correct
 
* **Scenario for checking the prices on mobile plans for service members page:**
  * Open https://www.t-mobile.com
  * Click the PLANS link
  * Click the "Check it out" button on the military plans advertisement
  * Drag the price slider to the 1st, 2nd, 3rd and 4th tick
  * Check if the displayed price is correct

* **Scenario for filtering the mobile phones store page and opening the first result page**
  * Open https://www.t-mobile.com
  * Click the PHONES link
  * Click the filter dropdown menu
  * Select the manufacturer (Apple, LG or Samsung)
  * Check if clicking on the first search result link leads you to the phone page
