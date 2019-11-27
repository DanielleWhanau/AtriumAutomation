import Environment from "../../support/Environment";

describe('Create minimal weekly and monthly recurring Task', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('/Apps/Task.mvc/');       
    });

    it('can create minimal weekly and monthly recurring task', () => {
        cy.recurringTask();
    })
});