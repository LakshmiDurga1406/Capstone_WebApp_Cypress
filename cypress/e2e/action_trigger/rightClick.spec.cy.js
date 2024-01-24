/// <reference types="cypress"/>

describe('tigger test', () => {

    it('double click test', ()=>{


        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.get('span[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')

        cy.xpath('//span[text()="Delete"]').click()

        cy.on('window:alert', (alert)=>{

            expect(alert).to.contain('delete')

        })






    })


    })