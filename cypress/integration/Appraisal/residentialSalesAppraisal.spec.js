import Environment from "../../support/Environment";

describe('Create a Residential Sales Appraisal', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit('https://one-nz-stage.harcourts.net/Appraisals/Edit.aspx?t=residential');        
    });

    it('can create minimal residential sales appraisal', () => {
        cy.addResidentialSalesAppraisal();
    })
});