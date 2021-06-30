import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL=`https://api.themoviedb.org/3/movie/`
const API_KEY=`?api_key=f6298fa1c78ec36ac973f2e15add056f&language=en-US`

export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const getMovie = async () => {
  try {
    const API_URL = BASE_URL + id + API_KEY
    // const API_URL = "https://api.themoviedb.org/3/movie/346?api_key=f6298fa1c78ec36ac973f2e15add056f&language=en-US"
    const res = await fetch(API_URL)
    const newMovie = await res.json()
    setMovie(newMovie)
  } catch (error) {
    console.error(error)
  }
}

  useEffect(() => {
    getMovie()
  }, [id])

  if (!movie.title) return null

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.tagline}</h2>    
      <ul>{movie.genres.map((genre) => 
        <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <p>{movie.overview}</p>
    </div>
  )
}
