import Faker from 'faker';
import { Environment, isAU, isZA, isUS, isNZ, isID } from "../Environment";
import { COUNTRYNAME, STATENAME } from "../../fixtures/Constants";

Cypress.Commands.add('createOffice', (type) => {
    return cy.then(() => {
        const name = Faker.name.firstName();
        const code = Faker.random.word(1);
        var selectFromList = 'li.select2-results-dept-0'
        var countryName = COUNTRYNAME[Environment.country]
        var stateName = STATENAME[Environment.country]
        //Selects which Franchise the office belongs to
        cy.get('[id$=uclAjaxSearchOrganisationalUnit_hidSelectedID] > .select2-choice > .select2-arrow')
            .click()
            .get('#s2id_autogen7_search')
            .click()
            .type('Harcourts')
            .get(selectFromList)
            .first()
            .click()
            .get('[id$=tabDetails_btnSelect]')
            .click()
            .get('[id$=tabDetails_btnSelect]')
            .should('not.be.visible')
            //Enter office name field
            .get('#ctl00_cph0_tcOU_tabDetails_txtName')
            .should('be.visible')
            .click()
            .type('Harcourts Office ' + name)
            .get('[id$=tabDetails_txtCode]')
            .click()
            .type(code)

        if (isNZ() || isAU() || isID()) {
            //Select State
            cy.get('[id$=drpState] > .select2-choice')
                .click()
                .get(selectFromList)
                .children()
                .contains(countryName)
                .click()
        }

        if (isZA()) {
            //Select State
            cy.get('[id$=drpState] > .select2-choice')
                .click()
                .get(selectFromList)
                .children()
                .contains(stateName)
                .click()
        }

        //Enter opening date
        cy.get('[id$=uclDateOpened_txtDate]')
            .click()
            .type('01/01/2018')
            //Select Contact tab
            .get('[id$=tabContact_tab]')
            .click()
            //Enter minimal contact info
            .get('[id$=txtEmail]')
            .click()
            .type('test@test.com')

        if (isNZ() || isAU()) {
            //Confirm email only necessary in NZ and AU
            cy.get('[id$=txtConfirmEmail]')
                .click()
                .type('test@test.com')
        }

        cy.get('[id$=txtHomeNumber]')
            .click()
            .type('022 2222222')
            //Select System tab
            .get('[id$=tabSystem_tab]')
            .click()
            //Select Catchment Area tab
            .get('[id$=tabCatchmentAreas_tab]')
            .click()
            //Set Default Suburb
            .get('#s2id_ctl00_cph0_tcOU_tabCatchmentAreas_uclAjaxSearchLocationSuburb_hidSelectedID')
            .click()

        if (isNZ()) {
            //Type and select suburb name
            cy.get('#select2-drop > .select2-search')
                .click()
                .type('Halswell')
                .get(selectFromList)
                .first()
                .click()
                //Type and select catchment area name    
                .get('[id$=tabCatchmentAreas_uclAjaxSearchLocation_hidSelectedID] > .select2-choice', { timeout: 5000 })
                .click()
                .get('#select2-drop > .select2-search')
                .click()
                .find('input')
                .first()
                .type('Halswell')
                .get(selectFromList)
                .first()
                .click()
                //Set Office level franchise settings
                .get('[id$=tcOU_tabFinance_tab]')
                .click()
                //Enter Tax Number
                .get('[id$=tabFinance_txtTaxNumber]')
                .click()
                .type('12-123-1234')
                //Select office to use new trust
                .get('[id$=tabFinance_rbUsesNewContractsApplication]')
                .click()
        }

        if (isAU()) {
            //Type and select suburb name
            cy.get('#select2-drop > .select2-search')
                .click()
                .type('Jimboomba')
                .get(selectFromList)
                .first()
                .click()
                //Type and select catchment area name    
                .get('[id$=tabCatchmentAreas_uclAjaxSearchLocation_hidSelectedID] > .select2-choice', { timeout: 5000 })
                .click()
                .get('#select2-drop > .select2-search')
                .click()
                .find('input')
                .first()
                .type('Jimboomba')
                .get(selectFromList)
                .first()
                .click()
                //Set Office level franchise settings
                .get('[id$=tcOU_tabFinance_tab]')
                .click()
                //Enter ABN Number
                .get('[id$=tabFinance_txtTaxNumber]')
                .click()
                .type('12-123-1234')
                //Select office to use new trust
                .get('[id$=tabFinance_rbUsesNewContractsApplication]')
                .click()
        }

        if (isZA()) {
            //Type and select suburb name
            cy.get('#select2-drop > .select2-search')
                .click()
                .type('Johannesburg')
                .get(selectFromList)
                .first()
                .click()
                .wait(3000)
                //Type and select catchment area name    
                .get('[id$=tabCatchmentAreas_uclAjaxSearchLocation_hidSelectedID] > .select2-choice', { timeout: 5000 })
                .click()
                .get('#select2-drop > .select2-search')
                .click()
                .find('input')
                .first()
                .type('Johannesburg')
                .get(selectFromList)
                .first()
                .click()
        }

        if (isID()) {
            //Type and select suburb name
            cy.get('#select2-drop > .select2-search')
                .click()
                .type('Balige')
                .get(selectFromList)
                .first()
                .click()
                //Type and select catchment area name    
                .get('[id$=tabCatchmentAreas_uclAjaxSearchLocation_hidSelectedID] > .select2-choice', { timeout: 5000 })
                .click()
                .get('#select2-drop > .select2-search')
                .click()
                .find('input')
                .first()
                .type('Balige')
                .get(selectFromList)
                .first()
                .click()
        }

        if (isUS()) {
            //Type and select suburb name
            cy.get('#select2-drop > .select2-search')
                .click()
                .type('Acton')
                .get(selectFromList)
                .first()
                .click()
                //Type and select catchment area name    
                .get('[id$=tabCatchmentAreas_uclAjaxSearchLocation_hidSelectedID] > .select2-choice', { timeout: 5000 })
                .click()
                .get('.select2-input')
                .click()
                .find('input')
                .first()
                .type('Acton')
                .get(selectFromList)
                .first()
                .click()
        }
        
        cy.SaveButton();
    })
});