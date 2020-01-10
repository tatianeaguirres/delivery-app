import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders title', () => {
  const { getByText } = render(<App />)
  expect(getByText('Delivery App')).toBeInTheDocument()
})
