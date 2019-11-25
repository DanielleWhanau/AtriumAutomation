import Environment from "../../support/Environment";

describe('Create a standalone CMA', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/CMA/Edit.aspx?t=residential');        
    });

    it('can create minimal standalone CMA', () => {
        cy.addStandaloneCMA();
    })
});