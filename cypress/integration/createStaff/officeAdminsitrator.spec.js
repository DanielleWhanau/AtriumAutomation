import Environment from "../../support/Environment";

describe('Create Office Adminsitrator', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.login);
        cy.login();
        cy.newStaff('office-administrator')
        
    });

    it('can create minimal office administrator', () => {
        cy.get('@users').then(({ firstName, lastName }) => {
        })
    })
});