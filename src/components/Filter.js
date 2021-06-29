import PropTypes from 'prop-types' 

export const Filter = ({ filter, setFilter }) => {
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
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
