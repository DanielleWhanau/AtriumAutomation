import Environment from "../../support/Environment";

describe('Create minimal Tasks', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.dashboard+'Apps/Task.mvc/');       
    });

    it('can create minimal tasks', () => {
        cy.createTasks();
    })
});