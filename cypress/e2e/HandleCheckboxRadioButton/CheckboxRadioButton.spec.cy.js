describe('verify amazon App', ()=>{


    it(' verify login feature', ()=>{

        //launch application
        cy.visit('https://www.amazon.in/')




        cy.xpath("//input[@placeholder = 'Search Amazon.in']").type('iphone 15 pro')

        //cy.get('input[type="text"]').clear().type('iphone 15 pro').should('have.value', 'iphone 15 pro')

        cy.get('[value = "Go"]').click()
        
        // cy.get('div[id=deliveryRefinements] input').check({force: true})

        cy.get('div[id=deliveryRefinements] input').click({force: true, multiple: true})
        
    })

})