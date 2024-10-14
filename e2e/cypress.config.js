const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4321",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
