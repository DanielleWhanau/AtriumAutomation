import Environment from "../../../Environment";

describe('Create Custom Mailout Email Marketing piece', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('/EmailMarketing/Templates.aspx');
    });

    it('Can create a minimal custom mailout piece', () => {
        cy.createEmailMarketing('custom-mailout');
    })
});