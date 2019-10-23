import Environment from "../../support/Environment";

describe('Can delete a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Directory/OrganisationalUnitEdit.aspx');
        cy.contact('deleteContact');
        
    });

    it('can delete a contact', () => {
        cy.get('@deleteContact').then(({ firstName, lastName }) => {
        })
    })
});