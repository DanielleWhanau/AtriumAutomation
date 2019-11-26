import Environment from "../../support/Environment";

describe('Perform Global search over listings, contacts, directory and product', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net')
    });

    it('Perform Global search over listings, contacts, directory and product', () => {
        cy.globalSearch();
    })
});