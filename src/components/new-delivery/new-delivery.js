import React, { useState } from 'react'
import './new-delivery.scss'
import FormRoute from '../form-route/form-route'
import FormFreight from '../form-freight/form-freight'
import FormDate from '../form-date/form-date'

const NewDelivery = () => {
  const [countryPickup, setCountryPickup] = useState('netherlands')
  const [addressPickup, setAddressPickup] = useState('')
  const [countryDelivery, setCountryDelivery] = useState('netherlands')
  const [addressDelivery, setAddressDelivery] = useState('')
  const [typeGoods, setTypeGoods] = useState('')
  const [volume, setVolume] = useState('palet')
  const [volumeQuantity, setVolumeQuantity] = useState('1')
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

  const handleTimeSlider = (event, setValue) => {
    setValue(event)
  }

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
        <FormDate
          onPickupDate={event => handleInputChange(event, setPickupDate)}
          pickupDate={pickupDate}
          onPickupTime={event => handleTimeSlider(event, setPickupTime)}
          pickupTime={pickupTime}
          onDeliveryDate={event => handleInputChange(event, setDeliveryDate)}
          deliveryDate={deliveryDate}
          onDeliveryTime={event => handleTimeSlider(event, setDeliveryTime)}
          deliveryTime={deliveryTime}
        />
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
