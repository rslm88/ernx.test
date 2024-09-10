describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.euronics.ee')
    cy.get ('#cookie-accept-all-button').click().should('not.exist')
  })
})