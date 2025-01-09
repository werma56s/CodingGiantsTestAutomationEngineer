const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1068,
    viewportWidth: 1800
  },
});
