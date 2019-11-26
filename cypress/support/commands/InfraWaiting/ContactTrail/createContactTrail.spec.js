import Environment from "../../../Environment";

describe('Create a minimal contact trail', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginOfficeAdministrator();
        cy.visit('https://one-nz-stage.harcourts.net/Apps/ContactTrail/Template.mvc/');
    });

    it('can create a minimal contact trail', () => {
        cy.createContactTrail();
    })
});