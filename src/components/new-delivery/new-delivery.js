import React, { useState } from 'react'
import TimeRangeSlider from 'react-time-range-slider'
import './new-delivery.scss'

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
  }

  return (
    <div className='new-delivery'>
      <form className='form' onSubmit={submit}>
        <section className='form__section' id='route'>
          <h2 className='form__title'>Route</h2>
          <div className='form__row'>
            <label className='form__label' htmlFor='addressPickup'>
              Pickup
            </label>
            <select
              className='form__select'
              name='countryPickup'
              id='countryPickup'
              aria-label='click here to select the pickup country'
              onChange={event => setCountryPickup(event.target.value)}
            >
              <option className='form__option' value='netherlands'>
                Netherlands
              </option>
              <option className='form__option' value='belgium'>
                Belgium
              </option>
              <option className='form__option' value='germany'>
                Germany
              </option>
            </select>
            <input
              className='form__input'
              type='text'
              placeholder='Address'
              id='addressPickup'
              name='addressPickup'
              value={addressPickup}
              onChange={event => setAddressPickup(event.target.value)}
              required
            />
          </div>
          <div className='form__row'>
            <label className='form__label' htmlFor='countryDelivery'>
              Delivery
            </label>
            <select
              className='form__select'
              name='countryDelivery'
              id='countryDelivery'
              aria-label='click here to select the delivery country'
              onChange={event => setCountryDelivery(event.target.value)}
            >
              <option className='form__option' value='netherlands'>
                Netherlands
              </option>
              <option className='form__option' value='belgium'>
                Belgium
              </option>
              <option className='form__option' value='germany'>
                Germany
              </option>
            </select>
            <input
              className='form__input'
              type='text'
              placeholder='Address'
              id='addressDelivery'
              name='addressDelivery'
              value={addressDelivery}
              onChange={event => setAddressDelivery(event.target.value)}
              required
            />
          </div>
        </section>
        <section className='form__section' id='freight-details'>
          <h2 className='form__title'>Freight Details</h2>
          <label className='form__label-top' htmlFor='typeGoods'>
            Type of goods
          </label>
          <div className='form__radio-buttons'>
            <div>
              <input
                type='radio'
                className='form__radio-input'
                name='typeGoods'
                id='paper'
                value='paper'
                onChange={event => setTypeGoods(event.target.value)}
              />
              <label htmlFor='paper' className='form__radio-label'>
                Paper
              </label>
            </div>
            <div>
              <input
                type='radio'
                className='form__radio-input'
                name='typeGoods'
                id='plastic'
                value='plastic'
                onChange={event => setTypeGoods(event.target.value)}
              />
              <label htmlFor='plastic' className='form__radio-label'>
                Plastic
              </label>
            </div>
            <div>
              <input
                type='radio'
                className='form__radio-input'
                name='typeGoods'
                id='textil'
                value='textil'
                onChange={event => setTypeGoods(event.target.value)}
              />
              <label htmlFor='textil' className='form__radio-label'>
                Textil
              </label>
            </div>
            <div>
              <input
                type='radio'
                className='form__radio-input'
                name='typeGoods'
                id='other'
                value='other'
                onChange={event => setTypeGoods(event.target.value)}
              />
              <label htmlFor='other' className='form__radio-label'>
                Other
              </label>
            </div>
          </div>
          <label className='form__label-top' htmlFor='volume'>
            Volume
          </label>
          <div className='form__row'>
            <div className='form__volume-selects'>
              <select
                className='form__small-select'
                id='volume'
                name='volume'
                onChange={event => setVolume(event.target.value)}
              >
                <option className='form__option' value='palet'>
                  Palet
                </option>
                <option className='form__option' value='box'>
                  Box
                </option>
              </select>
              <select
                className='form__small-select'
                id='volumeQuantity'
                name='volumeQuantity'
                onChange={event => setVolumeQuantity(event.target.value)}
              >
                <option className='form__option' value='1'>
                  1
                </option>
                <option className='form__option' value='2'>
                  2
                </option>
              </select>
            </div>
            <div className='form__volume-measures'>
              <input
                className='form__small-input'
                type='number'
                placeholder='120'
                id='lenght'
                name='lenght'
                value={lenght}
                onChange={event => setLenght(event.target.value)}
                required
              />
              <label htmlFor='lenght'>Lenght (cm)</label>
            </div>
            <span>x</span>
            <div className='form__volume-measures'>
              <input
                className='form__small-input'
                type='number'
                placeholder='180'
                id='width'
                name='width'
                value={width}
                onChange={event => setWidth(event.target.value)}
                required
              />
              <label htmlFor='width'>Width (cm)</label>
            </div>
            <span>x</span>
            <div className='form__volume-measures'>
              <input
                className='form__small-input'
                type='number'
                placeholder='240'
                id='height'
                name='height'
                value={height}
                onChange={event => setHeight(event.target.value)}
                required
              />
              <label htmlFor='height'>Height (cm)</label>
            </div>
          </div>
          <div className='form__row'>
            <label className='form__label' htmlFor='weight'>
              Weight
            </label>
            <input
              className='form__small-input'
              type='number'
              id='weight'
              name='weight'
              value={weight}
              onChange={event => setWeight(event.target.value)}
              required
            />
            <span>kg</span>
          </div>
        </section>
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
            tabindex='0'
          />
        </div>
      </form>
      {/* TODO */}
      <div className='map'></div>
    </div>
  )
}

export default NewDelivery
