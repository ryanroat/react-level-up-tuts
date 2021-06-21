import { useState } from 'react'

export const Accordion = () => {

  const [ isToggled, setIsToggled ] = useState(false);
  return (
    <div>
      {/* { isToggled && <h3>Show Me</h3> }  //option 1 */}
      { isToggled ? <h3>Show Me</h3> : null }
      <button
        onClick={ () => setIsToggled(!isToggled) }
      >Toggle</button>
    </div>
  )
}
