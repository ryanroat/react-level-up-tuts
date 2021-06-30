import { useState, useEffect } from 'react'
import  { Movie } from './Movie'
import { Filter } from '../components/Filter'
import env from "react-dotenv"

// const API_URL = your API_URL here or store in .env file for privacy
// const CONFIG_URL = your CONFIG_URL here or store in .env file for privacy

export const MoviesList = () => {
  const [filter, setFilter] = useState("")
  const [movies, setMovies] = useState([])
  const [config, setConfig] = useState({})

  const getMovies = async () => {
    try {
      // const res = await fetch(API_URL)
      const res = await fetch(env.API_URL)
      const movies = await res.json()
      setMovies(movies.results)
    } catch (error) {
      console.error(error)
    }
  }
  const getConfig = async () => {
    try {
      // const res = await fetch(CONFIG_URL)
      const res= await fetch(env.CONFIG_URL)
      const config = await res.json()
      setConfig(config)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovies()
    getConfig()
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        { movies
          .filter(( movie ) => movie.title.toLowerCase().includes(filter.toLowerCase()))
          .map(( movie ) => ( <Movie key={movie.id} config={config} movie={movie} /> ))
        }
      </ul>
    </div>
  )
}
