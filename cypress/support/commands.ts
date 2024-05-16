import '@testing-library/cypress/add-commands';
import { login } from './login';

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}
