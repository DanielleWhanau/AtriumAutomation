import Faker from 'faker';
import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('createContact', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const mobile = Faker.phone.phoneNumberFormat(0);
        //Navigate to add contact page
        cy.get('[id$=miContacts]')
            .click()
            .get(".page-controls > ul > :nth-child(2) > a")
            .should('be.visible')
            .click()
            //Enter Contact First name
            .get("[id$=txtFirstName]")
            .click({ force: true })
            .type(firstName)
            //Enter Contact Last name
            .get("[id$=txtLastName]")
            .click({ force: true })
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

        cy.SaveButton()
            .get('[id$=cph0_lnkView]')
            .should('be.visible')
            .click()
    });
});