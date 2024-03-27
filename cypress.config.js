import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    viewportWidth: 1300,
    viewportHeight: 800,
    experimentalStudio: true,
    retries: {
      openMode: 2,
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
