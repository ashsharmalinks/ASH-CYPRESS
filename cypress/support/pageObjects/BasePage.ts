export  class BasePage{

 private navLinks: object ={
  Home: '/',
  'Our Reward Loan': '/our-loan'
 }

 public navigateTo(navOption: string): BasePage {
  cy.get('.main-nav').contains(navOption).click()
  return this
 }

}