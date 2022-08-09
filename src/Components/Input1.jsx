import React from 'react'

const Input = (props) => {
  const {name, label} = props
  return (
    
        <label htmlFor={name}> {label}
            <input
              onChange={props.OnChange}
             type="number" id={name} name={name} required />
        </label>
    
  )
}

export default Input