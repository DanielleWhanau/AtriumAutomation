import Environment from "../../support/Environment";

describe('Edits Hazards on a listing', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Listings/View.aspx?id=894927')
    });

    it('Edits Hazards on a listing', () => {
        cy.editHazards();
    })
});