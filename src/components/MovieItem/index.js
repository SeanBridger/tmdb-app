import React from 'react';
import { Link } from 'react-router';

const MovieItem = ({id, poster}) => {
  const url = `/movie/${id}`;
  return (
      <Link to={url} className="movies-item" style={{backgroundImage: 'url(' + poster + ')'}}></Link>
  );
};

export default MovieItem;
