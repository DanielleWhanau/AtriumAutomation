Cypress.Commands.add('createEmailMarketing', (type) => {
    return cy.then(() => {
        var selectFromList = 'li.select2-results-dept-0'
        var nextButton = '#ctl00_cph0_wizMailOut_StepNavigationTemplateContainerID_HStepNextButton'
        var loadingSpinner = '.spinner'

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        })

        var command = cy
        if (type === 'feature-listing') {
            //Select Search Property button
            cy.get('[id$=lnkChangeSelection]')
                .click()
                .get('[id$=uclMailoutListingDialog_pnlHeader]')
                .should('be.visible')
                //Select Property Search Field
                .get('#select2-chosen-10')
                .click()
                //Select Text input field
                .get('#select2-drop > div:nth-child(1) > input')
                .click()
                //Enter listing text to search
                .type('HIL')
                .get('.select2-searching')
                .should('not.be.visible')
                //Select listing from list
                .get(selectFromList, { timeout: 2000 })
                .first()
                .click()
                .get('[id$=lblLoading]')
                .should('not.be.visible')
                //Select Save on Listing selection
                .get('[id$=uclMailoutListingDialog_btnSaveChanges]')
                .click()
                .get(loadingSpinner)
                .should('not.be.visible')
                //Select 'Next'
                .get(nextButton)
                .click()
                .get(loadingSpinner)
                .should('not.be.visible')
        }

        if (type === 'custom-mailout') {
            //Selects the Owner sub tab
            cy.get('[id$=ctrl0_lnkSend]')
                .click()
        }

        command
            .SelectContacts()
            .Personalise()
            .log('Email marketing finished');
        //.Send();
    });
});

Cypress.Commands.add('SelectContacts', () => {
    var loadingSpinner = '.spinner'
    var nextButton = '#ctl00_cph0_wizMailOut_StepNavigationTemplateContainerID_HStepNextButton'
    //Select 'Add All Contacts' option
    cy.get('[id$=uclMailoutContactsEdit_lnkAddAllContacts]')
        .click()
        .get(loadingSpinner)
        .should('not.be.visible')
        //Select 'Next' on recipients page
        .get(nextButton)
        .click()
        .get(loadingSpinner)
        .should('not.be.visible')
        //Select 'Next' on confirm recipients page
        .get(nextButton)
        .click()
        .get(loadingSpinner, { timeout: 20000 })
        .should('not.be.visible')
});

Cypress.Commands.add('Personalise', () => {
    var nextButton = '#ctl00_cph0_wizMailOut_StepNavigationTemplateContainerID_HStepNextButton'
    //Select 'Next' on personalise page
    cy.get(nextButton)
        .wait(10000)
        .click()
});

Cypress.Commands.add('Send', () => {
    //Select 'Send'
    cy.get('[id$=FinishNavigationTemplateContainerID_HFinishNextButton]', { timeout: 20000 })
        .should('be.visible')
        .click()
});