import '@testing-library/cypress/add-commands';
import { login } from './login';
import { navigateToPage } from './navigate-to-page';

Cypress.Commands.add('login', login);
Cypress.Commands.add('navigateToPage', navigateToPage);

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      navigateToPage(link: string, page: string): Chainable<void>;
    }
  }
}
