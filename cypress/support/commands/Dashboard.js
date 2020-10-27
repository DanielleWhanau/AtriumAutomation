Cypress.Commands.add('selectHeaderDropdowns', (type) => {
    return cy.then(() => {
        //Select Dashboard Dropdown
        cy.get('[data-testid=primary-parent-nav-0]')
            .click()
            //Select Contacts Dropdown
            .get('[data-testid=primary-parent-nav-1]')
            .click()
            .wait(1000)
            //Select Properties Dropdown
            .get('[data-testid=primary-parent-nav-2]')
            .click()
            .wait(1000)
            //Select Marketing Dropdown
            .get('[data-testid=primary-parent-nav-3]')
            .click()
            .wait(1000)
            //Select Helper icon
            .get(':nth-child(2) > .jss148 > .MuiButtonBase-root')
            .click()
            .wait(1000)
            //click white space to collapse draw out
            .get('.MuiDrawer-root')
            .click()
            //Select Notification icon
            .get('.jss179 > .MuiButtonBase-root')
            .click()
            .wait(1000)
            //click white space to collapse draw out
            .get('.jss448')
            .click()
            //Select User Icon
            .get('[data-testid=toggle-user-menu-popup]')
            .click()
            .wait(1000)
            //Select 'x' icon
            .get('[data-testid=toggle-user-menu-popup]')
            .click()
            .wait(1000)
            .log('Dashboard Headers pass')
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