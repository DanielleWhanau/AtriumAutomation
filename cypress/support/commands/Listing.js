import Faker from 'faker';
import { isNZ, isAU, isZA, isID } from '../Environment';
import { SUBURB, COUNTRYNAME, AGENTNAME } from "../../fixtures/Constants";
import { Environment } from "../Environment"

Cypress.Commands.add('addListing', (type) => {
    return cy.then(() => {

        if (isNZ() || isAU() || isZA() || isID()) {
            const streetNumber = Faker.random.number(100);
            const streetName = Faker.address.streetName();
            const firstName = Faker.name.firstName();
            const lastName = Faker.name.lastName();
            const futureDate = Faker.date.future(0.08).toLocaleDateString("ca-ES");
            var agentName = AGENTNAME[Environment.country]
            var suburb = SUBURB[Environment.country]
            var countryName = COUNTRYNAME[Environment.country]
            var selectFromList = 'li.select2-results-dept-0'
            var sellerModal = '#divContactNewQuick > .modalBody'
            var selectTab = '.ajax__tab_header span.ajax__tab_tab'
            //Selects Listing Consultant
            cy.get('[id$=ajaxSearchStaff_hidSelectedID] > .select2-choice > .select2-arrow')
                .click()
                .get('[id$=select2-drop] > .select2-search > input')
                .click()
                .type(agentName)
                .get(selectFromList)
                .contains(agentName)
                .click()
                //Selects Address sub tab
                .get(selectTab)
                .contains('Address')
                .click()
                //Enters Address details
                .get('[id$=txtStreetNumber]')
                .click()
                .type(streetNumber)
                .get('[id$=txtStreetName]')
                .type(streetName)
                .get("[id$=ajaxSearchLocation_hidSelectedID] > .select2-choice > .select2-arrow")
                .click()
                .get('#select2-drop > .select2-search', { timeout: 10000 })
                .click({ force: true })
                .type(suburb)
                .get('.select2-searching')
                .should('not.be.visible')
                .get(selectFromList, { timeout: 2000 })
                .contains(suburb, { timeout: 2000 })
                .click()
                //Selects Map sub tab
                .get(selectTab)
                .contains('Map')
                .click()
                //Selects the possible map location
                .get(".listing-edit-map", { timeout: 30000 })
                .should("be.visible")
                .get('#geocodeResults > a')
                .contains(countryName)
                .click()

            if (type === 'residential-sales') {
                //Selects the Seller sub tab
                cy.get(selectTab)
                    .contains('Sellers')
                    .click()
                    //Adds a Seller via the Add new button
                    .get('[id$=btnAddContact]', { timeout: 2000 })
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
                    .type('releasetest@harcourts.net')

                if (isNZ() || isAU()) {
                    cy.get('[id$=uclContactNewQuick_txtConfirmEmail]')
                        .click()
                        .type('releasetest@harcourts.net')
                        .get("[id$=uclContactNewQuick_btnAdd]")
                        .click()
                }
                if (isZA()) {
                    cy.get('[id$=uclContactNewQuick_txtHomeNumber]')
                        .click()
                        .type('05555555555')
                }
                cy.get("[id$=uclContactNewQuick_btnAdd]")
                    .click()
                    .get(sellerModal)
                    .should('not.be.visible')
                    //Selects the Listing sub tab
                    .get('[id$=tab4_tab]')
                    .click()
                    .get('.spinner')
                    .should('not.be.visible')
                    //Sets 'Available' status
                    .get('[id$=radStatusAvailable]', { timeout: 2000 })
                    .click()
                    //Selects Listing Price Field
                    .get('[id$=advMinimumPrice_0]')
                    .click()
                    .type('1500000')

                if (isNZ() || isAU() || isZA()) {

                    //Selects Property Type sub tab
                    cy.get(selectTab)
                        .contains('Property Type')
                        .click()
                }

                if (isID()) {

                    //Selects Property Type sub tab
                    cy.get(selectTab)
                        .contains('Property Details')
                        .click()
                }

                cy.get('[id$=advPropertyType_7_0]')
                    .click()
                    //Sets Bedrooms
                    .get('[id$=advBedrooms_0]')
                    .click()
                    .type('4')
                    //Sets Bathrooms
                    .get('[id$=advBathrooms_0]')
                    .click()
                    .type('2')

                if (isNZ() || isAU() || isZA()) {
                    //Sets Lounge Rooms
                    cy.get('[id$=advLoungeRooms_0]')
                        .click()
                        .type('2')
                }
            }

            if (type === 'residential-rental') {
                //Selects the Owner sub tab
                cy.get(selectTab)
                    .contains('Owners')
                    .click()
                    //Adds a Owner via the Add new button
                    .get('[id$=btnAddContact]', { timeout: 2000 })
                    .click()
                    .get(sellerModal)
                    .should('be.visible')
                    .get('[id$=txtFirstName]', { timeout: 2000 })
                    .click()
                    //Enters owner details
                    .type(firstName)
                    .get('[id$=txtLastName]')
                    .click()
                    .type(lastName)
                    .get('[id$=txtEmailAddress]')
                    .click()
                    .type('releasetest@harcourts.net')
                    .get('[id$=uclContactNewQuick_txtConfirmEmail]')
                    .click()
                    .type('releasetest@harcourts.net')
                    .get("[id$=uclContactNewQuick_btnAdd]")
                    .click()
                    .get(sellerModal)
                    .should('not.be.visible')
                    //Selects the Listing sub tab
                    .get('[id$=tab4_tab]')
                    .click()
                    .get('.spinner')
                    .should('not.be.visible')
                    //Sets 'Available' status
                    .get('[id$=radStatusAvailable]', { timeout: 2000 })
                    .click()
                    //Sets Available date
                    .get('[id$=advAvailableDate_0_txtDate]')
                    .click()
                    .type(futureDate)
                    //Selects Rent Rate Field
                    .get('[id$=txt_advRent_0]')
                    .click()
                    .type('500')
                    //Selects Property Type sub tab
                    .get(selectTab)
                    .contains('Property Type')
                    .click()
                    .get('[id$=advPropertyType_7_0]')
                    .click()
                    //Sets Bedrooms
                    .get('[id$=advBedrooms_0]')
                    .click()
                    .type('4')
                    //Sets Bathrooms
                    .get('[id$=advBathrooms_0]')
                    .click()
                    .type('2')
                    //Sets Lounge Rooms
                    .get('[id$=advLoungeRooms_0]')
                    .click()
                    .type('2')
            }
            cy.SaveButton()
                .ViewListing();
        }
    });
});