import React from 'react'
import '../new-delivery/new-delivery.scss'

const FormFreight = props => {
  return (
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
            onChange={props.onTypeGoods}
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
            onChange={props.onTypeGoods}
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
            onChange={props.onTypeGoods}
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
            onChange={props.onTypeGoods}
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
            onChange={props.onVolume}
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
            onChange={props.onVolumeQuantity}
          >
            <option className='form__option' value='1'>
              1
            </option>
            <option className='form__option' value='2'>
              2
            </option>
            <option className='form__option' value='3'>
              3
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
            value={props.lenght}
            onChange={props.onLenght}
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
            value={props.width}
            onChange={props.onWidth}
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
            value={props.height}
            onChange={props.onHeight}
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
          value={props.weight}
          onChange={props.onWeight}
          required
        />
        <span>kg</span>
      </div>
    </section>
  )
}

export default FormFreight
