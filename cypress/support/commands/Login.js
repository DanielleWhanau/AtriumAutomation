import Environment from "../Environment";

Cypress.Commands.add('loginSystemAdministrator', () => {
    cy.get('input[name=username]')
        .type(Environment.user.username)
        .get('input[name=password]')
        .type(Environment.user.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});

Cypress.Commands.add('loginSalesConstultant', () => {
    cy.get('input[name=username]')
        .type(Environment.user.username)
        .get('input[name=password]')
        .type(Environment.user.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});

Cypress.Commands.add('loginOfficeAdministrator', () => {
    cy.get('input[name=username]')
        .type(Environment.user.username)
        .get('input[name=password]')
        .type(Environment.user.password)
        .get('button[type=submit]')
        .click()
        .get('h1')
        .contains('Dashboard')
        .should('exist');
});