import Environment from "../../support/Environment";

describe('Create a Residential Sales Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.login();
        cy.visit(Environment.pages.residentialSalesListing);
        cy.addListing('residential-sales');
        
    });

    it('can create minimal residential sales listing', () => {
        cy.get('@users').then(({ firstName, lastName }) => {
        })
    })
});