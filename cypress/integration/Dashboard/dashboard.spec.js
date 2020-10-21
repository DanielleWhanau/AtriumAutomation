import Environment from "../../support/Environment";

describe('Checks dashboard dropdowns', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
    });

    it('can login to atrium and select header dropdowns', () => {
        cy.selectHeaderDropdowns();
    })
});