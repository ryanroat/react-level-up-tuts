import React from 'react'

export const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>
        Filter Movies
        <input 
          value={filter}
          onChange={ (event) => {
          setFilter(event.target.value)
        }} />
      </label>
    </div>
  )
}
