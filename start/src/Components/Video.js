import React from 'react'
import './Video.css'
function Video({title="Mondo DB",src,views,time,channel,logo,verified,children}) {
  return (
    <div>
      <div className='parent'>
        <img className='img' src={src} alt='' />
        <div className='detail'>
            <div className='lt'><img src={logo} className="logo" alt="" />
            <span className='title'>{title}</span>
            </div>
            <span className='channel'>{channel}{(verified) && '✅'}</span><span className='time'>{time}</span><br />
            <div className='view'>views. {views}</div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
// Header.propstype={name.PropTypes.String.isRequired}
// Header.defaultProps={name="Ankit"}
export default Video
