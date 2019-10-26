import Faker from 'faker';

Cypress.Commands.add('addListing', (type) => {
    return cy.then(() => {
        const streetNumber = Faker.random.number(100);
        const streetName = Faker.address.streetName();
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const futureDate = Faker.date.future(0.08).toLocaleDateString("ca-ES");
        var agentName = 'HarcourtsOne tester'
        var suburb = 'Halswell'
        var selectFromList = 'li.select2-results-dept-0'
        var sellerModal = '#divContactNewQuick > .modalBody'
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        var command = cy
            //Selects Listing Consultant
            .get('[id$=ajaxSearchStaff_hidSelectedID] > .select2-choice > .select2-arrow')
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
            .get('[id$=autogen22_search]')
            .click()
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
            .contains("New Zealand")
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
                .type('h1.test.testers@harcourts.net')
                .get('[id$=uclContactNewQuick_txtConfirmEmail]')
                .click()
                .type('h1.test.testers@harcourts.net')
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
                //Selects Listing Price Field
                .get('[id$=advMinimumPrice_0]')
                .click()
                .type('1500000')
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
                .type('h1.test.testers@harcourts.net')
                .get('[id$=uclContactNewQuick_txtConfirmEmail]')
                .click()
                .type('h1.test.testers@harcourts.net')
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

        command.wrap({futureDate})
        .as('listing')

        command
            .Publishing()
            .SaveListing()
            .ViewListing();
    });
});

Cypress.Commands.add('Publishing', () => {
    var randomText = 'Check out this super cool property weeow!'
    //Selects Publishing tab
    cy.get('[id$=tc_tab04]')
        .contains('Publishing')
        .click()
        .get('.spinner')
        .should('not.be.visible')
        //Selects and enters listing header
        .get('[id$=advInternetHeading_0]', { timeout: 20000 })
        .should('be.visible')
        .click()
        .type('This home is GUCCI!')
        //Selects and enters listing body
        .get('[id$=dvInternetBody_0]')
        .click()
        .type(randomText)
});

Cypress.Commands.add('SaveListing', () => {
    //Selects save button
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
        .get('.spinner')
        .should('not.be.visible')
});

Cypress.Commands.add('ViewListing', () => {
    //Selects View listing button
    cy.get('[id$=hypViewListingPageControl]')
        .contains('View listing')
        .click()
});