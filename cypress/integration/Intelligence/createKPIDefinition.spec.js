import Environment from "../../support/Environment";

describe('Creates a KPI definition', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.intelligencePage);
        cy.loginSalesConsultant();
    });

    it('can login and create a KPI definition', () => {
        cy.createKPIDefinition();
    })
});