Cypress.Commands.add('deleteOpenHome', (type) => {
    return cy.then(() => {
        //Navigate to Open Home tab
        cy.get('[id$=tabOpenHomes_tab]')
            .click()
            //Select Delete icon
            .get('[id$=repListingOpenHomes_ctl00_uclListingOpenHomeEdit_divDelete]')
            .click()
    })
});