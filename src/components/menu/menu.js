import React from 'react'
import { Link } from '@reach/router'
import NavLink from '../nav-link/nav-link'
import './menu.scss'

const Menu = () => {
  return (
    <nav>
      <div className='menu'>
        <div className='menu__logo'>
          <Link className='menu__logo-link' to='/'>
            Delivery App
          </Link>
        </div>
        <ul className='menu__list'>
          <li className='menu__item'>
            <NavLink className='menu__item-link' to='/'>
              <i className='material-icons'>add</i> New Delivery
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='menu__item-link' to='/my-deliveries'>
              <i className='material-icons'>timeline</i> My Deliveries
            </NavLink>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to='/'>
              <i className='material-icons'>restore</i> History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
