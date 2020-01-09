import Environment, { isNZ, isAU, isZA, isID } from "../../support/Environment";

describe('Adds Inspections to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Adds Inspections to a listing', () => {
        if (isNZ() || isAU() || isZA() || isID()) {
            cy.addInspections();
        }
    })
});