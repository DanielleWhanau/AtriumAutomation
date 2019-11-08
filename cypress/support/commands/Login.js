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

Cypress.Commands.add('loginSalesConsultant', () => {
    cy.get('input[name=username]')
        .type(Environment.loginSalesConsultant.username)
        .get('input[name=password]')
        .type(Environment.loginSalesConsultant.password)
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