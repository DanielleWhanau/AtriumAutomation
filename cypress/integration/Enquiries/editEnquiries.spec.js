import Environment from "../../support/Environment";
import { isNZ, isAU, isZA } from '../../support/Environment';

describe('Edits an Enquiry against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Edits an Enquiry against a listing', () => {
        if (isNZ() || isAU() || isZA()) {
            cy.visit(Environment.pages.residentialSalesListing)
                .editEnquiries();
        }
    })
});