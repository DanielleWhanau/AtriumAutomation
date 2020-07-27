Cypress.Commands.add('selectHeaderDropdowns', (type) => {
    return cy.then(() => {
        //Select Dashboard Dropdown
        cy.get('[data-testid=primary-parent-nav-0]')
            .click()
            //Select Contacts Dropdown
            .get('[data-testid=primary-parent-nav-1]')
            .click()
            //Select Properties Dropdown
            .get('[data-testid=primary-parent-nav-2]')
            .click()
            //Select Marketing Dropdown
            .get('[data-testid=primary-parent-nav-3]')
            .click()
            //Select User Icon
            .get('[data-testid=toggle-user-menu-popup]')
            .click()
            //Select 'x' icon
            .get('[data-testid=toggle-user-menu-popup]')
            .click()
    });
});

Cypress.Commands.add('selectSiteMapCategories', (type) => {
    return cy.then(() => {
        //Select Sitemap hamburger
        cy.get('[data-testid=secondary-nav-hamburger]')
            .click()
            //Select Dashboard category
            .get('[data-testid=secondary-parent-nav-0]')
            .click()
            //Select Properties category
            .get('[data-testid=secondary-parent-nav-1]')
            .click()
            //Select Contacts category
            .get('[data-testid=secondary-parent-nav-2]')
            .click()
            //Select Marketing category
            .get('[data-testid=secondary-parent-nav-3]')
            .click()
            //Select Email marketing category
            .get('[data-testid=secondary-parent-nav-4]')
            .click()
            //Select Reports category
            .get('[data-testid=secondary-parent-nav-5]')
            .click()
            //Select Financials category
            .get('[data-testid=secondary-parent-nav-6]')
            .click()
            //Select Admin category
            .get('[data-testid=secondary-parent-nav-7]')
            .click()
            //Select Resources category
            .get('[data-testid=secondary-parent-nav-8]')
            .click()
            //Select 'x' on Hamburger icon
            .get('[data-testid=secondary-nav-hamburger]')
            .click()
    });
});