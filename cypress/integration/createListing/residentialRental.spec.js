import Environment from "../../support/Environment";

describe('Create a Residential Rental Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.login();
        cy.visit(Environment.pages.residentialRentalListing);
        cy.addListing('residential-rental');
        
    });

    it('can create minimal residential rental listing', () => {
        cy.get('@users').then(({ firstName, lastName }) => {
        })
    })
});