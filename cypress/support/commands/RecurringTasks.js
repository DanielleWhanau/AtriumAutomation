import Faker from 'faker';

Cypress.Commands.add('recurringTask', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("nz-ES");
        const taskTitle = Faker.name.title()
        var selectFromList = 'li.select2-results-dept-0'
        //Add Weekly Recurring Task
        cy.get('.page-controls > ul > :nth-child(1) > a')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .get('[id$=editTaskDialog]')
            .should('be.visible')
            //Enter Task description
            .get('[id$=Description]')
            .click()
            .type(taskTitle)
            .get('[id$=Date]')
            .click()
            .type(futureDate)
            .get('[id$=ui-id-1]')
            .click()
            .get('[id$=TimeUserInput]')
            .click()
            //Select Task time
            .type('10.00')
            //Select recurring time frame
            .get("#select2-chosen-16")
            .click()
            .get(selectFromList)
            .children()
            .contains('Weekly')
            .click()
            .get('#RecurrenceModel_RecurrenceEndDateNonUtc')
            .click()
            //Select recurring finish date
            .type(futureDate)
            .get('[id$=ui-id-1]')
            .click()
            .get('.ui-dialog-buttonset > :nth-child(1)')
            .click()
        //Add Monthly Recurring Task
        cy.get('.page-controls > ul > :nth-child(1) > a')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .get('[id$=editTaskDialog]')
            .should('be.visible')
            //Enter Task description
            .get('[id$=Description]')
            .click()
            .type(taskTitle)
            .get('[id$=Date]')
            .click()
            .type(futureDate)
            .get('[id$=ui-id-2]')
            .click()
            .get('[id$=TimeUserInput]')
            .click()
            //Select Task time
            .type('10.00')
            //Select recurring time frame
            .get("#select2-chosen-25")
            .click()
            .get(selectFromList)
            .children()
            .contains('Monthly')
            .click()
            .get('#RecurrenceModel_RecurrenceEndDateNonUtc')
            .click()
            //Select recurring finish date
            .type(futureDate)
            .get('[id$=ui-id-2]')
            .click()
            .get('.ui-dialog-buttonset > :nth-child(1)')
            .click()
    })
});