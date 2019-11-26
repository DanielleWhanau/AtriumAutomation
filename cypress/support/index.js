// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import 'cypress-plugin-retries';
import './ManualTest';
import './CustomSpec';
import './WaitUntil';
import '../support/commands/Login';
import '../support/commands/Staff';
import '../support/commands/Listing';
import '../support/commands/Franchise';
import '../support/commands/Office';
import '../support/commands/Contact';
import '../support/commands/EditContact';
import '../support/commands/Tasks';
import '../support/commands/RecurringTasks';
import '../support/commands/OpenHomes';
import '../support/commands/EditOpenHome';
import '../support/commands/DeleteOpenHome';
import '../support/commands/Inspections';
import '../support/commands/EditInspection';
import '../support/commands/DeleteInspection';
import '../support/commands/Appraisal';
import '../support/commands/StandaloneCMA';
import '../support/commands/KeyWordSearch';
import '../support/commands/AdvancedListingSearch';
import '../support/commands/Enquiries';
import '../support/commands/EditEnquiries';
import '../support/commands/DeleteEnquiries';
import '../support/commands/Hazards';
import '../support/commands/EditHazards';
import '../support/commands/DeleteHazards';
import '../support/commands/EmailMarketing';
import '../support/commands/GlobalSearch';
import '../support/commands/CCGProducts';
import '../support/commands/ContactTrails';