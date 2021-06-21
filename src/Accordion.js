import { useState } from 'react'

export const Accordion = () => {

  const [ isToggled, setIsToggled ] = useState(false);

  // const showMe = isToggled ? (<h3>Show Me</h3>) : null // option 1a

  return (
    <div>
      {/* {showMe} // option 1b */}
      {/* { isToggled ? <h3>Show Me</h3> : null } // option 2 */}
      { isToggled && <h3>Show Me</h3> }  {/* option 3 */}
      <button
        onClick={ () => setIsToggled(!isToggled) }
      >Toggle</button>
    </div>
  )
}
