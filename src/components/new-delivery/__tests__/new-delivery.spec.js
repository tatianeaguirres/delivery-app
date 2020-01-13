import React from 'react'
import { render } from '@testing-library/react'
import NewDelivery from '../new-delivery'

describe('<NewDelivery/>', () => {
  it('renders the titles', () => {
    const { getByText } = render(<NewDelivery />)

    expect(getByText('Route')).toBeInTheDocument()
    expect(getByText('Freight Details')).toBeInTheDocument()
    expect(getByText('Date & Time')).toBeInTheDocument()
  })

  it('renders the labels', () => {
    const { getByLabelText } = render(<NewDelivery />)

    expect(getByLabelText('Pickup')).toBeInTheDocument()
    expect(getByLabelText('Volume')).toBeInTheDocument()
    expect(getByLabelText('Delivery Date')).toBeInTheDocument()
  })

  it('renders select', () => {
    const { getByDisplayValue } = render(<NewDelivery />)

    expect(getByDisplayValue('Palet')).toBeInTheDocument()
  })

  it('renders button', () => {
    const { getByRole } = render(<NewDelivery />)

    expect(getByRole('button')).toBeInTheDocument()
  })
})
