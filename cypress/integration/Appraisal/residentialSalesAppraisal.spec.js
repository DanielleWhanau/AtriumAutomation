import Environment from "../../support/Environment";

describe('Create a Residential Sales Appraisal', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSalesConsultant();
        cy.visit(Environment.pages.dashboard+'Appraisals/Edit.aspx?t=residential');        
    });

    it('can create minimal residential sales appraisal', () => {
        cy.addResidentialSalesAppraisal();
    })
});