import Faker from 'faker';
import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('addHazards', (type) => {
    return cy.then(() => {
        if (isNZ()) {
            const hazardName = Faker.lorem.word();
            const hazardRisk = Faker.lorem.word();
            const hazardControl = Faker.lorem.words();
            //Adds an Internal Hazard to my listing
            cy.get('[id$=tabHazards_tab]')
                .contains('Hazards')
                .click({ force: true })
                //Select Add New button on page
                .get('[id$=uclListingHazardListEdit_hypAddNewHazard]')
                .click()
                //Enter Hazard Details
                .get('[id$=uclNewListingHazardEdit_txtHazardName]')
                .click()
                .type(hazardName)
                .get('[id$=uclNewListingHazardEdit_txtHazardRisk]')
                .click()
                .type(hazardRisk)
                .get('[id$=uclNewListingHazardEdit_txtHazardControl]')
                .click()
                .type(hazardControl)
                //Save Hazard
                .get('[id$=uclNewListingHazardEdit_btnAdd]')
                .click()
        }
    })
});