import Environment from "../../support/Environment";
import { isNZ, isAU } from '../../support/Environment';

describe('Adds open homes to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Adds open homes to a listing', () => {
        if (isNZ() || isAU()) {
            cy.visit(Environment.pages.residentialSalesListing)
                .addOpenHomes();
        }
    })
});