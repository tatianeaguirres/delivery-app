describe('Visual Regression Tests', () => {
  it('Should match previous screenshot "New Delivery Page"', () => {
    cy.viewport(1440, 900)
    cy.visit('/')
    cy.matchImageSnapshot('new-delivery')
  })

  it('Should match previous screenshot "My Deliveries Page"', () => {
    cy.viewport(1440, 900)
    cy.visit('/my-deliveries')
    cy.matchImageSnapshot('my-deliveries')
  })
})
