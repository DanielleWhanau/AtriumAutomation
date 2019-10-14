import Faker from 'faker';

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
            .contains('New Zealand')
            .click()
            //Enter opening date
            .get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2018')
            //Select Contact tab
            .get('[id$=tabContact_tab]')
            .click()  
            //Enter minimal contact info
            .get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')    

        command
            .saveStaffButton()

        return command;
    });
});

Cypress.Commands.add('saveStaffButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});
