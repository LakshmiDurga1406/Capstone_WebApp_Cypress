/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('PUT - create Tourist', () => {


        cy.fixture('document').then(   (apirequest)=>{



       


        console.log('***************' +Math.random().toString(5).substring(2));


        let resquestBody = apirequest


        cy.request({

            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: resquestBody



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);

            //print complete response body into cypress console
            cy.log(JSON.stringify(resp.body))


            expect(resp.status).to.eq(200)              //verify status code ---200

            expect(resp.body.name).to.eq(resquestBody.name) 
            expect(resp.body.job).to.eq(resquestBody.job) 
            


            //response properties

            expect(resp.body).has.property('name', resquestBody.name)
            expect(resp.body).to.have.property('job', resquestBody.job)

        })


    })

    })




})