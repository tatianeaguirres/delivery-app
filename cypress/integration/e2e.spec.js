describe('e2e Tests', () => {
  const URL = Cypress.env('api_server') + '/deliveries'

  beforeEach(() => {
    cy.visit('/')
  })

  it('should full the form and submit successfully', () => {
    cy.get('#countryPickup').select('Netherlands')
    cy.get('#addressPickup-google-places-autocomplete-input').type(
      'Westsingel 50, 3811 BC Amersfoort'
    )
    cy.get('#countryDelivery').select('Germany')
    cy.get('#addressDelivery-google-places-autocomplete-input').type(
      'Sternbuschweg 295, 47057 Duisburg'
    )
    cy.get('.form__radio-buttons div [type="radio"]').should(
      'have.value',
      'paper'
    )
    cy.get('.form__radio-buttons .form__radio-label')
      .contains('Paper')
      .click()
      .should('have.css', 'background-color', 'rgb(39, 97, 139)')
    cy.get('#volume').select('Box')
    cy.get('#volumeQuantity').select('3')
    cy.get('#lenght').type('230')
    cy.get('#width').type('190')
    cy.get('#height').type('250')
    cy.get('#weight').type('10')
    cy.get('#pickupDate').type('2020-05-01')
    cy.get('.form__time-input .form__time-label label')
      .first()
      .should('contain', '8:00')
    cy.get('#deliveryDate').type('2020-05-02')
    cy.get('.form__submit')
      .find('[type="submit"]')
      .click()
      .next()
      .should('contain', 'Thank you for your input!')
    cy.request('DELETE', `${URL}/3`)
  })

  it('should show delivery requests on my deliveries page', () => {
    cy.get('#menu-item-my-deliveries')
      .click()
      .should('have.class', 'menu__item-link--active')
    cy.get('.my-deliveries__title').should('contain', 'Delivery number 1')
    cy.get('#my-deliveries__pickup-1').should('contain', 'Pickup')
    cy.get('#my-deliveries__countryPickup-1').should(
      'contain',
      'Country: Netherlands'
    )
    cy.get('#my-deliveries__addressPickup-1').should(
      'contain',
      'Address: Overblaak 70, 3011 MH Rotterdam'
    )
    cy.get('#my-deliveries__pickupDate-1').should('contain', 'Date: 01-02-2020')
    cy.get('#my-deliveries__pickupTime-1').should(
      'contain',
      'Time: between 8:00 and 12:00'
    )
    cy.get('#my-deliveries__delivery-1').should('contain', 'Delivery')
    cy.get('#my-deliveries__countryDelivery-1').should(
      'contain',
      'Country: Netherlands'
    )
    cy.get('#my-deliveries__addressDelivery-1').should(
      'contain',
      'Address: Westermarkt 20, 1016 GV Amsterdam'
    )
    cy.get('#my-deliveries__deliveryDate-1').should(
      'contain',
      'Date: 02-02-2020'
    )
    cy.get('#my-deliveries__deliveryTime-1').should(
      'contain',
      'Time: between 8:30 and 18:30'
    )
    cy.get('#my-deliveries__freight-1').should('contain', 'Freight Details')
    cy.get('#my-deliveries__typeGoods-1').should('contain', 'Type: plastic')
    cy.get('#my-deliveries__volume-1').should('contain', 'Volume: box')
    cy.get('#my-deliveries__volumeQuantity-1').should('contain', 'Quantity: 2')
    cy.get('#my-deliveries__weight-1').should('contain', 'Weight: 10kg')
    cy.get('#my-deliveries__measures-1').should(
      'contain',
      'Measures: 200cm (lenght) x 260cm (width) x 400cm (height)'
    )
  })
})
