import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import OrangeLoginPage from "../pageObjects/OrangeLoginPage"
import PIMPage from "../pageObjects/PIMPage"

const orangeLoginPage: OrangeLoginPage = new OrangeLoginPage()
const pIMPage: PIMPage = new PIMPage()
Given ('I visited the home page of orange HRM', () => {
 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When ('I have entered the username and password', () => {
 orangeLoginPage.login()

})

Then ('I should be able to login successfully', ()=>{
cy.contains('Search')
pIMPage.employeeID()

})
