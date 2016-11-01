import React, { PropTypes } from 'react';
import './styles.css';

const Search = ({searchTerm, handleKeyUp, handleChange}) => {
  return (
    <div id="Search">
      <input onKeyUp={handleKeyUp} onChange={handleChange} type="search" placeholder="Search for a title..." value={searchTerm}/>
    </div>
  )
};

Search.defaultProps = {
  searchTerm: ''
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Search;
