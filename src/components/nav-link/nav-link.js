import React from 'react'
import { Link } from '@reach/router'
import '../../styles/_colors.scss'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      let className = isCurrent ? 'menu__item-link--active' : 'menu__item-link'
      return (className = { className })
    }}
  />
)

export default NavLink
