describe('program preview', () => {
  it('user can preview programs, filter and sort them', () => {
    cy.visit('http://localhost:3000/')
    cy.findAllByTestId('programCard').should('be.visible')
    cy.findByText(/no abras la puerta/i).should('be.visible')
    cy.findByTestId('seriesCheckbox').click()
    cy.findByText(/no abras la puerta/i).should('not.exist')
    cy.findByText(/the pianist/i).should('be.visible')
    cy.findByRole('button', { name: /sort by imdb/i }).click()
    cy.findAllByTestId('programCard')
      .first()
      .contains(/the pianist/i)
  })
})
