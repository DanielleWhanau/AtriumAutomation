import Faker from 'faker';
import { Environment } from "../Environment"
import { COUNTRYNAME, STATENAME } from "../../fixtures/Constants";
import { isNZ, isAU, isID, isZA } from '../Environment';

Cypress.Commands.add('createFranchise', (type) => {
    return cy.then(() => {
        const name = Faker.name.firstName();
        var selectFromList = 'li.select2-results-dept-0'
        var countryName = COUNTRYNAME[Environment.country]
        var stateName = STATENAME[Environment.country]
        var command = cy
            //Selects Cancel out of creating an office (top create a franchise)
            .get('[id$=tabDetails_btnCancel')
            .click()
            //Enter franchise name field
            .get('[id$=tabDetails_txtName]')
            .type('Harcourts Franchise ' + name)

        if (isNZ() || isAU() || isID()) {
            //Select State
            cy.get('[id$=drpState] > .select2-choice')
                .click()
                .get(selectFromList)
                .children()
                .contains(countryName)
                .click()
        }

        if (isZA()) {
            //Select State
            cy.get('[id$=drpState] > .select2-choice')
                .click()
                .get(selectFromList)
                .children()
                .contains(stateName)
                .click()
        }

        //Enter opening date
        cy.get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2019')
            //Select Contact tab
            .get('[id$=tabContact_tab]')
            .click()
            //Enter minimal contact info
            .get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')
            .SaveButton()
    });
});