import Faker from 'faker';

Cypress.Commands.add('addEnquiries', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const emailAddress = Faker.internet.email();
        //Adds Enquiries to my listing
        cy.get('[id$=tabEnquiries_tab]')
            .click()
            //Select Add New button on page
            .get('[id$=tabEnquiries_uclListingEnquiriesListEdit_hypAddNewEnquiry]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Enter Enquirer First name
            .get('[id$=uclEnquiryEdit_tbEnquiryFirstName]')
            .click()
            .type(firstName)
            //Enter Enquirer Last name
            .get('[id$=uclEnquiryEdit_tbEnquiryLastName]')
            .click()
            .type(lastName)
            //Enter Enquirer Email
            .get('[id$=uclEnquiryEdit_tbEnquiryEmail]')
            .click()
            .type(emailAddress)
            //Save Enquiry
            .get('[id$=uclEnquiryEdit_btnSaveEnquiry]')
            .click()
    })
});