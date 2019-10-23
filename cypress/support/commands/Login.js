import Environment from "../Environment";

Cypress.Commands.add('loginSystemAdministrator', () => {
    cy.get('input[name=username]')
        .type(Environment.loginSystemAdministrator.username)
        .get('input[name=password]')
        .type(Environment.loginSystemAdministrator.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});

Cypress.Commands.add('loginSalesConstultant', () => {
    cy.get('input[name=username]')
        .type(Environment.loginSalesConstultant.username)
        .get('input[name=password]')
        .type(Environment.loginSalesConstultant.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});

Cypress.Commands.add('loginOfficeAdministrator', () => {
    cy.get('input[name=username]')
        .type(Environment.loginOfficeAdministrator.username)
        .get('input[name=password]')
        .type(Environment.loginOfficeAdministrator.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});