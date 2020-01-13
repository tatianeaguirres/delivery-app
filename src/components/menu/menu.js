import React from 'react'
import './menu.scss'

const Menu = () => {
  return (
    <nav>
      <div className='menu'>
        <div className='menu__logo'>
          <a className='menu__logo-link' href='/'>
            Delivery App
          </a>
        </div>
        <ul className='menu__list'>
          <li className='menu__item--active'>
            <a className='menu__item-link' href='/'>
              <i className='material-icons'>add</i> New Delivery
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__item-link' href='/'>
              <i className='material-icons'>timeline</i> My Deliveries
            </a>
          </li>
          <li className='menu__item'>
            <a className='menu__item-link' href='/'>
              <i className='material-icons'>restore</i> History
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
