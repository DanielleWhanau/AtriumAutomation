import Environment from "../../support/Environment";

describe('Select Categories from sitemap', function () {

    beforeEach(() => {
        cy.visit(Environment.pages.dashboard);
        cy.loginSystemAdministrator();
    });

    it('can login and select site map and categories', () => {
        cy.selectSiteMapCategories();
    })
});