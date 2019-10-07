import Environment from "../../support/Environment";

describe('Create Sales Consultant', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.login);
        cy.login();
        cy.newStaff();
        //Sets Sales Consultant specific settings
        cy.get('span[securityroleid=18] > input')
            .click()
            .get('span[securityroleid=29] > input')
            .click()
        cy.saveStaffButton();  
        cy.selectOK();  
    });

    it('can create minimal sales consultant', () => {
        cy.wait(10)
    })
});