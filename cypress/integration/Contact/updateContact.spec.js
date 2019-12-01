import Environment from "../../support/Environment";

describe('Can update a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
    });

    it('can update a contact', () => {
        cy.updateContact();
    })
});