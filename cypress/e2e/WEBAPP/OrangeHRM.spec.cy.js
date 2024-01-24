describe('verify HRM App', ()=>{


    it('TC01: verify login feature', ()=>{
        //launch application
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        

        
        //verify application title
        cy.title().should('eq','OrangeHRM')
        cy.url().should('contain','login')

        //enter username and password
        cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
        cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')

        //click on login button
        cy.get('[type*="sub"]').click()

         //verify application title
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','dashboard')


         //click on My Info
         cy.get(':nth-child(6) > .oxd-main-menu-item').click()

         //Enter 
         cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Harry').should('have.value', 'Harry')
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear()
         cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Potter').should('have.value', 'Potter')
         cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('HP').should('have.value', 'HP')
         
         //Save
         cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

         
         //Validation Step after click on save button
         cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').should('have.value', 'Harry')


 
         //Logout
         cy.get('i.oxd-userdropdown-icon').click()
         cy.get('a[href="/web/index.php/auth/logout"]').click()

         //validation
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','login')

         //Forgot Password
         cy.get('.orangehrm-login-forgot > .oxd-text').click()

        //validation
         cy.title().should('eq', 'OrangeHRM')

         //click cancel
         cy.get('.oxd-button--ghost').click()
        
        //validation
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','login')
         cy.screenshot()

    })

})
