import React from 'react'
import '../new-delivery/new-delivery.scss'
import Script from 'react-load-script'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/assets/index.css'

const FormRoute = props => {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
  const URL_GOOGLE_API = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`

  return (
    <section className='form__section' id='route'>
      <h2 className='form__title'>Route</h2>
      <div className='form__row'>
        <label className='form__label' htmlFor='countryPickup'>
          Pickup
        </label>
        <select
          className='form__select'
          name='countryPickup'
          id='countryPickup'
          aria-label='click here to select the pickup country'
          onChange={props.onCountryPickup}
        >
          <option className='form__option' value='Netherlands'>
            Netherlands
          </option>
          <option className='form__option' value='Belgium'>
            Belgium
          </option>
          <option className='form__option' value='Germany'>
            Germany
          </option>
        </select>
        <GooglePlacesAutocomplete
          initialValue={props.addressPickup}
          onSelect={props.onAddressPickup}
          inputClassName='form__input'
          idPrefix='addressPickup'
          placeholder='Address'
          required
          autocompletionRequest={{
            componentRestrictions: {
              country: ['be', 'de', 'nl']
            }
          }}
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
          onChange={props.onCountryDelivery}
        >
          <option className='form__option' value='Netherlands'>
            Netherlands
          </option>
          <option className='form__option' value='Belgium'>
            Belgium
          </option>
          <option className='form__option' value='Germany'>
            Germany
          </option>
        </select>
        <GooglePlacesAutocomplete
          initialValue={props.addressDelivery}
          onSelect={props.onAddressDelivery}
          inputClassName='form__input'
          idPrefix='addressDelivery'
          placeholder='Address'
          required
          autocompletionRequest={{
            componentRestrictions: {
              country: ['be', 'de', 'nl']
            }
          }}
        />
      </div>
      <Script url={URL_GOOGLE_API} />
    </section>
  )
}

export default FormRoute
