/// <reference types="cypress" />



describe('verify dropdown test', () => {


    it('dropdown', () => {

        //launch application
        cy.visit('https://only-testing-blog.blogspot.com/2013/11/new-test.html')

        cy.get('[name="FromLB"]').should('be.visible')

       // cy.get('[name="FromLB"]').select('India')
      //  cy.get('[name="FromLB"]').select(['USA', 'Russia'])

        cy.get('[name="FromLB"]').select(['USA', 'Russia', 'India'])

    })
})