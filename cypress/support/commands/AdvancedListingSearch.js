Cypress.Commands.add('advancedListingSearch', (type) => {
    return cy.then(() => {
        var selectFromList = "li.select2-results-dept-0"
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
            .get('#select2-drop > .select2-search')
            .click()
            .type('Brend')
            .click()
            .first()
            .get("[id$=ListingSearchPanelAdvanced_btnSearch]")
            .click()
            //Logs it is done
            .log('Advanced Search done')
    });
});