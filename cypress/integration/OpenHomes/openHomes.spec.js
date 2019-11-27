import Environment from "../../support/Environment";

describe('Adds open homes to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Adds open homes to a listing', () => {
        cy.addOpenHomes();
    })
});