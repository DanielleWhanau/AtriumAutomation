Cypress.Commands.add('createKPIDefinition', (type) => {
    return cy.then(() => {
        //Select Manage KPI dropdown
        cy.get('.jss509 > .MuiButtonBase-root > .MuiButton-label')
            .click()
            //select a KPI to edit/create
            .get(':nth-child(3) > .jss429 > .MuiButtonBase-root')
            .click()
        cy.Next()
        cy.Next()
            .get('.MuiButton-label')
            .contains('Your Earnings')
            .click()
        cy.Next()
        cy.Next()
        cy.Next()
            .wait(2000)
        cy.Finalise()
            //Back to Dashboard
            .wait(3000)
        cy.BackToDashboard()
    });
});

Cypress.Commands.add('Next', () => {
    cy.get('.MuiButton-label', { timeout: 3000 })
        .contains('Next')
        .should('be.visible', { timeout: 3000 })
        .click()
});

Cypress.Commands.add('Finalise', () => {
    cy.get('.MuiButton-label', { timeout: 3000 })
        .contains('Finalise')
        .should('be.visible', { timeout: 3000 })
        .click()
});

Cypress.Commands.add('BackToDashboard', () => {
    cy.get('.MuiButton-label', { timeout: 3000 })
        .contains('Back to Dashboard')
        .should('be.visible', { timeout: 3000 })
        .click({ force: true })
});