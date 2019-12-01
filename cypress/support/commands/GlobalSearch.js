import { CONTACTNAME, DIRECTORYWORD } from "../../fixtures/Constants";
import { Environment } from "../Environment"
import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('globalSearch', (type) => {
    return cy.then(() => {
        var listing = 'HIL'
        var contactName = CONTACTNAME[Environment.country]
        var directoryWord = DIRECTORYWORD[Environment.country]
        var product = 'Email Address'
        var globalSearchIcon = '.global-search-container > button'
        var selectFromList = 'li.select2-results-dept-0'
        //Select 'Global search' option on dashboard
        cy.get(globalSearchIcon, { timeout: 2000 })
            .click()
            //Ensure the search panel is visible
            .get("[id$=hidSelectedID] > .select2-choice")
            .should("be.visible")
            //Select Listing tab
            .get(".global-search-type > :nth-child(1) > button")
            .click()
            //Select Listing input
            .get('#select2-drop > div:nth-child(1) > input')
            .click()
            .type(listing)
            .get(selectFromList)
            .first()
            .click({ force: true })
            //Select 'Global search' option again
            .get(globalSearchIcon)
            .click()
            //Select Contact tab
            .get(".global-search-type > :nth-child(2) > button")
            .click()
            //Select Contact input
            .get('#s2id_autogen2_search')
            .click()
            .type(contactName)
            .get(selectFromList)
            .first()
            .click({ force: true })
            //Select 'Global search' option again
            .get(globalSearchIcon)
            .click()
            //Select Directory tab
            .get(".global-search-type > :nth-child(3) > button")
            .click()
            //Select Directory input
            .get('#s2id_autogen3_search')
            .click()
            .type(directoryWord)
            .get(selectFromList)
            .first()
            .click({ force: true })

        if (isNZ() || isAU()) {
            //Select 'Global search' option again
            cy.get(globalSearchIcon)
                .click()
                //Select Product tab
                .get(".global-search-type > :nth-child(5) > button")
                .click()
                //Select Product input
                .get('#s2id_autogen5_search')
                .click()
                .type(product)
                .get(selectFromList)
                .first()
                .click({ force: true })
        }

    });
});