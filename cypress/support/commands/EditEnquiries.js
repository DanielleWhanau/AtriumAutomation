import Faker from 'faker';

Cypress.Commands.add('editEnquiries', (type) => {
    return cy.then(() => {
        const typeRandom = Faker.random.words();
        //Adds Enquiries to my listing
        cy.get('[id$=tabEnquiries_tab]')
            .click()
            //Select Add Comment (on random enquiry)
            .get('[id$=uclMatchedListingEnquiries_rptEnquiries_ctl01_lblAddComment]')
            .click()
            //Enter Agent Comment
            .get('[id$=uclMatchedListingEnquiries_rptEnquiries_ctl01_tbEditCommentInline]')
            .click()
            .type(typeRandom)
            //Save Comment
            .get('[id$=uclMatchedListingEnquiries_rptEnquiries_ctl01_lblSaveComment]')
            .click()
    })
});