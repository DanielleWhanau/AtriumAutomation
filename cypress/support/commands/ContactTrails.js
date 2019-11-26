Cypress.Commands.add('createContactTrail', (type) => {
    return cy.then(() => {
        var selectFromList = 'li.select2-results-dept-0'
        //Select 'Create New' button
        cy.get(':nth-child(2) > .panel-content > .panel-anchor-button > .block', { timeout: 2000 })
            .click()
            //Enter Template name field
            .get('[id$=CommunicationTemplateName]')
            .click()
            .type('Test Template')
            //Enter Template Description
            .get("[id$=Description]") 
            .click()
            .type('Test Description')
            //Save Template Basic Info
            .get(":nth-child(1) > .ui-button-text")
            .click()
    });
});