Feature: About us
 As a visitor to the public website,
  I want to be able to view information about LiveLend
 so that U understand the company's background
 
 Background: Visit About Us page
  Given the Livelend homepage is displayed
  When navigating to the about US page

 Scenario: Copy should match reference document
  Then the copy matches the copy reference document

  Scenario: Naviagtion Links should be clickable
  Then the navigation links are all clickable