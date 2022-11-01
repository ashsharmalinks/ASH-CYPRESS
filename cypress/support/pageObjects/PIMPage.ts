export default class PIMPage{


 public employeeID(){
  cy.get('input[placeholder="Type for hints..."]').eq(0).type('test')
  // cy.get(':nth-child(2) > .oxd-input').type('0070')
  cy.get('.oxd-input').eq(1).type('0070')

  // :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input
 }

}