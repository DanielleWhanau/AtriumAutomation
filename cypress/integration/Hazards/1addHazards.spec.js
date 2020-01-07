import Environment from "../../support/Environment";

describe('Adds Hazards to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Adds Hazards to a listing', () => {
        cy.addHazards();
    })
});