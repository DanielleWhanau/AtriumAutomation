import Environment from "../../support/Environment";
import { isNZ, isAU } from '../../support/Environment';

describe('Create a Residential Rental Listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
        cy.visit(Environment.pages.addRentalListing)
    });

    it('can create minimal residential rental listing', () => {
        if (isNZ() || isAU()) {
            cy.addListing('residential-rental'); 
        }
    })
});