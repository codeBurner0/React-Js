import React, { useState } from 'react'
import "./count.css"
const Count=()=> {
    const [counter,setCounter]=useState(0);
    function Incrementor(){
        setCounter(counter+1);
    }
    function Decrementor(){
        setCounter(counter-1);
    }
  return (
    <div className='div'>
      <h1>{counter}</h1>
      <button onClick={Incrementor}>Increase</button>&nbsp;
      <button onClick={Decrementor}>Decrease</button>
    </div>
  )
}

export default Count
