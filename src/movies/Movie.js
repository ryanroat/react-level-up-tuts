import PropTypes from 'prop-types' 

export const Movie = ({ movie }) => {
  return (
    <li>{movie.title}</li>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}
