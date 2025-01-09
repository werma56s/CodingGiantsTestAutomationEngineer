const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      const browser = config.browser || process.env.BROWSER || "default";
      const outputPath = `cucumber_report_docker/${browser}/json`;
      console.log("Browser:", browser);
      config.env.cucumberJson = { 
        generate: true,
        outputFolder: outputPath,
        filePrefix: "",
        fileSuffix: ".cucumber",
      };
      console.log("Cucumber JSON Config:", config.env.cucumberJson);
      console.log("Output Folder:", config.env.cucumberJson.outputFolder);
      on('file:preprocessor', cucumber());

     return config;
    },
    supportFile: "cypress/support/e2e.js",
    viewportHeight: 1068,
    viewportWidth: 1800
  },
});
