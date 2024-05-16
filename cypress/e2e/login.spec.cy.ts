describe('Login', () => {
  it('should open the login page', () => {
    cy.visit('http://localhost:8080');
    cy.findByRole('button', { name: /login/i }).should('be.visible');
    cy.findByRole('textbox', { name: /usuario/i }).should('be.visible');
    cy.findByLabelText(/contraseña/i).should('be.visible');
  });
});
