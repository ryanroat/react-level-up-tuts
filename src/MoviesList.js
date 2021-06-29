import React from 'react'

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
  return (
    <div>
      <ul>
        { movies.map(( movie ) => {
          return  (
            <li key={movie.name}>{movie.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
