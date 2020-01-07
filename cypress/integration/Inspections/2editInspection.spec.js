import Environment from "../../support/Environment";

describe('Edits Inspection on a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Edits Inspection on a listing', () => {
        cy.editInspection();
    })
});