Cypress.Commands.add('SaveButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});

Cypress.Commands.add('selectOK', () => {
    cy.get('[id$=divCredentialHeading]', { timeout: 20000 }).should('be.visible')
        .get('[id$=cph0_btnOk]', { timeout: 20000 })
        .contains('Ok')
        .click()
});

Cypress.Commands.add('Publishing', () => {
    var randomText = 'Check out this super cool property weeow!'
    //Selects Publishing tab
    cy.get('[id$=tc_tab04]')
        .contains('Publishing')
        .click()
        .get('.spinner')
        .should('not.be.visible')
        //Selects and enters listing header
        .get('[id$=advInternetHeading_0]', { timeout: 20000 })
        .should('be.visible')
        .click()
        .type('This home is GUCCI!')
        //Selects and enters listing body
        .get('[id$=dvInternetBody_0]')
        .click()
        .type(randomText)
});

Cypress.Commands.add('ViewListing', () => {
    //Selects View listing button
    cy.get('[id$=hypViewListingPageControl]')
        .contains('View listing')
        .click()
});