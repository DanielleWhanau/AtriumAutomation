import Environment from "../../support/Environment";

describe('Create an Office', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.createOffice();
        
    });

    it('can create minimal office', () => {
        cy.get('@office').then(({ firstName, lastName }) => {
        })
    })
});