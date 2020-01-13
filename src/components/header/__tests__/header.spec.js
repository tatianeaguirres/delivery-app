import React from 'react'
import { render } from '@testing-library/react'
import Header from '../header'

describe('<Header/>', () => {
  it('renders Header', () => {
    const { getByText } = render(<Header />)
    expect(getByText('John')).toBeInTheDocument()
  })
})
