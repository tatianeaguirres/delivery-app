import React from 'react'
import '../new-delivery/new-delivery.scss'

const FormRoute = props => {
  return (
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
          onChange={props.onCountryPickup}
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
          value={props.addressPickup}
          onChange={props.onAddressPickup}
          required
        />
      </div>
      <div className='form__row'>
        <label className='form__label' htmlFor='addressDelivery'>
          Delivery
        </label>
        <select
          className='form__select'
          name='countryDelivery'
          id='countryDelivery'
          aria-label='click here to select the delivery country'
          onChange={props.onCountryDelivery}
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
          value={props.addressDelivery}
          onChange={props.onAddressDelivery}
          required
        />
      </div>
    </section>
  )
}

export default FormRoute
