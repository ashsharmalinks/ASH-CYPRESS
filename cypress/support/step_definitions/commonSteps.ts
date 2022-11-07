import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";

const homePage: HomePage = new HomePage()


Given("the Livelend homepage is displayed", ()=> {
 cy.visit('https://livelend.co/')
 homePage.acceptCookies()
 })
 
 When("navigating to the about US page", () =>{
  homePage.navigateTo('About us');
 })