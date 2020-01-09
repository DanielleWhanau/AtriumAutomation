import Environment from "../../support/Environment";
import { isNZ, isAU, isID, isZA } from '../../support/Environment';

describe('Create a Residential Sales Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('can create minimal residential sales listing', () => {
        if (isNZ() || isAU() || isID() || isZA()) {
            cy.addListing('residential-sales');
        }
    })
});