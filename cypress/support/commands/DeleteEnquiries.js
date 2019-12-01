Cypress.Commands.add('deleteEnquiries', (type) => {
    return cy.then(() => {
        //Adds Enquiries to my listing
        cy.get('[id$=tabEnquiries_tab]')
            .click()
            //Select Delete (on random enquiry)
            .get('[id$=uclMatchedListingEnquiries_rptEnquiries_ctl02_lnkDelete]')
            .click()
    })
});