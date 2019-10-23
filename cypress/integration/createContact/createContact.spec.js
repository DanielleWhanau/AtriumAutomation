import Environment from "../../support/Environment";

describe('Create a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.contact('createContact');
        
    });

    it('can create minimal contact', () => {
        cy.get('@createContact').then(({ firstName, lastName }) => {
        })
    })
});