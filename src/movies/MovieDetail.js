import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const BASE_URL=`https://api.themoviedb.org/3/movie/`
const API_KEY=`?api_key=f6298fa1c78ec36ac973f2e15add056f&language=en-US`

const IMG_URL=`https://image.tmdb.org/t/p/`
const BACKDROP_SIZE=`original`
const POSTER_SIZE=`w342`

export const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
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

    getMovie()
  }, [id])

  if (!movie.title) return null

  return (
    <div className="movie-details">
      <Link to="/">
        <img className="backdrop" src={IMG_URL + BACKDROP_SIZE + movie.backdrop_path + API_KEY} alt={movie.title + " backdrop"} />
        <div className="movie-details__details">
          <img className="poster" src={IMG_URL + POSTER_SIZE + movie.poster_path + API_KEY} alt={movie.title + " poster"} />
          <div className="details">
            <h1 className="title-tagline">{movie.title}</h1>
            <h2 className="title-tagline">{movie.tagline}</h2>    
            <ul>{movie.genres.map((genre) => 
              <li key={genre.id}>{genre.name}</li>)}
            </ul>
            <p>{movie.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
