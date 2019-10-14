import Environment from "../../support/Environment";

describe('Create an Office', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.login();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.createOffice();
        
    });

    it('can create minimal office', () => {
        cy.get('@offices').then(({ firstName, lastName }) => {
        })
    })
});