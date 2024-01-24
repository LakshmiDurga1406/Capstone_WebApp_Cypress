


/// <reference types="cypress" />



//reference url - https://www.npmjs.com/package/cypress-file-upload


describe('verify drag drop test', () => {



    it('dragdropTest', ()=>{


        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')



        cy.get('input[type="file"]').should('be.visible')            



        //install packge "file-upload"
        cy.get('input[type="file"]').attachFile('file.pdf')        //take file from fixture

        
        //click on upload button
        cy.get('input[type="submit"]').click();


        cy.wait(3000)

        //validation step

        //cy.get('h1').should('have.text','File Upload Results!')

    })



})


