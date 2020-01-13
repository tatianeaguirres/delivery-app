import React from 'react'
import { render } from '@testing-library/react'
import FormRoute from '../form-route'

const handleInputChangeMock = jest.fn()

const mockProps = {
  addressDelivery: 'addressDelivery',
  addressPickup: 'addressPickup',
  countryDelivery: 'countryDelivery',
  countryPickup: 'countryPickup',
  onAddressDelivery: event => handleInputChangeMock(event, setAddressDelivery),
  onAddressPickup: event => handleInputChangeMock(event, setAddressPickup),
  onCountryDelivery: event => handleInputChangeMock(event, setCountryDelivery),
  onCountryPickup: event => handleInputChangeMock(event, setCountryPickup)
}

describe('<FormRoute/>', () => {
  it('renders the title', () => {
    const { getByText } = render(<FormRoute {...mockProps} />)
    expect(getByText('Route')).toBeInTheDocument()
  })

  it('renders labels', () => {
    const { getByLabelText } = render(<FormRoute {...mockProps} />)
    expect(getByLabelText('Pickup')).toBeInTheDocument()
    expect(getByLabelText('Delivery')).toBeInTheDocument()
  })

  it('renders inputs', () => {
    const { getByDisplayValue } = render(<FormRoute {...mockProps} />)
    expect(getByDisplayValue('addressPickup')).toBeInTheDocument()
    expect(getByDisplayValue('addressDelivery')).toBeInTheDocument()
  })
})
