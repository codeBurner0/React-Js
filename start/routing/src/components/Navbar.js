import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  const NavLinkCss=({isActive})=>{
    return{
      fontSize:isActive?'25px':'20px',
      fontWeight:isActive?'bold':''
    }
  }
  return (
    <nav>
      <NavLink to='/' style={NavLinkCss}>Home</NavLink>
      <NavLink to='/About' style={NavLinkCss}>About</NavLink>
      <NavLink to='/Services' style={NavLinkCss}>Services</NavLink>
      <NavLink to='/Contact' style={NavLinkCss}>Contact</NavLink>
      <NavLink to='/Product' style={NavLinkCss}>Product</NavLink>
      <NavLink to='/User' style={NavLinkCss}>Users</NavLink>
    </nav>
  )
}

export default Navbar;
