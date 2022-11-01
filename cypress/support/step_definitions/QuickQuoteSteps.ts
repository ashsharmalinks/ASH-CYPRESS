import { DataTable, Step, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Context } from "mocha";
import HomePage from "../pageObjects/HomePage";

const homePage: HomePage = new HomePage();
function slideToValue(rangeSlider: JQuery<HTMLElement>, value: number) {
  const valueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  )?.set;
  const range = rangeSlider[0];
  valueSetter?.call(range, value);
  range.dispatchEvent(new Event("change", { bubbles: true }));
}

When("the {string} slider selects a value between {string}",
  (slider: string) => {
    // this.sliderType = slider
    if (slider == "borrow amount") {
      homePage.loanAmount().then((rangeSlider) => {
        slideToValue(rangeSlider, 12000)})}
       
        homePage.termAmount().then((rangeSlider) => {
         slideToValue(rangeSlider,30)
        })       
       })
  
Then("the below figures will change to the correct amounts", () => {
 
  let expectedValue = '£530'
  
  // if(field[0] === 'Monthly repayment') {
  //  expectedValue = '£530.24' || '239.18'
  // }
  // cy.contains(field[0]).prev().should('contain', expectedValue)
  // cy.contains('Monthly repayment').should('contain', expectedValue)

  cy.get('#monthly-result').find('.calculator__figure_number').should('have.text', '£530.24 ')

  cy.get('#monthly-result').find('.calculator__figure_number').then((test) => {
    let test1 = test.text().trim()
    expect(test1).to.equal('£530.24')
    cy.contains('£530.24').should('contain', expectedValue)
  }
  )
}
 )

 // Then("the below figures will change to the correct amounts", () => {
 //  cy.get('#monthly-result').find('.calculator__figure_info').then((value) =>{
 //   let actulValue: string = "£530.24"
 //   let expectedvalue = value.text().trim();
 //   expect(expectedvalue).to.deep.equal(actulValue)
 //  })

// });
