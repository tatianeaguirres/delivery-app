import React from 'react'
import { render } from '@testing-library/react'
import FormDate from '../form-date'

const handleInputChangeMock = jest.fn()

const mockProps = {
  pickupDate: '2018-10-12',
  pickupTime: {
    start: '08:00',
    end: '18:30'
  },
  deliveryDate: '2018-10-10',
  deliveryTime: {
    start: '08:00',
    end: '18:30'
  },
  onPickupDate: event => handleInputChangeMock(event, setPickupDate),
  onPickupTime: event => handleInputChangeMock(event, setPickupTime),
  onDeliveryDate: event => handleInputChangeMock(event, setDeliveryDate),
  onDeliveryTime: event => handleInputChangeMock(event, setDeliveryTime)
}

describe('<FormDate/>', () => {
  it('renders the title', () => {
    const { getByText } = render(<FormDate {...mockProps} />)

    expect(getByText('Date & Time')).toBeInTheDocument()
  })

  it('renders labels', () => {
    const { getByLabelText } = render(<FormDate {...mockProps} />)

    expect(getByLabelText('Pickup Date')).toBeInTheDocument()
    expect(getByLabelText('Delivery Date')).toBeInTheDocument()
  })

  it('renders inputs', () => {
    const { getByDisplayValue } = render(<FormDate {...mockProps} />)

    expect(getByDisplayValue('2018-10-12')).toBeInTheDocument()
    expect(getByDisplayValue('2018-10-10')).toBeInTheDocument()
  })
})
