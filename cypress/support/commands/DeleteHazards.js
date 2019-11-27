import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('deleteHazards', (type) => {
    return cy.then(() => {
        if (isNZ() || isAU()) {
            //Selects Hazards tab on a listing
            cy.get('[id$=tabHazards_tab]')
                .click()
                //Selects delete button (on random hazard)
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_lnkDelete]')
                .click()
        }
    })
});