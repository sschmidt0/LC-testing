import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.cy.{js,jsx,ts,tsx}',
  },
});
