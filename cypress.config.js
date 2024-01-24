const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c696g5',
  //'npx cypress run --record --key 09be2e4c-07c4-4de0-9a1c-c7a1820cf21d'

  retries: {
    runMode: 1,
    openMode: 1
  },

  screenshotOnRunFailure: true,
  video: true,
  defaultCommandTimeout: 3000,


  e2e: {
    // baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
