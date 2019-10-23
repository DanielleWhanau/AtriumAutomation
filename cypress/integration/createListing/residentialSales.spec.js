import Environment from "../../support/Environment";

describe('Create a Residential Sales Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConstultant();
        cy.visit(Environment.pages.residentialSalesListing);        
    });

    it('can create minimal residential sales listing', () => {
        cy.addListing('residential-sales');
    })
});