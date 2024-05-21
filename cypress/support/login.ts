export const login = () => {
  cy.visit('/');

  const user = 'admin';
  const password = 'test';

  cy.findByRole('textbox', { name: /usuario/i }).type(user);
  cy.findByLabelText(/contraseña/i).type(password);
  cy.findByRole('button', { name: /login/i }).click();

  // since login is fake, we redirect and do not wait for BE process to have finished
  cy.visit('/#/submodule-list');
};
