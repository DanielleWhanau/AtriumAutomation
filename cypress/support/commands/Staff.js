import Faker from 'faker';

Cypress.Commands.add('newStaff', (type) => {
    return cy.then(() => {
        const firstName = Faker.name.firstName();
        const lastName = Faker.name.lastName();
        
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
            //Selects Contact tab on edit page
            .get('.ajax__tab_header span.ajax__tab_tab')
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
            .get('.ajax__tab_header span.ajax__tab_tab')
            .contains('System')
            .click()
            .wrap({firstName, lastName})
            .as('user')

            if (type === 'sales-consultant') {
                command.get('span[securityroleid=18] > input')
                    .click()
                    .get('span[securityroleid=29] > input')
                    .click()
            }
            
            if (type === 'office-administrator') {
                command.get('[id$=btnChangeManagedOU]')
                    .click()
                    .get()
                    .get('span[securityroleid=29] > input')
                    .click()
            }

            command
            .saveStaffButton()
            .selectOK();
    
            return command;
    });
});

Cypress.Commands.add('saveStaffButton', () => {
    cy.get('[id$=uclEditSave_btnSave]')
        .contains('Save Now')
        .click()
});

Cypress.Commands.add('selectOK', () => {
    cy.get('[id$=divCredentialHeading]').should('be.visible')
        .get('[id$=cph0_btnOk]', { timeout: 20000 })
        .contains('Ok')
        .click()
});