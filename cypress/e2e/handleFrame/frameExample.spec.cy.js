/// <reference types="cypress" />



describe('verify frame test', () => {



    it('frame test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')


        const myFrame = cy.get('#mce_0_ifr')
                            .its('0.contentDocument.body')
                            .should('be.visible')
                            .then( cy.wrap )




        myFrame.clear().type('Welcome you all in today session !!').type('{ctrl}A')


        //click on bold button inside frame
        cy.get('[title="Bold"]').click()
        cy.get('button[title="Italic"]').click()


    })




})