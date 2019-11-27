import Environment from "../../support/Environment";

describe('Edits an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Edits an Enquiry against a listing', () => {
        cy.editEnquiries();
    })
});