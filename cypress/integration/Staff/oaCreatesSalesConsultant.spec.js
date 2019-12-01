import Environment from "../../support/Environment";

describe('Create Sales Consultant', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
    });

    it('can create minimal sales consultant', () => {
        cy.newStaff('sales-consultant');
    })
});