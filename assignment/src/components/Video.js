import React from 'react'

function Video({id,title,src,time,channel,children}) {
  return (
    <div>
      <div>
        <img src={src} alt="" />
        <h1>{title}</h1>
        <h4>{channel}</h4>
        {children}
      </div>
    </div>
  )
}

export default Video
