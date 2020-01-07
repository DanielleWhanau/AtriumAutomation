import Environment from "../../support/Environment";
import { isNZ, isAU } from '../../support/Environment';

describe('Edits open home against a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('Edits open home against a listing', () => {
        if (isNZ() || isAU()) {
            cy.visit(Environment.pages.residentialSalesListing)
                .editOpenHome();
        }
    })
});