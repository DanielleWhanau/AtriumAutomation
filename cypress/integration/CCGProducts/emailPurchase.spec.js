import Environment from "../../support/Environment";

describe('Purchases an email address for OA', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
    });

    it('Purchases an email address for OA', () => {
        cy.purchaseProduct('email-purchase');
    })
});