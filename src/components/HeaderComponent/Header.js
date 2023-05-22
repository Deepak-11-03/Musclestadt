import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src="./Veganhof-logo.png" alt="logo" height="50px" />
      <nav>
        <ul>
            <li><Link to='/' > Home</Link></li>
            <li><Link to='/products'> Product</Link></li>
            <li><Link to='/about'> About</Link></li>
            <li><Link to='/contact'> Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
