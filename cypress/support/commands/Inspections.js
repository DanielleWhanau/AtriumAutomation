import Faker from 'faker';

Cypress.Commands.add('addInspections', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("nz-ES");
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const text = Faker.lorem.sentence();
        //Adds Inspections to my listing
        cy.get('[id$=tabInspection_tab]')
            .click()
            //Select Add New button on page
            .get('[id$=uclListingInspectionListEdit_hypAddNewInspection]')
            .click()
            //Enter Inspection date
            .get('[id$=uclNewListingInspectionEdit_dtDateInspectedDateTime_txtDate]')
            .click()
            .type(futureDate)
            //Add Contact - via Add New Contact option
            .get('[id$=uclNewListingInspectionEdit_btnAddContact]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Enter contact first name
            .get('[id$=uclNewListingInspectionEdit_uclContactNewQuick_txtFirstName]')
            .click()
            .type(firstName)
            //Enter contact last name
            .get('[id$=uclNewListingInspectionEdit_uclContactNewQuick_txtLastName]')
            .click()
            .type(lastName)
            //Enter contact number
            .get('[id$=uclNewListingInspectionEdit_uclContactNewQuick_txtHomeNumber]')
            .click()
            .type('022 2222222')
            //Save contact
            .get('[id$=tabInspection_uclListingInspectionListEdit_uclNewListingInspectionEdit_uclContactNewQuick_btnAdd]')
            .click()
            //Add Inspection comment
            .get('[id$=uclNewListingInspectionEdit_txtComment]')
            .click()
            .type(text)
            //Save Inspection
            .get('[id$=uclNewListingInspectionEdit_btnAdd]')
            .click()

    })
});