import { isNZ } from '../Environment';

Cypress.Commands.add('deleteHazards', (type) => {
    return cy.then(() => {
        if (isNZ()) {
            //Selects Hazards tab on a listing
            cy.get('[id$=tabHazards_tab]')
                .contains('Hazards')
                .click({ force: true })
                //Selects delete button (on random hazard)
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_lnkDelete]')
                .click()
        }
    })
});