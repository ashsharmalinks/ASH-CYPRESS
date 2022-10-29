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
  cy.get("a").each(page => {
   cy.request(page.prop('href')).then((resp)=> {
    expect(resp.status).to.eq(200)
   })
  })
 }

}