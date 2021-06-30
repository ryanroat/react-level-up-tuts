import PropTypes from 'prop-types' 

export const Movie = ({ movie, config }) => {
  return (
    <li>
      {config.images?.base_url && (
        <img src={config.images.base_url + config.images.poster_sizes[2] + movie.poster_path} alt={movie.title + " poster"} />
      )}
      <h3>{movie.title}</h3>
    </li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired
}
