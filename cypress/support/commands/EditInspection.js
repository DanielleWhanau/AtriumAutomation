import Faker from 'faker';

Cypress.Commands.add('editInspection', (type) => {
    return cy.then(() => {
        const text = Faker.lorem.words();
        //Navigate to edit Inspections page and update text
        cy.get('[id$=tabInspection_tab]')
            .contains('Inspections')
            .click({ force: true })
            //Select Edit button on random inspection
            .get('[id$=repListingInspection_ctl00_uclListingInspectionEdit_lnkEdit]')
            .click()
            //Edit inspection comment
            .get('[id$=repListingInspection_ctl00_uclListingInspectionEdit_txtComment]')
            .click()
            .clear()
            .type(text)
            //Save edited inspection
            .get('[id$=repListingInspection_ctl00_uclListingInspectionEdit_btnOK]')
            .click()
    });
});