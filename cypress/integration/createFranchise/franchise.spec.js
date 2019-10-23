import Environment from "../../support/Environment";

describe('Create a Franchise', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');       
    });

    it('can create minimal franchise', () => {
        cy.createFranchise();
    })
});