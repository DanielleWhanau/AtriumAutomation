import Environment from "../../support/Environment";

describe('Create a Franchise', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.login();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.createFranchise();
        
    });

    it('can create minimal franchise', () => {
        cy.get('@franchises').then(({ firstName, lastName }) => {
        })
    })
});