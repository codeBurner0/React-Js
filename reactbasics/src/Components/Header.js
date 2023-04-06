import React from 'react'
import PropType from 'prop-types'
function Header(props) {
  return (
    <div>
      <h1 className='mx-5 font-semibold font-serif'>This is me</h1>
    </div>
  )
}

function Func() {
  return (
    <div>
      <h1>Second function</h1>
    </div>
  )
}
Header.propTypes={name:PropType.string.isRequired,age:PropType.number}
export {Header,Func}