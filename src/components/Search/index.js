import React from 'react';

const Search = ({searchTerm, handleKeyUp, handleChange}) => {
  return (
    <div id="Search">
      <input onKeyUp={handleKeyUp} onChange={handleChange} type="search" placeholder="Search for a title..." value={searchTerm}/>
    </div>
  )
};

export default Search;
