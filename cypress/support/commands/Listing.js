import Faker from 'faker';

Cypress.Commands.add('addListing', (type) => {
    return cy.then(() => {
        const streetNumber = Faker.random.number(100);
        const streetName = Faker.address.streetName();
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();

        var agentName = 'Danielle Whanau'
        var suburb = 'Halswell'
        var selectFromList = 'li.select2-results-dept-0'
        var sellerModal = '#divContactNewQuick > .modalBody'
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
            .get('.select2-searching')
            .should('not.be.visible')
            .get(selectFromList, { timeout: 2000 })
            .contains(suburb, { timeout: 2000 })
            .click()
            .get(selectTab)
            .contains('Map')
            .click()
            .get(".listing-edit-map", { timeout: 30000 })
            .should("be.visible")
            .get('#geocodeResults > a')
            .contains("New Zealand")
            .click()
            .get(selectTab)
            .contains('Sellers')
            .click()
            .get('[id$=btnAddContact]', { timeout: 2000 })
            .click()
            .get(sellerModal)
            .should('be.visible')
            .get('[id$=txtFirstName]', { timeout: 2000 })
            .click()
            .type(firstName)
            .get('[id$=txtLastName]')
            .click()
            .type(lastName)
            .get('[id$=txtEmailAddress]')
            .click()
            .type('h1.test.testers@harcourts.net')
            .get('[id$=uclContactNewQuick_txtConfirmEmail]')
            .click()
            .type('h1.test.testers@harcourts.net')
            .get("[id$=uclContactNewQuick_btnAdd]")
            .click()
            .get(sellerModal)
            .should('not.be.visible')
            .get('[id$=tab4_tab]')
            .click()
            .get('[id$=radStatusAvailable]')
            .click()



        if (type === 'residential-sales') {
            //Selects Listing Price Field
            command.get('[id$=advMinimumPrice_0]')
                .click()
                .type('1500000')
                .get(selectTab)
                .contains('Property Type')
                .click()
                .get('[id$=advPropertyType_7_0]')
                .click()
                .get('[id$=advBedrooms_0]')
                .click()
                .type('4')
                .get('[id$=advBathrooms_0]')
                .click()
                .type('2')
                .get('[id$=advLoungeRooms_0]')
                .click()
                .type('2')

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
            .Publishing()
            .SaveListing()
            .ViewListing();
    });
});

Cypress.Commands.add('Publishing', () => {
    var randomText = 'Check out this super cool property weeow!'
    cy.get('[id$=tc_tab04]')
        .contains('Publishing')
        .click()
        .get('.spinner')
        .should('not.be.visible')
        .get('[id$=advInternetHeading_0]')
        .click()
        .type('This home is GUCCI!')
        .get('[id$=dvInternetBody_0]')
        .click()
        .type(randomText)
        .get('[id$=ctl02_rbUseExport]')
        .click()
        .get('[id$=ctl03_rbUseExport]')
        .click()
        .get('[id$=pnlExportToTradeMeHeader]')
        .should('be.visible')
        .get('[id$=btnYesExportToTradeMe]')
        .click()
});

Cypress.Commands.add('SaveListing', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});

Cypress.Commands.add('ViewListing', () => {
    cy.get('[id$=hypViewListingPageControl]')
        .contains('View listing')
        .click()
});