import { COUNTRIES, ENVIRONMENTS} from "../fixtures/Constants";

export const Environment = {
    environment: Cypress.env('environment'),
    country: Cypress.env('country'),
    manual: Cypress.env('manual'),
    pages: {
        dashboard: Cypress.env('urls').dashboard,
        residentialSalesListing: Cypress.env('urls').residentialSalesListing,
        residentialRentalListing: Cypress.env('urls').residentialRentalListing,
    },
    user: {
        username: Cypress.env('user').username,
        password: Cypress.env('user').password,
    }
};

export const isNZ = () => Environment.country === COUNTRIES.NZ;
export const isAU = () => Environment.country === COUNTRIES.AU;
export const isUS = () => Environment.country === COUNTRIES.US;
export const isZA = () => Environment.country === COUNTRIES.ZA;
export const isID = () => Environment.country === COUNTRIES.ID;
export const isDev = () => Environment.environment === ENVIRONMENTS.DEV;
export const isQA = () => Environment.environment === ENVIRONMENTS.QA;
export const isStage = () => Environment.environment === ENVIRONMENTS.STAGE;
export const isProduction = () => Environment.environment === ENVIRONMENTS.PRODUCTION;

/**
 * itShouldRun([isNZ, isAU], [isQA, isStage, isProduction])
 * @param conditions
 * @returns {boolean}
 */
export const itShouldRun = (...conditions) => conditions.every(condition => {
    if (Array.isArray(condition)) {
        return condition.some(callable => callable());
    }
    return condition();
});

export default Environment;
