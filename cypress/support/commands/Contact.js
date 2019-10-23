import Faker from 'faker';

Cypress.Commands.add('createContact', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const mobile = Faker.phone.phoneNumber();
        var selectFromList = 'li.select2-results-dept-0'
        var command = cy
            //Navigate to add contact page
            .get('[id$=miContacts]')
            .click()
            .get(".page-controls > ul > :nth-child(4) > a")
            .should('be.visible')
            .click()
            //Enter Detail tab info
            .get("[id$=txtFirstName]")
            .click()
            .type(firstName)
            .get("[id$=txtLastName]")
            .click()
            .type(lastName)
            .get("[id$=txtMobileNumber]") 
            .click()
            .type(mobile)
            .get("[id$=txtEmail]")
            .click()
            .type('test@test.com')
            .get("[id$=txtConfirmEmail]")
            .click()
            .type('test@test.com')



            .get(selectFromList)
            .children()
            .contains('New Zealand')
            .click()
            //
            .get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2018')
            //
            .get('[id$=tabContact_tab]')
            .click()  
            //
            .get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')    

            command.wrap({firstName, lastName})
            .as('createContact')

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