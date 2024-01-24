/// <reference types="cypress" />



describe('verify Sample App', ()=>{


    it('Alert - simple alert', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //generate an alert
        cy.get('[onclick="jsAlert()"]').click();
        //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert


    })


    it('Alert - confirm alert - click OK bydefault', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //generate an alert
        cy.get('[onclick="jsConfirm()"]').click();
        //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert
        
        //validation step
        cy.get('#result').should('have.text','You clicked: Ok')



    })


    it('Alert - confirm alert - click Cancel', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //generate an alert
        cy.get('[onclick="jsConfirm()"]').click();
        //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert
        

        cy.on('window:confirm', ()=> false)             //click on cancel button


        //validation step
        cy.get('#result').should('not.have.text','You clicked: Ok')



    })



    it.skip('Alert - confirm alert - click Cancel and validate', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //generate an alert
        cy.get('[onclick="jsConfirm()"]').click();
        //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert
        

        cy.on('window:confirm', (alert)=> {

                expect(alert).to.contain("Press 'OK' or 'Cancel' button!")

                //true---- click on OK button

        })             //click on cancel button


        //validation step
        //cy.get('#result').should('have.text','You clicked: Ok')



    })




})
it("Scenario 1", function () {
    //URL launch
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //handling prompt alert
    cy.window().then(function(p){
       //stubbing prompt window
       cy.stub(p, "prompt").returns("AutomationLearning");
       // click on Click for JS Prompt button
       cy.get(':nth-child(3) > button').click()
       // verify application message on clicking on OK
       cy.get('#result').contains('You entered: AutomationLearning')
    });
 });

