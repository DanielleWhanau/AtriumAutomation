import Environment from "../../support/Environment";

describe('Adds Enquiries to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Adds Enquiries to a listing', () => {
        cy.addEnquiries();
    })
});