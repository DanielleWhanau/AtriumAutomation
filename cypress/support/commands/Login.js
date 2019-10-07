import Environment from "../Environment";

Cypress.Commands.add('login', () => {
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