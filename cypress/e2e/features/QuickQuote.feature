Feature: Quick quote
 As a visitor to the public website,
 I want to be able to view information about LiveLend
 so that U understand the company's background

 Background: quick quote page
  Given the Livelend homepage is displayed

 Scenario: Borrow slider should calculate loan
  When the 'borrow amount' slider selects a value between '1000 to 12000'
  Then the below figures will change to the correct amounts
   | Monthly repayment      |
   | Total amount repayable |
