import Faker from 'faker';

Cypress.Commands.add('deleteInspection', (type) => {
    return cy.then(() => {
        const text = Faker.lorem.words();
        //Navigate to edit Inspections page and update text
        cy.get('[id$=tabInspection_tab]')
            .contains('Inspections')
            .click({ force: true })
            //Delete Inspection
            .get('[id$=repListingInspection_ctl01_uclListingInspectionEdit_lnkDelete]')
            .click()
    });
});