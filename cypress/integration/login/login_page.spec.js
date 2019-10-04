import {fixCypressSpec} from "../../support";
import Environment from "../../support/Environment";

describe('Login', function () {

    beforeEach(fixCypressSpec(__filename));

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
    });

    it('Can login', () => {
        cy.login();
    });
});
