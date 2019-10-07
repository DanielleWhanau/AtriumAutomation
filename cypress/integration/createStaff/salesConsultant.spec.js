import Environment from "../../support/Environment";

describe('Create Sales Consultant', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.login);
        cy.login();
        cy.newStaff('sales-consultant')
        
    });

    it('can create minimal sales consultant', () => {
        cy.get('@users').then(({ firstName, lastName }) => {

        })
    })
});