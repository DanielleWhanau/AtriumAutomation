import Faker from 'faker';
import { SUBURB } from "../../fixtures/Constants";
import { Environment } from "../Environment"
import { isNZ, isAU, isZA, isUS } from '../Environment';

Cypress.Commands.add('addResidentialSalesAppraisal', (type) => {
    return cy.then(() => {
        const streetNumber = Faker.random.number(100);
        const streetName = Faker.address.streetName();
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const futureDate = Faker.date.future(0.08).toLocaleDateString("ca-ES");
        const futureUSDate = Faker.date.future(0.08).toLocaleDateString("en-US");
        var suburb = SUBURB[Environment.country]
        var selectFromList = 'li.select2-results-dept-0'
        var sellerModal = '#divContactNewQuick > .modalBody'
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        //Add a Seller via the 'Add New' button
        cy.get('[id$=btnAddContact]', { timeout: 10000 })
            .click({ force: true })
            //Makes sure edit container is visible and selects....
            .get(sellerModal)
            .should('be.visible')
            //Enter Contact Firstname 
            .get('[id$=txtFirstName]', { timeout: 10000 })
            .click()
            .type(firstName)
            //Enter Contact Lastname 
            .get('[id$=txtLastName]')
            .click()
            .type(lastName)
            //Enter Contact Email Address
            .get('[id$=txtEmailAddress]')
            .click()
            .type('h1.test.testers@harcourts.net')

        //NZ + AU have confirm email all others don't        
        if (isNZ() || isAU()) {
            cy.get("[id$=uclContactNewQuick_txtConfirmEmail]")
                .click()
                .type('h1.test.testers@harcourts.net')
        }

        if (isZA()) {
            cy.get("[id$=uclContactNewQuick_txtHomeNumber]")
                .click()
                .type('123456789')
        }

        //Select the Add Contact button
        cy.get("[id$=uclContactNewQuick_btnAdd]")
            .click()
            //Makes sure the edit container is not visible
            .get('.spinner')
            .should('not.be.visible')
            //Select Property Details tab
            .get('[id$=tabPropertyDetails_tab]')
            .click()
            //Enter Appraisal Street Number
            .get('[id$=txtStreetNumber]')
            .click()
            .type(streetNumber)
            //Enter Appraisal Street Name
            .get('[id$=txtStreetName]')
            .type(streetName)
            //Search and Select Appraisal Suburb
            .get("[id$=ajaxSearchLocation_hidSelectedID] > .select2-choice > .select2-arrow")
            .click()
            .get('#s2id_autogen20_search')
            .click()
            .type(suburb)
            //Ensure the Search text in 'progress' is not visible
            .get('.select2-searching', { timeout: 5000 })
            .should('not.be.visible')
            .get(selectFromList, { timeout: 5000 })
            .contains(suburb, { timeout: 5000 })
            .click()
            //Makes sure the loading 'H' spinner is not visible
            .get('.spinner')
            .should('not.be.visible')
            //Select Appraisal Property type House, Unit, Apartment etc.
            .get('#s2id_ctl00_cph0_tcAppraisal_tabPropertyDetails_drpPropertyType > .select2-choice')
            .click()
            .get(selectFromList, { timeout: 5000 })
            .contains('House')
            .click()
            //Set bedrooms
            .get('[id$=txtBedrooms]')
            .click()
            .type('5')
            //Set bathrooms
            .get('[id$=txtBathrooms]')
            .click()
            .type('3')
            //Selects Map tab
            .get(selectTab)
            .contains('Map')
            .click()
            //Confirm possible map location
            .get(".listing-edit-map", { timeout: 30000 })
            .should("be.visible")
            .get('#geocodeResults > a')
            .contains(suburb)
            .click()
            //Selects Tasks tab
            .get(selectTab)
            .contains('Tasks')
            .click()
            //Add single Task details
            .get('[id$=btnAddNewTask]')
            .click()
            .get('#divEditTask')
            .should('be.visible')
            //Task description
            .get('[id$=uclTaskEdit_txtDescription]')
            .click()
            .type('Testing Tasks')

        if (isAU() || isNZ() || isZA()) {
            //Task date
            cy.get('[id$=uclTaskEdit_uclDueDateTime_txtDate]')
                .click()
                .type(futureDate)
        }
        if (isUS()) {
            //Task date
            cy.get('[id$=uclTaskEdit_uclDueDateTime_txtDate]')
                .click()
                .type(futureUSDate)
            }

        //Task time
        cy.get('[id$=uclTaskEdit_uclDueTime_txtTimeDisplay]')
            .click()
            .type('10.00')
            //Select save task button
            .get('[id$=uclTaskListView_TaskAddModal_btnSave]')
            .click()
            .get('.spinner')
            //Selects CMA tab
            .should('not.be.visible')
            .get(selectTab)
            .contains('CMA')
            .click()
            //Generates search results for criteria set
            .get('[id$=btnSearch]')
            .click()
            .get('.spinner', { timeout: 30000 })
            .should('not.be.visible')
            //Save Appraisal
            cy.SaveButton();
            cy.log('Completed')
    });
});