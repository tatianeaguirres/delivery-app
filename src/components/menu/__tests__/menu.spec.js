import React from 'react'
import { render } from '@testing-library/react'
import Menu from '../menu'

describe('<Menu/>', () => {
  it('renders menu', () => {
    const { getByText } = render(<Menu />)
    expect(getByText('New Delivery')).toBeInTheDocument()
    expect(getByText('My Deliveries')).toBeInTheDocument()
    expect(getByText('History')).toBeInTheDocument()
  })
})
