import { BasePage } from "./BasePage";

export default class HomePage extends BasePage {
  public acceptCookies(): HomePage {
    cy.contains("Accept").click();
    return this;
  }

  public navigateTo(navOption: string) {
    cy.get(".main-nav circle").should("not.exist");
    cy.get(".Header__Toggle-sc-1fl2qeg-0 > :nth-child(3)").click();
    cy.contains(navOption).click();
    cy.url().should('contain', 'about-us')
    return this;
  }

  public termAmount()
  {   
    return  cy.get('#termAmount')
  }

  public loanAmount()
  {   
    return  cy.get('#loanAmount')
  }

}
