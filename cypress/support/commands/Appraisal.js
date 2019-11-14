import Faker from 'faker';

Cypress.Commands.add('addResidentialSalesAppraisal', (type) => {
    return cy.then(() => {
        const streetNumber = Faker.random.number(100);
        const streetName = Faker.address.streetName();
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const futureDate = Faker.date.future(0.08).toLocaleDateString("ca-ES");
        var suburb = 'Halswell'
        var selectFromList = 'li.select2-results-dept-0'
        var sellerModal = '#divContactNewQuick > .modalBody'
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        //Adds a Seller via the Add new button
        cy.get('[id$=btnAddContact]', { timeout: 2000 })
            .click()
            .get(sellerModal)
            .should('be.visible')
            .get('[id$=txtFirstName]', { timeout: 2000 })
            .click()
            //Enters seller details
            .type(firstName)
            .get('[id$=txtLastName]')
            .click()
            .type(lastName)
            .get('[id$=txtEmailAddress]')
            .click()
            .type('h1.test.testers@harcourts.net')
            .get('[id$=uclContactNewQuick_txtConfirmEmail]')
            .click()
            .type('h1.test.testers@harcourts.net')
            .get("[id$=uclContactNewQuick_btnAdd]")
            .click()
            .get(sellerModal)
            .should('not.be.visible')
            //Selects Address sub tab
            .get('[id$=tabPropertyDetails_tab]')
            .click()
            //Enters Address details
            .get('[id$=txtStreetNumber]')
            .click()
            .type(streetNumber)
            .get('[id$=txtStreetName]')
            .type(streetName)
            .get("[id$=ajaxSearchLocation_hidSelectedID] > .select2-choice > .select2-arrow")
            .click()
            .get('#s2id_autogen20_search')
            .click()
            .type(suburb)
            .get('.select2-searching')
            .should('not.be.visible')
            .get(selectFromList, { timeout: 2000 })
            .contains(suburb, { timeout: 2000 })
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .get('#s2id_ctl00_cph0_tcAppraisal_tabPropertyDetails_drpPropertyType > .select2-choice')
            .click()
            .get(selectFromList, { timeout: 2000 })
            .contains('House')
            .click()
            .get('[id$=txtBedrooms]')
            .click()
            .type('5')
            .get('[id$=txtBathrooms]')
            .click()
            .type('3')
            //Selects Map sub tab
            .get(selectTab)
            .contains('Map')
            .click()
            //Selects the possible map location
            .get(".listing-edit-map", { timeout: 30000 })
            .should("be.visible")
            .get('#geocodeResults > a')
            .contains("New Zealand")
            .click()
            .get(selectTab)
            .contains('Tasks')
            .click()
            .get('[id$=btnAddNewTask]')
            .click()
            .get('#divEditTask')
            .should('be.visible')
            .get('[id$=uclTaskEdit_txtDescription]')
            .click()
            .type('Testing Tasks')
            .get('[id$=uclTaskEdit_uclDueDateTime_txtDate]')
            .click()
            .type(futureDate)
            .get('[id$=uclTaskEdit_uclDueTime_txtTimeDisplay]')
            .click()
            .type('10.00')
            .get('[id$=uclTaskListView_TaskAddModal_btnSave]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .get(selectTab)
            .contains('CMA')
            .click()
            .get('[id$=btnSearch]')
            .click()
            .get('.spinner', { timeout: 30000 })
            .should('not.be.visible')
            .get('[id$=uclEditSave_btnSave]')
            .click()
            .get('.spinner')
            .should('not.be.visible')
            .log('Appraisal added')

    });
});