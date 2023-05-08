import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
function User() {
  return (
    <div>
        <center>
        <h1>Welcome! to Users Page..</h1>
        <nav1>
      <NavLink to='/User/1' >User-1</NavLink>
      <NavLink to='/User/2' >User-2</NavLink>
      </nav1>
      </center>
      <Outlet/>
    </div>
  )
}
export default User
