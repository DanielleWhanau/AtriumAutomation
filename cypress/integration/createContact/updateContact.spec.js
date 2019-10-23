import Environment from "../../support/Environment";

describe('Can update a Contact', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConstultant();
        cy.visit('https://one-nz-stage.harcourts.net/Contacts/Edit.aspx?id=7046624')
    });

    it('can update a contact', () => {
        cy.updateContact();
    })
});