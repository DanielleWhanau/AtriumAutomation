import Environment from "../../support/Environment";

describe('Tests advanced listing search functionality on the Listing Search page', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.dashboard+'Listings/Residential.aspx')
    });

    it('Tests Advanced listing search on the listing search page', () => {
        cy.advancedListingSearch();
    })
});