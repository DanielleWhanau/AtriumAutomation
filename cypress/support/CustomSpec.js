import Environment from "./Environment";

/**
 * Manual test conditionally running
 * @param name
 * @returns {Mocha.Test}
 */
it.manual = (name) => {
    if (Environment.testTypes.manual) {
        it(name, cy.manualTest);
    } else {
        it.skip(name, cy.manualTest);
    }
};
