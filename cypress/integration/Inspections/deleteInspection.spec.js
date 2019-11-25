import Environment from "../../support/Environment";

describe('Deletes Inspection on a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/View.aspx?id=894927')
    });

    it('Deletes Inspection on a listing', () => {
        cy.deleteInspection();
    })
});