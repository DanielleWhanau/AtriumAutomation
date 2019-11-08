import Environment from "../../support/Environment";

describe('Create Office Adminsitrator', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
    });

    it('can create minimal office administrator', () => {
        cy.newStaff('office-administrator')
    })
});