import { useState } from 'react'

export const Counter = () => {

  // const [ stateName, setStateName ] = useState(defaultState/initialValue);
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => setCount(count - 1)}
      >-</button>
      <button
        onClick={() => setCount(count + 1)}
      >+</button>
    </div>
  )
  }
