Cypress.Commands.add('purchaseProduct', (type) => {
    return cy.then(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        })

        var command = cy
        if (type === 'email-purchase') {
            //Accept T&C's
            cy.get('#AcceptTermsAndConditions')
                .click()
                .get('.button')
                .click()
        }

        if (type === 'website-purchase') {
            //Accept T&C's
            cy.get('#AcceptTermsAndConditions')
                .click()
                .get('.button')
                .click()
        }
        command
            .EnterCreditCardDetails()
    });
});

Cypress.Commands.add('EnterCreditCardDetails', () => {
    //Fill out credit card form/details
    cy.get("[id$=CreditCardNumber]")
        .click()
        .type('1111111111111111')
        .get("[id$=CardHolderName]")
        .type('Card Holder')
        .get("[id$=Cvs]")
        .type('111')
        //select submit payment button
        .get("[id$=submit]")
        .click()
});