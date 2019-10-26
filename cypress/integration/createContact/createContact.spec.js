import Environment from "../../support/Environment";

describe('Create a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('can create minimal contact', () => {
        cy.createContact();
    })
});