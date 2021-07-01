import PropTypes from 'prop-types' 

export const Filter = ({ filter, setFilter, placeholder }) => {
  return (
    <div>
      <label className="filter">
        Filter Movies
        <input className="filter-input"
          placeholder={placeholder}
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

Filter.defaultProps = {
  placeholder: "search"
}
