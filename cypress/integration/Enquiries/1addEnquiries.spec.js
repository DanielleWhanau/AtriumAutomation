import Environment from "../../support/Environment";
import { isNZ, isAU, isZA } from '../../support/Environment';

describe('Adds Enquiries to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Adds Enquiries to a listing', () => {
        if (isNZ() || isAU() || isZA()) {
            cy.visit(Environment.pages.residentialSalesListing)
            .addEnquiries();

        }
    })
});