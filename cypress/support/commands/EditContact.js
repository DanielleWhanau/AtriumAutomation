import Faker from 'faker';
import { CONTACTEDITPAGE } from "../../fixtures/Constants";
import { Environment } from "../Environment"

Cypress.Commands.add('updateContact', (type) => {
    return cy.then(() => {
        const companyName = Faker.name.jobTitle();
        var contactEditPage = CONTACTEDITPAGE[Environment.country]
        //Navigate to edit contact page and update company name
        cy.visit(contactEditPage)
            .get('[id$=tabDetails_txtCompanyName]')
            .click()
            .clear()
            .type(companyName)
            .SaveButton();
    });
});