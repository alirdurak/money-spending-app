import React from 'react'

const active = "border  rounded-md px-2 bg-green-400" 
const disabled = "border  rounded-md px-2  disabled:opacity-50 " 

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
