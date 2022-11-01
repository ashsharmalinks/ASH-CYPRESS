export default class OrangeLoginPage {
 
 
 public login() {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    return cy.get(".oxd-button").click();
  }
}
