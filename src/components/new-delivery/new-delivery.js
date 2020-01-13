import React, { useState } from 'react'
import TimeRangeSlider from 'react-time-range-slider'
import './new-delivery.scss'
import FormRoute from '../form-route/form-route'
import FormFreight from '../form-freight/form-freight'

const NewDelivery = () => {
  const [countryPickup, setCountryPickup] = useState('')
  const [addressPickup, setAddressPickup] = useState('')
  const [countryDelivery, setCountryDelivery] = useState('')
  const [addressDelivery, setAddressDelivery] = useState('')
  const [typeGoods, setTypeGoods] = useState('')
  const [volume, setVolume] = useState('')
  const [volumeQuantity, setVolumeQuantity] = useState('')
  const [lenght, setLenght] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState({
    start: '08:00',
    end: '18:30'
  })
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryTime, setDeliveryTime] = useState({
    start: '08:00',
    end: '18:30'
  })
  const [isSent, setIsSent] = useState(false)

  const handleInputChange = (event, setValue) => {
    setValue(event.target.value)
  }

  const submit = event => {
    event.preventDefault()
    fetch(`http://localhost:3004/deliveries`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        countryPickup,
        addressPickup,
        countryDelivery,
        addressDelivery,
        typeGoods,
        volume,
        volumeQuantity,
        lenght,
        width,
        height,
        weight,
        pickupDate,
        pickupTime,
        deliveryDate,
        deliveryTime
      })
    })
      .then(() => setIsSent(true))
      .catch(() => alert('There was an error, please try again'))
  }

  return (
    <div className='new-delivery'>
      <form className='form' onSubmit={submit}>
        <FormRoute
          onCountryPickup={event => handleInputChange(event, setCountryPickup)}
          countryPickup={countryPickup}
          onAddressPickup={event => handleInputChange(event, setAddressPickup)}
          addressPickup={addressPickup}
          onCountryDelivery={event =>
            handleInputChange(event, setCountryDelivery)
          }
          countryDelivery={countryDelivery}
          onAddressDelivery={event =>
            handleInputChange(event, setAddressDelivery)
          }
          addressDelivery={addressDelivery}
        />
        <FormFreight
          onTypeGoods={event => handleInputChange(event, setTypeGoods)}
          typeGoods={typeGoods}
          onVolume={event => handleInputChange(event, setVolume)}
          volume={volume}
          onVolumeQuantity={event =>
            handleInputChange(event, setVolumeQuantity)
          }
          volumeQuantity={volumeQuantity}
          onLenght={event => handleInputChange(event, setLenght)}
          lenght={lenght}
          onWidth={event => handleInputChange(event, setWidth)}
          width={width}
          onHeight={event => handleInputChange(event, setHeight)}
          height={height}
          onWeight={event => handleInputChange(event, setWeight)}
          weight={weight}
        />
        <section className='form__section' id='date-time'>
          <h2 className='form__title'>Date & Time</h2>
          <div className='form__row'>
            <label className='form__label' htmlFor='pickupDate'>
              Pickup Date
            </label>
            <input
              className='form__date-input'
              type='date'
              id='pickupDate'
              name='pickupDate'
              value={pickupDate}
              onChange={event => setPickupDate(event.target.value)}
              required
            />
            <div className='form__time-input'>
              <div className='form__time-label'>
                <label>{pickupTime.start} </label>
                <label>{pickupTime.end}</label>
              </div>
              <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={'23:30'}
                minValue={'02:00'}
                name={'pickupTime'}
                id={'pickupTime'}
                onChange={event => setPickupTime(event)}
                step={15}
                value={pickupTime}
              />
            </div>
          </div>
          <div className='form__row'>
            <label className='form__label' htmlFor='deliveryDate'>
              Delivery Date
            </label>
            <input
              className='form__date-input'
              type='date'
              id='deliveryDate'
              name='deliveryDate'
              value={deliveryDate}
              onChange={event => setDeliveryDate(event.target.value)}
              required
            />
            <div className='form__time-input'>
              <div className='form__time-label'>
                <label>{deliveryTime.start} </label>
                <label>{deliveryTime.end}</label>
              </div>
              <TimeRangeSlider
                disabled={false}
                format={24}
                maxValue={'23:30'}
                minValue={'02:00'}
                name={'deliveryTime'}
                id={'deliveryTime'}
                onChange={event => setDeliveryTime(event)}
                step={15}
                value={deliveryTime}
              />
            </div>
          </div>
        </section>
        <div className='form__submit'>
          <input
            className='form__submit-button'
            type='submit'
            id='submit'
            value='Submit'
            role='button'
            tabIndex='0'
          />
          {isSent && (
            <p className='form__submit-message'>Thank you for your input!</p>
          )}
        </div>
      </form>
      {/* TODO */}
      <div className='map'></div>
    </div>
  )
}

export default NewDelivery
