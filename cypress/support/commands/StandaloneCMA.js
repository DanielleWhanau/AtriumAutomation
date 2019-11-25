import Faker from 'faker';

Cypress.Commands.add('addStandaloneCMA', (type) => {
    return cy.then(() => {
        const title = Faker.name.title();
        var suburb = 'Halswell'
        var selectFromList = 'li.select2-results-dept-0'
        //Enter CMA Name
        cy.get('[id$=uclCMA_txtComparativeMarketAnalysisName]')
            .click()
            .type(title)
            //Search and Select CMA Suburb
            .get('#s2id_autogen7')
            .click()
            .type(suburb)
            //Ensure the Search text in 'progress' is not visible
            .get('.select2-searching')
            .should('not.be.visible')
            .get(selectFromList, { timeout: 2000 })
            .contains(suburb, { timeout: 2000 })
            .click()
            //Select white space to remove drop down container blocking next fields view
            .get('#select2-drop-mask ')
            .click()
            //Set min beds
            .get('[id$=uclCMA_txtMinimumBedrooms]')
            .click()
            .type('3')
            //Set max beds
            .get('[id$=uclCMA_txtMaximumBedrooms]')
            .click()
            .type('4')
            //Select Search
            .get('[id$=uclCMA_btnSearch]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Save CMA
            .get('[id$=uclEditSave_btnSave]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            //Logs it is done
            .log('CMA done')
    });
});