const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.edu.goit.global/',
    viewportHeight: 1200,
    viewportWidth: 1200,
    testIsolation: false,
    specPattern: 'cypress/tests/**/*.spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
