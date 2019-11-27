import Environment from "../../support/Environment";

describe('Create an Office', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
        cy.visit(Environment.pages.dashboard+'Directory/OrganisationalUnitEdit.aspx');       
    });

    it('can create minimal office', () => {
        cy.createOffice();
    })
});