import React from 'react';

const MovieItem = ({id, poster}) => {
  const url = `/movie/${id}`;
  return (
      <a href={url} className="movies-item" style={{backgroundImage: 'url(' + poster + ')'}}></a>
  );
};

export default MovieItem;
