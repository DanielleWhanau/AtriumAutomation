import Faker from 'faker';

Cypress.Commands.add('newStaff', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        var selectFromList = 'li.select2-results-dept-0'
        var selectTab = '.ajax__tab_header span.ajax__tab_tab'
        var command = cy
            .get('[id$=hypAddStaff]')
            .contains('Add New Staff')
            .click()
            .get('.modal-body [id$=txtFirstName]')
            //Faker creates Random first name  
            .type(firstName)
            .get('.modal-body [id$=txtLastName]')
            //Faker creates Random first name  
            .type(lastName)
            .get('[id$=btnNext]')
            .click()
            //Selects Create New Staff button
            .get('[id$=StaffFind_divFooter] > .button', { timout: 20000 })
            .contains('Create New')
            .click()
            //Enter Dob
            .get('[id$=uclDateOfBirth_txtDate]')
            .click()
            //Faker creates a random date within the last 20 years
            .type(Faker.date.past(20).toLocaleDateString('ca-ES'))
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
            .type('Harcourts Greytown')
            .get(selectFromList)
            .children()
            .contains('Harcourts Greytown (Branch)')
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
            //Confirm Email address
            .get('[id$=uclContactInfoEdit_txtConfirmEmail]')
            .click()
            .type('h1.test.testers@harcourts.net')
            //Selects System tab on edit page
            .get(selectTab)
            .contains('System')
            .click()
            .wrap({ firstName, lastName })
            .as('user')

        if (type === 'sales-consultant') {
            //Selects Full edit listing permissions
            command.get('span[securityroleid=18] > input')
                .click()
                //Selects Selling Consultant permissions
                .get('span[securityroleid=29] > input')
                .click()
        }

        if (type === 'office-administrator') {
            //Selecting office the Office Adminsitrator "Manages"
            command.get('[id$=btnChangeManagedOU]')
                .click()
                .get('#ctl00_cph0_divHeading')
                .should("be.visible")
                .get('[id$=uclAjaxSearchOrganisationalUnit_hidSelectedID] > .select2-choice > .select2-arrow')
                .click()
                .get('#select2-drop > div:nth-child(1) > input')
                .click()
                //Finding and selecting specific office from drop down list...
                .type('Harcourts Greytown')
                .get(selectFromList)
                .children()
                .contains('Harcourts Greytown (Branch)')
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

        command.wrap({ firstName, lastName })
            .as('user')

        command
            .saveStaffButton()
            //.selectOK();

        return command;
    });
});

Cypress.Commands.add('saveStaffButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});

Cypress.Commands.add('selectOK', () => {
    cy.get('[id$=divCredentialHeading]', { timeout: 20000 }).should('be.visible')
        .get('[id$=cph0_btnOk]', { timeout: 20000 })
        .contains('Ok')
        .click()
});