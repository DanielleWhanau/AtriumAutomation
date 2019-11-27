import Environment from "../../support/Environment";

describe('Create a Residential Sales Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.addSalesListing);        
    });

    it('can create minimal residential sales listing', () => {
        cy.addListing('residential-sales');
    })
});