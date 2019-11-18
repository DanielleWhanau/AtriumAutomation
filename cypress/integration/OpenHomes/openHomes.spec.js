import Environment from "../../support/Environment";

describe('Adds open homes to a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/View.aspx?id=894927')
    });

    it('Adds open homes to a listing', () => {
        cy.addOpenHomes();
    })
});