import Faker from 'faker';
import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('createContact', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const mobile = Faker.phone.phoneNumber();
        var command = cy
            //Navigate to add contact page
            .get('[id$=miContacts]')
            .click()
            .get(".page-controls > ul > :nth-child(2) > a")
            .should('be.visible')
            .click()
            //Enter Contact First name
            .get("[id$=txtFirstName]")
            .click()
            .type(firstName)
            //Enter Contact Last name
            .get("[id$=txtLastName]")
            .click()
            .type(lastName)
            //Enter Contact Mobile number
            .get("[id$=txtMobileNumber]")
            .click()
            .type(mobile)
            //Enter Contact email
            .get("[id$=txtEmail]")
            .click()
            .type('test@test.com')

        //NZ + AU have confirm email all others don't        
        if (isNZ() || isAU()) {
            cy.get("[id$=txtConfirmEmail]")
                .click()
                .type('test@test.com')
        }

        command
            .saveButton()
            .get('[id$=cph0_lnkView]')
            .should('be.visible')
            .click()

        command.wrap({ firstName, lastName })
            .as('createContact')

        return command;
    });
});

Cypress.Commands.add('saveButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});