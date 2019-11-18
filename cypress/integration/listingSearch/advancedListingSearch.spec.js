import Environment from "../../support/Environment";

describe('Tests the listing search functionality on the Listing Search page', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/Residential.aspx')
    });

    it('Tests Keyword search on the listing search page', () => {
        cy.advancedListingSearch();
    })
});