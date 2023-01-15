import React from 'react'

const active = "border border-black rounded-md px-2" 
const disabled = "border border-black rounded-md px-2 disabled:opacity-50 " 

function Button(props) {
  return (
    <div>
      <button disabled={props.disabled} onClick={props.onClick}  
      className={props.disabled !== true? active: disabled }
      >{props.text}</button>
    </div>
  )
}

export default Button
