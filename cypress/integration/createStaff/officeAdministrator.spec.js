import Environment from "../../support/Environment";

describe('Create Office Adminsitrator', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
    });

    it('can create minimal office administrator', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
          })
          
        cy.newStaff('office-administrator')
    })
});