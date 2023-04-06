import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
function Product() {
  return (
    <div>
      <h1>Welcome! This is Product Section</h1>
      <center>
      <nav1>
      <NavLink to='Shirt' >Shirt</NavLink>
      <NavLink to='Jeans' >Jeans</NavLink>
      </nav1>
      </center>
      <Outlet/>
    </div>
  )
}

export default Product
