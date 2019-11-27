import Environment from "../../support/Environment";

describe('Deletes an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Deletes an Enquiry against a listing', () => {
        cy.deleteEnquiries();
    })
});