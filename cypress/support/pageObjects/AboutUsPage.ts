import { BasePage } from "./BasePage";

export default class AboutUsPage extends BasePage{
 public aboutUsCopy(): Cypress.Chainable<JQuery<HTMLElement>>{
  return cy.get('div[style="margin-top: 80px;"]')
 }
 public testUsCopy() {
  return cy.get('div[style="margin-top: 80px;"]')
 }

 public allNaviagtionLinks()
 {
  const pages = ['/', 'about', 'test']
  // cy.get("main-nav").children().should('have.attr', 'href')
  cy.get("a").each(page => {
   cy.request(page.prop('href'))
  })
 }

}