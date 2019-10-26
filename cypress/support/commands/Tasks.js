import Faker from 'faker';

Cypress.Commands.add('createTasks', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("ca-ES");
            //Select Add new Task
            cy.get('.page-controls > ul > :nth-child(1) > a')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .get('[id$=editTaskDialog]')
            .should('be.visible')
            .get('[id$=Description]')
            .click()
            .type('Testing Tasks')
            .get('[id$=Date]')
            .click()
            .type(futureDate)
            .get('[id$=ui-id-1]')
            .click()
            .get('[id$=TimeUserInput]')
            .click()
            .type('10.00')
            .get('.ui-dialog-buttonset > :nth-child(1)')
            .click()
    })
});