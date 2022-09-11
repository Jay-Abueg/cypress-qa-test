import * as React from "react";
import App from "../../src/App";
import { mount } from 'cypress/react18';
import {BrowserRouter as Router} from 'react-router-dom'; 

var subredditInput = "Automation";

describe('Smoke Test', () => {
  beforeEach('render page',() => {
    mount(
      <Router>
        <App />
      </Router> )
  })

  it('Verify the landing page components are visible', () => {

    cy.contains(/ImageQuix QA Automation Test/i).should('be.visible')
    cy.contains('Go').should('be.visible')
    cy.get('[class=subreddit-input]').should('be.visible')

  })

  it('Verify display content /all',() => {

    cy.contains('Go').click()
    
  })

  it('Verifies all routes contains text with "posted to /r/"', () => {

    cy.get('[class=author]').should('include.text', 'posted to /r/')

  })

  it('Verify that the search bar loads the posts for inputted subreddit or throws an error message if non existent', () => {

    cy.get('[class=subreddit-input]').type(subredditInput+'{enter}')
    cy.get('[class=post]').should('not.be.empty') || cy.should('include.text', 'Could not retrive results for')

  })

  it('Verifies the count returned vs. post rendered', () => { //will fail if there is no subreddit post return

    cy.get('[class=subreddit-input]').type(subredditInput+'{enter}')
    cy.get('[class=post]').then($elements => {
      let countOfElements = 0
      countOfElements = $elements.length;
      cy.log("count:"+countOfElements)

    });

  })

})