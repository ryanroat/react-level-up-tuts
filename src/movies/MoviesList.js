import { useState } from 'react'
import  { Movie } from './Movie'
import { Filter } from '../components/Filter'

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
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        { movies
          .filter(( movie ) => movie.name.toLowerCase().includes(filter.toLowerCase()))
          .map(( movie ) => ( <Movie key={movie.name} movie={movie} /> ))
        }
      </ul>
    </div>
  )
}
