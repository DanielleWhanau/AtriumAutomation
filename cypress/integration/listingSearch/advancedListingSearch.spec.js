import Environment from "../../support/Environment";
import { isNZ, isAU } from '../../support/Environment';

describe('Tests advanced listing search functionality on the Listing Search page', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Tests Advanced listing search on the listing search page', () => {
        if (isNZ() || isAU()) {
            cy.visit(Environment.pages.dashboard + 'Listings/Residential.aspx')
                .advancedListingSearch();
        }
    })
});