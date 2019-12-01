import Faker from 'faker';
import { isNZ } from '../Environment';

Cypress.Commands.add('editHazards', (type) => {
    return cy.then(() => {
        if (isNZ()) {
            const hazardName = Faker.lorem.word();
            const hazardRisk = Faker.lorem.word();
            const hazardControl = Faker.lorem.words();
            //Selects Hazards tab on a listing
            cy.get('[id$=tabHazards_tab]')
                .contains('Hazards')
                .click({ force: true })
                //Select Edit button (on random hazard)
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_lnkEdit]')
                .click()
                //Edit Hazard Details
                .get('[id$=uclListingHazardListEdit_repListingHazard_ctl00_uclListingHazardEdit_txtHazardName]')
                .click()
                .clear()
                .type(hazardName)
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_txtHazardRisk]')
                .click()
                .clear()
                .type(hazardRisk)
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_txtHazardControl]')
                .click()
                .clear()
                .type(hazardControl)
                //Save updated Hazard
                .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_btnOK]')
                .click()
        }
    })
});