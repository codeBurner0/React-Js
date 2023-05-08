// functional class components

import React from 'react'

// import '../App.css'

function App({name,Sec}){
  return (
    <>
      {/* <h1 id='name'> Hello {name}. My section is {Sec}</h1> */}
      <h1 style={{color:"red",backgroundColor:"aqua"}}> Hello {name}. My section is {Sec}</h1>
    </>
  )
}

export {App}


