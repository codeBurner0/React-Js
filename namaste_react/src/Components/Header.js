import React from 'react'
import logo from '../Assets/FoodLogo.svg'
import './Header.css'
function Header() {
  return (
    <>
    <section className='sec'>
      <img src={logo} alt="" className='image' />
      <ul className='list'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </section>
    </>
  )
}

export default Header
