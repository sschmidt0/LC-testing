describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the login page', () => {
    cy.findByRole('button', { name: /login/i }).should('be.visible');
    cy.findByRole('textbox', { name: /usuario/i }).should('be.visible');
    cy.findByLabelText(/contraseña/i).should('be.visible');
  });

  it('should show an error message if user and/or password are wrong', () => {
    const user = 'admin';
    const password = 'wrong-password';

    cy.findByRole('textbox', { name: /usuario/i }).type(user);
    cy.findByLabelText(/contraseña/i).type(password);
    cy.findByRole('button', { name: /login/i }).click();

    cy.findByRole('alert').should('be.visible');
    cy.findByRole('alert').should(
      'have.text',
      'Usuario y/o password no válidos'
    );
  });

  it('should do login and redirect to url "/#/submodule-list"', () => {
    const user = 'admin';
    const password = 'test';

    cy.findByRole('textbox', { name: /usuario/i }).type(user);
    cy.findByLabelText(/contraseña/i).type(password);
    cy.findByRole('button', { name: /login/i }).click();

    cy.url().should('include', '/#/submodule-list');
  });
});
