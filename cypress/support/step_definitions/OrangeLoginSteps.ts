import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import OrangeLoginPage from "../pageObjects/OrangeLoginPage"
import PIMPage from "../pageObjects/PIMPage"
/// <reference types="cypress-xpath" />

const orangeLoginPage: OrangeLoginPage = new OrangeLoginPage()
// const pIMPage: PIMPage = new PIMPage()
Given ('I visited the home page of orange HRM', () => {
 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When ('I have entered the username and password', () => {
 orangeLoginPage.login()

})

Then ('I should be able to login successfully', ()=>{
cy.contains('Dashboard')
})

When('I have navigated to PIM page', () => {
 cy.contains(PIMPage.pimLink).click();
})

When('I have entered the employee id', ()=>{
 PIMPage.empID()
})

When('I have pressed the search button', () => {
 // cy.get('.orangehrm-left-space').click({ force: true })
 cy.xpath('//*[contains(@class,"orangehrm-left-space")]').click({ force: true })
 // cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain','0038')
// cy.xpath
})
// .orangehrm-horizontal-padding > .oxd-text

Then('I should be able see employee details of the employee', () => {
 // cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain','0038')
cy.xpath('//*[contains(@class,"oxd-table-cell")]').should('contain','0038')
})