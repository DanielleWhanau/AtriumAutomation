import { AGENTNAME } from "../../fixtures/Constants";
import { Environment } from "../Environment"

Cypress.Commands.add('advancedListingSearch', (type) => {
    return cy.then(() => {
        var selectFromList = "li.select2-results-dept-0"
        var agentName = AGENTNAME[Environment.country]
        //Select 'More' Search option
        cy.get('[id$=ucListingSearchWithin_drpSearchWithin] > .select2-choice > .select2-arrow', { timeout: 2000 })
            .click()
            .get(selectFromList)
            .children()
            .contains("All Harcourts")
            .click({ force: true })
            .get("[id$=uclListingSearch_uclListingSearchPanel_lnkMore1]")
            .click()
            .get(".spinner", { timeout: 30000 })
            .should("not.be.visible")
            .get("[id$=uclListingSearch_uclDynamicListingSearchPanelAdvanced_ListingSearchPanelAdvanced_ajaxSearchListingStaff_hidSelectedID] > .select2-choice")
            .click()
            .get('#select2-drop > div:nth-child(1) > input')
            .click()
            .type(agentName)
            .get(".select2-searching", { timeout: 30000 })
            .should('not.be.visible')
            .get(selectFromList)
            .first()
            .click()
            .get("[id$=ListingSearchPanelAdvanced_btnSearch]")
            .click()
            //Logs it is done
            .log('Advanced Search done')
    });
});