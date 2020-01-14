import React from 'react'
import TimeRangeSlider from 'react-time-range-slider'
import '../new-delivery/new-delivery.scss'
import './form-date.scss'

const FormDate = props => {
  return (
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
          value={props.pickupDate}
          onChange={props.onPickupDate}
          required
        />
        <div className='form__time-input'>
          <div className='form__time-label'>
            <label>{props.pickupTime.start} </label>
            <label>{props.pickupTime.end}</label>
          </div>
          <TimeRangeSlider
            disabled={false}
            format={24}
            maxValue={'23:30'}
            minValue={'02:00'}
            name={'pickupTime'}
            id={'pickupTime'}
            onChange={props.onPickupTime}
            step={15}
            value={props.pickupTime}
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
          value={props.deliveryDate}
          onChange={props.onDeliveryDate}
          required
        />
        <div className='form__time-input'>
          <div className='form__time-label'>
            <label>{props.deliveryTime.start} </label>
            <label>{props.deliveryTime.end}</label>
          </div>
          <TimeRangeSlider
            disabled={false}
            format={24}
            maxValue={'23:30'}
            minValue={'02:00'}
            name={'deliveryTime'}
            id={'deliveryTime'}
            onChange={props.onDeliveryTime}
            step={15}
            value={props.deliveryTime}
          />
        </div>
      </div>
    </section>
  )
}

export default FormDate
