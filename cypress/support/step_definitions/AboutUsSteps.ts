import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AboutUsPage from "../pageObjects/AboutUsPage";

const aboutUsPage: AboutUsPage = new AboutUsPage()

Then ("the copy matches the copy reference document", () => {
 AboutUsPage
 .testUsCopy()
 .invoke('text')
 .then((text)=>{
  cy.readFile('cypress/fixtures/AboutUsCopy.txt').should('equal', text)
  cy.fixture("AboutUsCopy").should('eql', text)
 })
})

Then("the navigation links are all clickable", () =>{
 aboutUsPage.allNaviagtionLinks();
 
})
