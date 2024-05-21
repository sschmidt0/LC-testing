describe('Projects', () => {
  beforeEach(() => {
    cy.login();
    cy.navigateToPage('Proyectos', 'projects');
  });

  it('should open projects page', () => {
    cy.url().should('contain', 'projects');
  });

  it('should show six table rows', () => {
    const tableRows = 6; //includes table header row
    cy.findAllByRole('row').should('have.length', tableRows);
  });

  it('should show the next table rows when page index is changed', () => {
    const tableRowsIndexOne = 6; //includes table header row
    const tableRowsIndexTwo = 4; //includes table header row

    cy.findAllByRole('row').should('have.length', tableRowsIndexOne);
    cy.findByRole('button', { name: /page 1/i }).should(
      'have.attr',
      'aria-current'
    );
    cy.findByRole('button', { name: /page 2/i }).should(
      'not.have.attr',
      'aria-current'
    );

    cy.findByRole('button', { name: /page 2/i }).click();

    cy.findAllByRole('row').should('have.length', tableRowsIndexTwo);
    cy.findByRole('button', { name: /page 1/i }).should(
      'not.have.attr',
      'aria-current'
    );
    cy.findByRole('button', { name: /page 2/i }).should(
      'have.attr',
      'aria-current'
    );
  });

  it('should open current project when edit is clicked', () => {
    cy.findAllByRole('button', { name: /edit/i }).first().click();

    cy.url().should('contain', 'projects/1');
  });

  it('should delete a row when delete project icon is clicked', () => {
    cy.findAllByRole('row').eq(1).contains('Bankia').should('be.visible');

    cy.findAllByRole('button', { name: /delete/i })
      .first()
      .click();

    cy.findByRole('dialog')
      .findByRole('button', { name: /aceptar/i })
      .click();
    cy.findAllByRole('row').eq(1).should('not.contain', 'Bankia');
  });
});
