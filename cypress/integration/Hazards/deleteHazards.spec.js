import Environment from "../../support/Environment";

describe('Edits Hazards on a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Edits Hazards on a listing', () => {
        cy.deleteHazards();
    })
});