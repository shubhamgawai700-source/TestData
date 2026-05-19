Feature: Reading The Test Data From The Json File

Background: common steps
Given I launch the browser
Then I launch the test automation practice application

@regression
Scenario: verify reading the first set of data from the json file
And I am reading the first set of data from the json file
And I close the browser

@regression
Scenario: verify reading the second set of data from the json file
And I am reading the second set of data from the json file
And I close the browser

@regression
Scenario: verify reading the third set of data from the json file
And I am reading the third set of data from the json file
And I close the browser