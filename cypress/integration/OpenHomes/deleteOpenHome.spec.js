import Environment from "../../support/Environment";

describe('Deletes an open home against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Deletes an open home against a listing', () => {
        cy.deleteOpenHome();
    })
});