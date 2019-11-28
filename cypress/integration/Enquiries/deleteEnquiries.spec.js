import Environment from "../../support/Environment";
import { isNZ, isAU, isZA } from '../../support/Environment';

describe('Deletes an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Deletes an Enquiry against a listing', () => {
        if (isNZ() || isAU() || isZA()) {
            cy.visit(Environment.pages.residentialSalesListing)
                .deleteEnquiries();
        }
    })
});