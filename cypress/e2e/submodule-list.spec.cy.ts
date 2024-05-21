describe('Submodule-list', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should open submodule-list', () => {
    cy.url().should('contain', 'submodule-list');
  });

  it('should contain two links: "proyectos" and "empleados"', () => {
    cy.findByRole('group', { name: /group-links/i })
      .findAllByRole('link')
      .should('have.length', 2);
    cy.findByRole('link', { name: /proyectos/i }).should('be.visible');
    cy.findByRole('link', { name: /empleados/i }).should('be.visible');
  });

  it('should navigate to "/projects" when "Proyectos" is clicked', () => {
    cy.findByRole('link', { name: /proyectos/i }).click();
    cy.url().should('contain', 'projects');
  });

  it('should navigate to "/employees" when "Empleados" is clicked', () => {
    cy.findByRole('link', { name: /empleados/i }).click();
    cy.url().should('contain', 'employees');
  });
});
