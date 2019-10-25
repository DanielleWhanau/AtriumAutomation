import Faker from 'faker';
import { isNZ, isAU, isZA, isID, isUS } from '../Environment';

Cypress.Commands.add('createFranchise', (type) => {
    return cy.then(() => {
        const name = Faker.name.firstName();
        var selectFromList = 'li.select2-results-dept-0'
        var command = cy
            //Selects Cancel out of creating an office (top create a franchise)
            .get('[id$=tabDetails_btnCancel')
            .click()
            //Enter franchise name field
            .get('[id$=tabDetails_txtName]')
            .type('Harcourts Franchise ' + name)
            //Select State
            .get('[id$=drpState] > .select2-choice')
            .click()
            .get(selectFromList)
            .children()
           
            if (isNZ()){
                cy.contains('New Zealand')
                .click()
            }
            
            if (isAU()){
                cy.contains('Australia')
                .click()
            }   

            if (isID()){
                cy.contains('Indonesia')
                .click()
            }   

            if (isZA()){
                cy.contains('South Africa')
                .click()
            }   

            if (isUS()){
                cy.contains('United States')
                .click()
            }   

            //Enter opening date
            cy.get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2018')
            //Select Contact tab
            .get('[id$=tabContact_tab]')
            .click()  
            //Enter minimal contact info
            .get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')    

            command.wrap({name})
            .as('franchise')

        command
            .saveButton()

        return command;
    });
});

Cypress.Commands.add('saveButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});
