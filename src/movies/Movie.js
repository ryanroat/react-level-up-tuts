import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

export const Movie = ({ movie, config }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        {config.images?.base_url && (
          <img className="movies-list-poster" src={config.images.base_url + config.images.poster_sizes[4] + movie.poster_path} alt={movie.title + " poster"} />
        )}
        <h3>{movie.title}</h3>
      </Link>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
      poster_sizes: PropTypes.array
    })
  })
}
