import Faker from 'faker';

Cypress.Commands.add('createTasks', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("nz-ES");
            //Select Add new Task
            cy.get('.page-controls > ul > :nth-child(1) > a')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Makes sure task edit modal is visible
            .get('[id$=editTaskDialog]')
            .should('be.visible')
            //Add task description
            .get('[id$=Description]')
            .click()
            .type('Testing Tasks')
            //Add Task date
            .get('[id$=Date]')
            .click()
            .type(futureDate)
            //Selects white space in modal to clear date drop down
            .get('[id$=ui-id-1]')
            .click()
            //Add task date
            .get('[id$=TimeUserInput]')
            .click()
            .type('10.00')
            //Save Task
            .get('.ui-dialog-buttonset > :nth-child(1)')
            .click()
    })
});