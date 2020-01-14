import React from 'react'
import { render, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MyDeliveries from '../my-deliveries'

const mockSuccessResponse = [
  {
    id: 1,
    countryPickup: 'netherlands',
    addressPickup: 'address',
    countryDelivery: 'netherlands',
    addressDelivery: 'address',
    typeGoods: 'plastic',
    volume: 'box',
    volumeQuantity: '2',
    lenght: '120',
    width: '180',
    height: '240',
    weight: '20',
    pickupDate: '2019-10-12',
    pickupTime: {
      start: '08:00',
      end: '18:00'
    },
    deliveryDate: '2019-10-19',
    deliveryTime: {
      start: '08:00',
      end: '18:30'
    }
  }
]

const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
})

describe('<MyDeliveries/>', () => {
  it('fetches data from server when server returns a successful response', async () => {
    fetch = jest.fn(() => mockFetchPromise)

    const { findByText, findByTitle } = render(<MyDeliveries />)

    const title = findByTitle('Delivery number 1')
    const subtitle = findByText('Pickup')
    const formatedWeight = findByText('WEIGHT: 20kg')
    const formatedDate = findByText('DATE: 12-10-2018')

    await wait(() => expect(title).toBeTruthy())
    await wait(() => expect(subtitle).toBeTruthy())
    await wait(() => expect(formatedWeight).toBeTruthy())
    await wait(() => expect(formatedDate).toBeTruthy())
  })
})
