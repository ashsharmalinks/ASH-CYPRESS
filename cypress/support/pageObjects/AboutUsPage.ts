import { BasePage } from "./BasePage";

export default class AboutUsPage extends BasePage{
static HEADER = "div[style='margin-top: 80px;']"

 static aboutUsCopy(): Cypress.Chainable<JQuery<HTMLElement>>{
  return cy.get('div[style="margin-top: 80px;"]')
 }
 static  testUsCopy() {
  return cy.get(this.HEADER)
 }

 public allNaviagtionLinks()
 {
  cy.get("a").each(page => {
   cy.request(page.prop('href')).then((resp)=> {
    expect(resp.status).to.eq(200)
   })
  })
 }

 static visitFAQPage() {
  cy.contains('FAQ').click()
 }

}