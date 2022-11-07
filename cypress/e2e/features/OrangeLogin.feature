Feature: Orange login page functionality
  As a visitor to the public website,
  I want to be able to view information about LiveLend
  so that U understand the company's background
# test
  Background: User is logged in
    Given I visited the home page of orange HRM
    When I have entered the username and password

  Scenario: Oranage HRM Page - logins
    Then I should be able to login successfully

  Scenario: Search Employee id
    When I have navigated to PIM page
    And  I have entered the employee id
    And I have pressed the search button
    Then I should be able see employee details of the employee
