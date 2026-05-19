Feature: Locators

@regression
Scenario: verify playwright locators
Given I launch the browser
Then I launch the test automation practice application
And I verify playwright locators
And I close the browser

@regression
Scenario: verify playwright locators part2
Given I launch the browser
And I verify playwright locators part2
And I close the browser


@regression
Scenario: verify playwright selenium locators 
Given I launch the browser
Then I launch the test automation practice application
And I verify playwright selenium locators 
And I close the browser

# @method
# Scenario: verify playwright selenium xpath 
# Given I launch the browser
# Then I launch the test automation practice application
# And I verify playwright selenium xpath 
# //And I close the browser


@method
Scenario: verify playwright hard assertion  
Given I launch the browser
Then I launch the test automation practice application
And I verify playwright hard assertion
#And I close the browser

