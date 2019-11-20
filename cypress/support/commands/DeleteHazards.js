Cypress.Commands.add('deleteHazards', (type) => {
    return cy.then(() => {
        //Selects Hazards tab on a listing
        cy.get('[id$=tabHazards_tab]')
            .click()
            //Selects delete button (on random hazard)
            .get('[id$=repListingHazard_ctl00_uclListingHazardEdit_lnkDelete]')
            .click()
    })
});