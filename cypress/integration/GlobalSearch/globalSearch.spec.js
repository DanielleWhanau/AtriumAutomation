import { Environment, isNZ, isAU, isZA, isID, isUS } from "../../support/Environment";

describe('Perform Global search over listings, contacts, directory and product', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);

        if (isNZ() || isAU() || isZA() || isID()) {
        cy.loginSalesConsultant();
        }

        if (isUS()) {
            cy.loginSystemAdministrator();
            }

    });

    it('Perform Global search over listings, contacts, directory and product', () => {
        cy.globalSearch();
    })
});