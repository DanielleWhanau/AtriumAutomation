import Environment from "../../support/Environment";

describe('Edits an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/View.aspx?id=894927')
    });

    it('Edits an Enquiry against a listing', () => {
        cy.editEnquiries();
    })
});