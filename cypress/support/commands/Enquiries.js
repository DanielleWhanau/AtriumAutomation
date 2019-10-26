import Faker from 'faker';

Cypress.Commands.add('addEnquiries', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const emailAddress = Faker.internet.email();
        //Adds Inspections to my listing
        cy.get('[id$=tabEnquiries_tab]')
            .click()
            //Select Add New button on page
            .get('[id$=tabEnquiries_uclListingEnquiriesListEdit_hypAddNewEnquiry]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Enter Enquirer Details
            .get('[id$=uclEnquiryEdit_tbEnquiryFirstName]')
            .click()
            .type(firstName)
            .get('[id$=uclEnquiryEdit_tbEnquiryLastName]')
            .click()
            .type(lastName)
            .get('[id$=uclEnquiryEdit_tbEnquiryEmail]')
            .click()
            .type(emailAddress)
            .get('[id$=uclEnquiryEdit_btnSaveEnquiry]')
            .click()
    })
});