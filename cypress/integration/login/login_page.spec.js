import {fixCypressSpec} from "../../support";
import Environment from "../../support/commands/Logins";

describe('Login', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.login);
    });

    it('Can login', () => {
        cy.login();
    });
});