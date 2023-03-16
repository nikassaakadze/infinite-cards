import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation,Plain } from './header.styled'

function Header() {
  return (
    <Navigation>
      <Link to="/">
        <Plain>Home</Plain>
      </Link>
    </Navigation>
  )
}

export default Header