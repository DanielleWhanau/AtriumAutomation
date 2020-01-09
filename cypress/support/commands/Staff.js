import Faker from 'faker';
import { OFFICENAME } from "../../fixtures/Constants";
import { Environment } from "../Environment"
import { isNZ, isAU } from '../Environment';

Cypress.Commands.add('newStaff', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        const date = Faker.date.past(20).toLocaleDateString('ca-ES')
        var selectFromList = 'li.select2-results-dept-0'
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        var officeName = OFFICENAME[Environment.country]
        cy.get('.modal-body [id$=txtFirstName]')
            //Faker creates Random first name  
            .type(firstName)
            .get('.modal-body [id$=txtLastName]')
            //Faker creates Random first name  
            .type(lastName)
            .get('[id$=btnNext]')
            .click()
            //Selects Create New Staff button
            .get('#ctl00_cph0_uclDynamicStaffFind_StaffFind_divFooter > .button', { timeout: 20000 })
            .contains('Create New')
            .click()
            .wait(10000)
            //Enter Dob
            .get('[id$=uclDateOfBirth_txtDate]', { timeout: 5000 })
            .click()
            //Faker creates a random date within the last 20 years
            .type(date)
            //Selects Sales Consutant office
            .get('[id$=tabDetails_btnChangeOU]')
            .click()
            .get('#ctl00_cph0_divHeading')
            .should("be.visible")
            .get('[id$=uclAjaxSearchOrganisationalUnit_hidSelectedID] > .select2-choice > .select2-arrow')
            .click()
            .get('#select2-drop > div:nth-child(1) > input')
            .click()
            //Finding and selecting specific office from drop down list...
            .type(officeName)
            .get(selectFromList)
            .children()
            .contains(officeName)
            .first()
            .click()
            //Confirming office selection..
            .get('[id$=cph0_btnSelect]', { timeout: 20000 })
            .click()
            //Selects Contact tab on edit page
            .get(selectTab)
            .contains('Contact')
            .click({ force: true })
            //Enter Mobile number
            .get('[id$=uclContactInfoEdit_txtMobileNumber]')
            .click()
            .type('022 2222222')
            //Enter Email address
            .get('[id$=uclContactInfoEdit_txtEmail]')
            .click()
            .type('h1.test.testers@harcourts.net')

        //NZ + AU have confirm email all others don't        
        if (isNZ() || isAU()) {
            cy.get('[id$=uclContactInfoEdit_txtConfirmEmail]')
                .click()
                .type('h1.test.testers@harcourts.net')
        }

        //Selects System tab on edit page
        cy.get(selectTab)
            .contains('System')
            .click()


        if (type === 'sales-consultant') {
            //Selects Full edit listing permissions
            if (isNZ() || isAU()) {
                cy.get('span[securityroleid=18] > input')
                    .click()
            }

            //Selects Selling Consultant permissions
            cy.get('span[securityroleid=29] > input')
                .click()
        }

        if (type === 'office-administrator') {
            //Selecting office the Office Adminsitrator "Manages"
            cy.get('[id$=btnChangeManagedOU]')
                .click()
                .get('#ctl00_cph0_divHeading')
                .should("be.visible")
                .get('[id$=uclAjaxSearchOrganisationalUnit_hidSelectedID] > .select2-choice > .select2-arrow')
                .click()
                .get('#select2-drop > div:nth-child(1) > input')
                .click()
                //Finding and selecting specific office from drop down list...
                .type(officeName)
                .get(selectFromList)
                .children()
                .contains(officeName)
                .first()
                .click()
                //Confirming office selection..
                .get('[id$=cph0_btnSelect]', { timeout: 20000 })
                .click()
                //Selecting "Specialty" - N/A  
                .get('[id$=rblSpecialty_0]')
                .click()
                //Changing "Security Group" to Office Adminsitrator
                .get('[id$=drpSecurityGroup] > .select2-choice', { timeout: 20000 })
                .click()
                .get(selectFromList)
                .children()
                .contains("Office Administrator")
                .click({ force: true })
        }

        cy.SaveButton();

    });
});