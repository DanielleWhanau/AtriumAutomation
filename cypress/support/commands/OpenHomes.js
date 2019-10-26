import Faker from 'faker';

Cypress.Commands.add('addOpenHomes', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("nz-ES");
        //Adds open home to my listing
        cy.get('[id$=tabOpenHomes_tab]')
            .click()
            //Open home date
            .get('[id$=uclListingOpenHomeListEdit_uclNewListingOpenHomeEdit_dtStartDate_txtDate]')
            .click()
            .type(futureDate)
            //Open home start time
            .get('[id$=uclNewListingOpenHomeEdit_tmStartTime_txtTimeDisplay]')
            .click()
            .type('5')
            //Open home finish time
            .get('[id$=uclNewListingOpenHomeEdit_tmEndTime_txtTimeDisplay]')
            .click()
            .type('5.30')
            //Add Open home
            .get('[id$=uclNewListingOpenHomeEdit_btnAdd]')
            .click()
            .get('[id$=tabOpenHomes_uclListingOpenHomeListEdit_uclNewListingOpenHomeEdit_imgAddingSpinner]')
            .should('not.be.visible')
            //Open Home date
            .get('[id$=uclListingOpenHomeListEdit_uclNewListingOpenHomeEdit_dtStartDate_txtDate]')
            .click()
            .type(futureDate)
            //Open home start time
            .get('[id$=uclNewListingOpenHomeEdit_tmStartTime_txtTimeDisplay]')
            .click()
            .type('6')
            //Open home finish time
            .get('[id$=uclNewListingOpenHomeEdit_tmEndTime_txtTimeDisplay]')
            .click()
            .type('6.30')
            //Add Open home
            .get('[id$=uclNewListingOpenHomeEdit_btnAdd]')
            .click()
    })
});