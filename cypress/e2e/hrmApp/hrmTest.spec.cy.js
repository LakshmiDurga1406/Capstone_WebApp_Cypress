describe('verify HRM App', ()=>{


    it('TC01: verify login feature', ()=>{

        //launch application
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        
        //verify application title
        cy.title().should('eq','OrangeHRM')
        cy.url().should('contain','login')

        //Identification ------ CSS
        //enter username and password

        

        cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
        cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')

        // cy.get('input[name="username"]').clear().type('clearValueAndEneterAgain').should('have.value', 'clearValueAndEneterAgain')


        //click on login button
        cy.get('[type*="sub"]').click()



         //verify application title
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','dashboard')


          //Logout
          //cy.get('span[class="oxd-userdropdown-tab"]').click()
          cy.get('i.oxd-userdropdown-icon').click()
          cy.get('[href="/web/index.php/auth/logout"]').click()
 
          cy.title().should('eq','OrangeHRM')
          cy.url().should('contain','login')

    })

})
