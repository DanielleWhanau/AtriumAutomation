import Environment from "../../support/Environment";

describe('Purchases an email address for OA', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
        cy.visit('https://one-nz-stage.harcourts.net/Apps/Products/Product.mvc/EmailAddressPurchase')
    });

    it('Purchases an email address for OA', () => {
        cy.purchaseProduct('email-purchase');
    })
});