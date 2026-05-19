Feature: Frames And Upload Files

Background: common steps
Given I launch the browser

@regression1
Scenario: verify playwright Frames
And I verify playwright Frames
And I close the browser

 @method2
Scenario: verify playwright upload files
Then I launch the test automation practice application
And I verify playwright upload files
# And I close the browser