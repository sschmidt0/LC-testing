export const navigateToPage = (link: string, page: string) => {
  // no need to intercept API calls since mock data is used
  const regEx = new RegExp(`${link}`);

  cy.findByRole('link', { name: regEx }).click();
  cy.url().should('contain', page);
};
