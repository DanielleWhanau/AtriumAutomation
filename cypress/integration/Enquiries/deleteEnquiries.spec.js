import Environment from "../../support/Environment";

describe('Deletes an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/View.aspx?id=894927')
    });

    it('Deletes an Enquiry against a listing', () => {
        cy.deleteEnquiries();
    })
});