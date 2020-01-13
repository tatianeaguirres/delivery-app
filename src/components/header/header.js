import React from 'react'
import './header.scss'

const username = 'John'

const Header = () => {
  return (
    <header>
      <div className='header'>
        <p className='header__username'>{username}</p>
        <i className='material-icons'>account_circle</i>
      </div>
    </header>
  )
}

export default Header
