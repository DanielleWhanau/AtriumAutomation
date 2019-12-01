import Environment from "../../support/Environment";

describe('Create Feature Listing Email Marketing piece', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('/EmailMarketing/Mailout.aspx?tmpl=2');
    });

    it('can create a minimal feature listing email marketing piece', () => {
        cy.createEmailMarketing('feature-listing');
    })
});