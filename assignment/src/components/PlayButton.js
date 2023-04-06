import React from 'react'

function PlayButton({onPlay,onPause,children}) {
    let val=false;
    function handleClick(){
        if(val){
            onPlay();
        }else{
            onPause();
        }
        val=!val
    }
  return (
    <div>
      <button onClick={handleClick}> {children} {val?'>':'||'}</button>
      <h1>hello</h1>
    </div>
  )
}

export default PlayButton
