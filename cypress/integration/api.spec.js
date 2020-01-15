describe('API Tests', () => {
  const URL = Cypress.env('api_server') + '/deliveries'

  it('should get environment variables', () => {
    expect(Cypress.env()).to.have.property('host', 'tatiane.dev.local')
    expect(Cypress.env()).to.have.property(
      'api_server',
      'http://localhost:3004'
    )
  })

  it('should return 200', () => {
    cy.request(URL)
      .its('status')
      .should('equal', 200)
  })

  it('should have initial data loaded', () => {
    cy.fixture('get-all').then(getAllData => {
      cy.request(URL)
        .its('body')
        .should('deep.eq', getAllData)
    })
  })

  it('should get a delivery by id', () => {
    cy.fixture('get-one').then(getOneData => {
      cy.request(URL + '/1')
        .its('body')
        .should('deep.eq', getOneData)
    })
  })

  it('should successfully post a new delivery', () => {
    let id
    cy.fixture('post-one').then(postData => {
      cy.request('POST', URL, postData)
        .then(response => {
          id = response.body.id
          expect(response.status).to.equal(201)
        })
        .then(() => {
          cy.request('DELETE', `${URL}/${id}`)
        })
    })
  })
})
