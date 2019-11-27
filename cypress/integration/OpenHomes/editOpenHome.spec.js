import Environment from "../../support/Environment";

describe('Edits open home against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Edits open home against a listing', () => {
        cy.editOpenHome();
    })
});