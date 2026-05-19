Feature: Feature name is thing but big functiinality name /module name/ scenarioa= name

# scenario or scenario p=online is nothing but test case name

@regression
Scenario Outline: Verify login for facebook application_1
Given I launch the browser
Then I launch the facebook application

And I close the browser

@smoke
Scenario Outline: Verify login for facebook application_2
Given I launch the browser
Then I launch the facebook application
And I close the browser

@smoke
Scenario Outline: Verify login for facebook application_3
Given I launch the browser
Then I launch the facebook application
# And I close the browser