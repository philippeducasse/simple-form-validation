import React, { useState } from 'react'
import "./formInput.css" 

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true)
  }
  const {label, onChange, errorMessage, id, ...inputProps} = props;
  return (
    <div className="formInput">
        <label>{label}</label>
        <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur = {handleFocus} 
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused= {focused.toString()}/>
        <span>{errorMessage}</span>
        
    </div>
  )
}
