import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <nav>
        <ul className='parent'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Location</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
