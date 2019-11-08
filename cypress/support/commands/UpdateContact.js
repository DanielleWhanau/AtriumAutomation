import Faker from 'faker';

Cypress.Commands.add('updateContact', (type) => {
    return cy.then(() => {
        const companyName = Faker.name.jobTitle();
        var command = cy
            //Navigate to edit contact page
            .get('[id$=tabDetails_txtCompanyName]')
            .click()
            .clear()
            .type(companyName)

        command
            .saveStaffButton()

        return command;
    });
});

Cypress.Commands.add('saveButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});