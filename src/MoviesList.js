import { useState } from 'react'

const movies = [
  {
    name: "Movie 1"
  },
  {
    name: "Movie 2"
  },
  {
    name: "Movie 3"
  },
  {
    name: "Movie 4"
  },
]

export const MoviesList = () => {
  const [filter, setFilter] = useState("")

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
      <ul>
        { movies
          .filter(( movie ) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map(( movie ) => ( <li key={movie.name}>{movie.name}</li> ))
        }
      </ul>
    </div>
  )
}
