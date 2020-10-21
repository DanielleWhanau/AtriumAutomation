

Cypress.Commands.add('createKPIDefinition', (type) => {
    return cy.then(() => {
        //Select Manage KPI dropdown
        cy.get('.jss509 > .MuiButtonBase-root > .MuiButton-label')
            .click()
            .get('.jss333 > .MuiButtonBase-root')
    });
});

Cypress.Commands.add('selectSiteMapCategories', (type) => {
    return cy.then(() => {
        //Select Sitemap hamburger
        cy.get('[data-testid=secondary-nav-hamburger]')
            .click()
            .wait(1000)
            //Select Dashboard category
            .get('[data-testid=secondary-parent-nav-0]')
            .click()
            .wait(1000)
            //Select Properties category
            .get('[data-testid=secondary-parent-nav-1]')
            .click()
            .wait(1000)
            //Select Contacts category
            .get('[data-testid=secondary-parent-nav-2]')
            .click()
            .wait(1000)
            //Select Marketing category
            .get('[data-testid=secondary-parent-nav-3]')
            .click()
            .wait(1000)
            //Select Email marketing category
            .get('[data-testid=secondary-parent-nav-4]')
            .click()
            .wait(1000)
            //Select Reports category
            .get('[data-testid=secondary-parent-nav-5]')
            .click()
            .wait(1000)
            //Select Financials category
            .get('[data-testid=secondary-parent-nav-6]')
            .click()
            .wait(1000)
            //Select Admin category
            .get('[data-testid=secondary-parent-nav-7]')
            .click()
            .wait(1000)
            //Select Resources category
            .get('[data-testid=secondary-parent-nav-8]')
            .click()
            .wait(1000)
            //Select 'x' on Hamburger icon
            .get('[data-testid=secondary-nav-hamburger]')
            .click()
            .log('Site map tabs pass')
    });
});