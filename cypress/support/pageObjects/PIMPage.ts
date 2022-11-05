export default class PIMPage {
  static employeeName = "test";
  static pimLink = 'PIM';
  static employeeID = '.oxd-label';
  static employeeInformation() {
    // Employee Name
    cy.get('input[placeholder="Type for hints..."]').eq(0).type("test");
    // cy.get(':nth-child(2) > .oxd-input').type('0070')
    //Employee Id
    // cy.get('.oxd-input').eq(1).type('0070')
    cy.get(this.employeeID)
      .contains("Employee Id")
      .parent()
      .next()
      .find('input')
      .type('0074');
    cy.get('.oxd-input-group__label-wrapper')
      .contains("Employment Status")
      .parent()
      .next()
      .find(".oxd-select-text-input")
      .click({ force: true });
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get(".oxd-select-option").contains("Freelance").click();

    // :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input
    // :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input
  }

  static empID() {
    cy.get(this.employeeID)
      .contains("Employee Id")
      .parent()
      .next()
      .find('input')
      .type('0038');

  }
}
