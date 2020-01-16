import React, { useState, useEffect } from 'react'
import './my-deliveries.scss'

const MyDeliveries = () => {
  const [deliveries, setDeliveries] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3004/deliveries')
      response
        .json()
        .then(response => setDeliveries(response))
        .catch(error => setHasError(error))
      if (response.status >= 400) setHasError(true)
    }
    fetchData()
  }, [])

  const formatDate = date => {
    const newDate = new Date(date)
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return newDate.toLocaleDateString('nl-NL', options)
  }

  return (
    <div className='my-deliveries'>
      {hasError ? (
        <h2 className='my-deliveries__error-message'>
          There was an error, please try again later.
        </h2>
      ) : (
        <div className='my-deliveries__container'>
          {deliveries.map((delivery, index) => (
            <section className='my-deliveries__section' key={index}>
              <title className='my-deliveries__title'>
                <i className='material-icons'>local_shipping</i>
                Delivery number {delivery.id}
              </title>
              <h3
                className='my-deliveries__subtitle'
                id={`my-deliveries__pickup-${delivery.id}`}
              >
                Pickup
              </h3>
              <div className='my-deliveries__content'>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__countryPickup-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Country:
                  </span>{' '}
                  {delivery.countryPickup}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__addressPickup-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Address:
                  </span>{' '}
                  {delivery.addressPickup}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__pickupDate-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>Date:</span>{' '}
                  {formatDate(delivery.pickupDate)}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__pickupTime-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>Time:</span>{' '}
                  between {delivery.pickupTime.start} and{' '}
                  {delivery.pickupTime.end}
                </p>
              </div>
              <h3
                className='my-deliveries__subtitle'
                id={`my-deliveries__delivery-${delivery.id}`}
              >
                Delivery
              </h3>
              <div className='my-deliveries__content'>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__countryDelivery-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Country:
                  </span>{' '}
                  {delivery.countryDelivery}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__addressDelivery-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Address:
                  </span>{' '}
                  {delivery.addressDelivery}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__deliveryDate-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>Date:</span>{' '}
                  {formatDate(delivery.deliveryDate)}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__deliveryTime-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>Time:</span>{' '}
                  between {delivery.deliveryTime.start} and{' '}
                  {delivery.deliveryTime.end}
                </p>
              </div>
              <h3
                className='my-deliveries__subtitle'
                id={`my-deliveries__freight-${delivery.id}`}
              >
                Freight Details
              </h3>
              <div className='my-deliveries__content'>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__typeGoods-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>Type:</span>{' '}
                  {delivery.typeGoods}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__volume-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Volume:
                  </span>{' '}
                  {delivery.volume}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__volumeQuantity-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Quantity:
                  </span>{' '}
                  {delivery.volumeQuantity}
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__weight-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Weight:
                  </span>{' '}
                  {delivery.weight}kg
                </p>
                <p
                  className='my-deliveries__text'
                  id={`my-deliveries__measures-${delivery.id}`}
                >
                  <span className='my-deliveries__highlighted-text'>
                    Measures:
                  </span>{' '}
                  {delivery.lenght}cm (lenght) x {delivery.width}cm (width) x{' '}
                  {delivery.height}cm (height)
                </p>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyDeliveries
