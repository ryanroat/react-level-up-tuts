import { useState } from 'react'

export const Input = () => {

  const [ inputValue, setInputValue ] = useState("");

  return (
    <div>
      {inputValue && <h3>{inputValue}</h3>}
      <input 
        value={inputValue}
        onChange={ (event) => {
        setInputValue(event.target.value)
      }} />
    </div>
  )
}
