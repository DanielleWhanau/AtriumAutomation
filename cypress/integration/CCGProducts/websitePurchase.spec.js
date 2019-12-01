import Environment from "../../support/Environment";

describe('Purchases a personal website for OA', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
    });

    it('Purchases a personal website for OA', () => {
        cy.purchaseProduct('website-purchase');
    })
});