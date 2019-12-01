import Faker from 'faker';

Cypress.Commands.add('editOpenHome', (type) => {
    return cy.then(() => {
        const futureDate = Faker.date.future(0.08).toLocaleDateString("nz-ES");
        //Navigate to Open Home tab
        cy.get('[id$=tabOpenHomes_tab]')
            .click()
            //Select Edit button
            .get('[id$=repListingOpenHomes_ctl00_uclListingOpenHomeEdit_lnkOpenHomeEdit]')
            .click()
            //Edit start time
            .get('[id$=repListingOpenHomes_ctl00_uclListingOpenHomeEdit_tmStartTime_txtTimeDisplay]')
            .click()
            .clear()
            .type('7.30')
            //Edit end time
            .get('[id$=repListingOpenHomes_ctl00_uclListingOpenHomeEdit_tmEndTime_txtTimeDisplay]')
            .click()
            .clear()
            .type('8.00')
            //Select OK
            .get('[id$=_repListingOpenHomes_ctl00_uclListingOpenHomeEdit_btnOK]')
            .click()
    })
});