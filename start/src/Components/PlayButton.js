import React from 'react'
import {useState} from 'react'

function PlayButton({children,onPlay,onPause}) {
  const [val,setVal]=useState(false);
  function handleClick(e){
    e.stopPropagation();
    if(val){
      onPlay()
    }else{
      onPause()
    }
    setVal(!val);
  }
  return (
    <div>
      <button onClick={handleClick} className='but'>{children} {val?"||":">"}</button>
    </div>
  )
}

export default PlayButton
