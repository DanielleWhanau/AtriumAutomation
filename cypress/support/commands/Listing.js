import Faker from 'faker';

Cypress.Commands.add('addListing', (type) => {
    return cy.then(() => {
        //const streetNumber = Faker.streetNumber.streetNumber();
        const streetNumber = Faker.random.number(100); 
        const streetName = Faker.address.streetName(); 
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();

        var agentName = 'Danielle Whanau'
        var suburb = 'Halswell'    
        var selectFromList = 'li.select2-results-dept-0'  
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        var command = cy
            .get('[id$=ajaxSearchStaff_hidSelectedID] > .select2-choice > .select2-arrow')
            .click()
            .get('[id$=select2-drop] > .select2-search > input')
            .click()
            .type(agentName)
            .get(selectFromList)
            .contains(agentName)
            .click()
            .get(selectTab)
            .contains('Address')
            .click()
            .get('[id$=txtStreetNumber]')
            .click()
            .type(streetNumber)
            .get('[id$=txtStreetName]')
            .type(streetName)
            .get("[id$=ajaxSearchLocation_hidSelectedID] > .select2-choice > .select2-arrow")
            .click()
            .get('[id$=autogen22_search]')
            .click()
            .type(suburb)
            .get(selectFromList)
            .contains(suburb)
            .click()


        if (type === 'residential-sales') {
            //Selects Full edit listing permissions
            command.get('span[securityroleid=18] > input')
                .click()
                //Selects Selling Consultant permissions
                .get('span[securityroleid=29] > input')
                .click()
        }

        if (type === 'residential-rental') {
            //Selects Full edit listing permissions
            command.get('span[securityroleid=18] > input')
                .click()
                //Selects Selling Consultant permissions
                .get('span[securityroleid=29] > input')
                .click()
        }

        command
            .saveStaffButton()
            .selectOK();

        return command;
    });
});

Cypress.Commands.add('saveStaffButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});

Cypress.Commands.add('selectOK', () => {
    cy.get('[id$=divCredentialHeading]', { timeout: 20000 }).should('be.visible')
        .get('[id$=cph0_btnOk]', { timeout: 20000 })
        .contains('Ok')
        .click()
});