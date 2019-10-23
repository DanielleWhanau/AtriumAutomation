import Environment from "../../support/Environment";

describe('Login', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
    });

    it('Can login', () => {
        cy.loginSystemAdministrator();
    });
});