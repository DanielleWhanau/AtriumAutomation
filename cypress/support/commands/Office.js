import Faker from 'faker';

Cypress.Commands.add('createOffice', (type) => {
    return cy.then(() => {
        const name = Faker.name.firstName();
        const randomText = Faker.random.alphaNumeric();
        var selectFromList = 'li.select2-results-dept-0'
        var command = cy
            //Selects which Franchise the office belongs to
            .get('[id$=uclAjaxSearchOrganisationalUnit_hidSelectedID]')
            .click()
            .get('.select2-input')
            .click()
            .type('Harcourts Group')
            .get(selectFromList)
            .children()
            .contains('Harcourt Group')
            .click()
            .get('[id$=tabDetails_btnSelect]')
            .click()
            //Enter office name field
            .get('[id$=tabDetails_txtName]')
            .type('Harcourts Franchise ' + name)
            .get('[id$=tabDetails_txtCode]')
            .click()
            .type(randomText)
            //Select State
            .get('[id$=drpState] > .select2-choice')
            .click()
            .get(selectFromList)
            .children()
            .contains('New Zealand')
            .click()
            //Enter opening date
            .get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2018')
            //Select Contact tab
            .get('[id$=tabContact_tab]')
            .click()
            //Enter minimal contact info
            .get('[id$=txtEmail]')
            .click()
            .type('test@test.com')
            .get('[id$=txtConfirmEmail]')
            .click()
            .type('test@test.com')
            .get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')
            //Select System tab
            .get('[id$=tabSystem_tab]')
            .click()
            //Select Catchment Area tab
            .get('[id$=tabCatchmentAreas_tab]')
            .click()
            //Set Default Suburb
            .get('[id$=uclAjaxSearchLocationSuburb_hidSelectedID]')
            .click()
            .get('.select2-input')
            .click()

        if (country === 'NZ') {
            //Type suburb name
            command.type('Halswell')
                //Type catchment area name    
                .get('[id$=uclAjaxSearchLocation_hidSelectedID]')
                .click()
                .get('.select2-input')
                .click()
                .type('Halswell')
                .get('[id$=tcOU_tabFinance_tab]')
                .click()


        }

        if (country === 'AU') {
            //Type suburb name
            command.type('Jimboomba')
                //Type catchment area name    
                .get('[id$=uclAjaxSearchLocation_hidSelectedID]')
                .click()
                .get('.select2-input')
                .click()
                .type('Jimboomba')

        }

        if (country === 'ZA') {
            //Type suburb name
            command.type('Johannesburg')
                //Type catchment area name    
                .get('[id$=uclAjaxSearchLocation_hidSelectedID]')
                .click()
                .get('.select2-input')
                .click()
                .type('Johannesburg')

        }

        if (country === 'ID') {
            //Type suburb name
            command.type('Balige')
                //Type catchment area name    
                .get('[id$=uclAjaxSearchLocation_hidSelectedID]')
                .click()
                .get('.select2-input')
                .click()
                .type('Balige')

        }

        if (country === 'US') {
            //Type suburb name
            command.type('Acton')
                //Type catchment area name    
                .get('[id$=uclAjaxSearchLocation_hidSelectedID]')
                .click()
                .get('.select2-input')
                .click()
                .type('Acton')

        }

        command
            .saveStaffButton()

        return command;
    });
});

Cypress.Commands.add('saveStaffButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});