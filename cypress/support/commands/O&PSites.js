import Faker from 'faker';
import { OFFICENAME } from "../../fixtures/Constants"
import { Environment } from "../Environment"

Cypress.Commands.add('officeWebsite', (type) => {
    return cy.then(() => {
        const websiteName = Faker.name.firstName();
        var officeName = OFFICENAME[Environment.country]
        var selectFromList = "li.select2-results-dept-0"
        NavigateToWebPageManagement();
        CreatePrimaryWebsiteUrl(websiteName);
        //assign office to feature in this website
        cy.get('#select2-chosen-17')
            .click()
            .get('#select2-drop > .select2-search')
            .click()
            .type(officeName)
            .get(selectFromList)
            .first()
            .click()
        AssignWebsiteName(websiteName);
        MakeLive();
        SaveAndSearch(websiteName);
    })
});

export function NavigateToWebPageManagement() {
    //Navigate to Create Website page
    cy.get('[id$=lblGroupName]')
        .contains('Administrative Tools')
        .click()
        .get('[id$=hypName]')
        .contains('Webpage Management')
        .click()
        .get('.page-controls > ul > :nth-child(1) > a')
        .click()
}

export function CreatePrimaryWebsiteUrl(websiteName) {
    //Select and assign Redirecting Addresses
    cy.get(':nth-child(3) > .value > div > a')
        .click()
        .get('#AliasName')
        .click()
        //enter website name
        .type(websiteName)
        .get('.ui-dialog-buttonset > :nth-child(1)')
        .click()
        //make primary name
        .get(':nth-child(3) > .value > table > tbody > :nth-child(2) > :nth-child(2) > a')
        .click()

}

export function AssignWebsiteName(websiteName) {
    //type website name
    cy.get('#WebsiteTitle')
        .should('be.visible')
        .click()
        .type(websiteName)
}

export function MakeLive() {
    //make website live
    cy.get('#IsLive')
        .click()
}

export function SaveAndSearch(websiteName) {
    //save website
    cy.get('.button')
        .click()
        //search and find newly created website
        .get('#keyword')
        .should('be.visible')
        .click()
        .type(websiteName)
        .get(':nth-child(10) > div > .button')
        .click()

}