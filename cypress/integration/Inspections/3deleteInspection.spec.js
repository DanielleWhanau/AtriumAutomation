import Environment, { isNZ, isAU, isZA, isID } from "../../support/Environment";

describe('Deletes Inspection on a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.residentialSalesListing)
    });

    it('Deletes Inspection on a listing', () => {
        if (isNZ() || isAU() || isZA() || isID()) {
            cy.deleteInspection();
        }
    })
});