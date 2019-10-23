import Environment from "../../support/Environment";

describe('Create Office Adminsitrator', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
        cy.newStaff('office-administrator')
        
    });

    it('can create minimal office administrator', () => {
        cy.get('@user').then(({ firstName, lastName }) => {
        })
    })
});