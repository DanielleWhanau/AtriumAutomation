import Environment from "../../support/Environment";

describe('Create a basic Office Website', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
    });

    it('Create a basic Office Website', () => {
        cy.officeWebsite();
    })
});