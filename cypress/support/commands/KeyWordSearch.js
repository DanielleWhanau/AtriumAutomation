Cypress.Commands.add('keyWordSearch', (type) => {
    return cy.then(() => {
        const listingNumber = 'WH26954'
        //Select Keyword search box
        cy.get('[id$=txtSearchText]', { timeout: 2000 })
            .click()
            //Type Listing number
            .type(listingNumber)
            .get('[id$=uclListingSearchPanel_btnSearch]')
            .click()
            //Waits for page to load and spinner 'H' is gone
            .get('.spinner')
            .should('not.be.visible')
            //Logs it is done
            .log('KeyWord Search done')
    });
});