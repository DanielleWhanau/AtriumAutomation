import Environment from "../../support/Environment";

describe('Login', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.login);
    });

    it('Can login', () => {
        cy.login();
    });
});