import Environment from "../../support/Environment";
import { isNZ, isAU } from '../../support/Environment';

describe('Deletes an open home against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Deletes an open home against a listing', () => {
        if (isNZ() || isAU()) {
            cy.visit(Environment.pages.residentialSalesListing)
                .deleteOpenHome();
        }
    })
});