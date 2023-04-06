import React from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Home'
function About() {
  const navigate=useNavigate();
  const navToAbout=()=>{
    navigate('/Home');
  }
  return (
    <div>
      <h1>Welcome! This is About page.</h1>
      <Routes>
        <Route  path='/Home' element={<Home/>} />
      </Routes>
      
      <button onClick={navToAbout}>Go Back</button>
    </div>
  )
}

export default About
