import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}  className='border border-black rounded-md px-2'>{props.text}</button>
    </div>
  )
}

export default Button
