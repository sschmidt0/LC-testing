describe('Create project', () => {
  it('WORKFLOW', () => {
    cy.login();
    cy.navigateToPage('Proyectos', 'projects');
    cy.url().should('contain', 'projects');
    cy.findByRole('button', { name: /nuevo proyecto/i }).click();

    cy.url().should('contain', 'projects/0');

    cy.findByRole('textbox', { name: /nombre/i })
      .should('exist')
      .type('Lemoncode');
    cy.findByRole('textbox', { name: /id externo/i })
      .should('exist')
      .type('1234');
    cy.findByRole('textbox', { name: /comentarios/i })
      .should('exist')
      .type('lorem ipsum');

    cy.findByRole('checkbox', { name: /activo/i }).click();
    cy.findByRole('button', { name: /guardar/i }).click();

    // if it worked with real data and not mock data, url should be checked to make sure
    // we are at the project list page again and then check if there is a row which
    // contains "Lemoncode"
  });
});
