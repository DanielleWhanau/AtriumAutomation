import Environment from "../../support/Environment";

Cypress.Commands.add('deleteEnquiries', (type) => {
    return cy.then(() => {
        //Adds Enquiries to my listing
        cy.get('[id$=tabEnquiries_tab]')
            .click()
            //Select Delete (on random enquiry)
            .get('.enquiries-column .icon-delete')
            .last()
            .click({ force: true })
            .wait(5000)
            .visit(Environment.pages.residentialSalesListing)
            .get('[id$=tabEnquiries_tab]')
            .click()
    })
});