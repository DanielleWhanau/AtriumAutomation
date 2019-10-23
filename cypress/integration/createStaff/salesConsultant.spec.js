import Environment from "../../support/Environment";

describe('Create Sales Consultant', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
        cy.newStaff('sales-consultant')
        
    });

    it('can create minimal sales consultant', () => {
        cy.get('@user').then(({ firstName, lastName }) => {

        })
    })
});