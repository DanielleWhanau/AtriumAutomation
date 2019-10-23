import Environment from "../../support/Environment";

describe('Can update a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.contact('updateContact');
        
    });

    it('can update a contact', () => {
        cy.get('@updateContact').then(({ firstName, lastName }) => {
        })
    })
});