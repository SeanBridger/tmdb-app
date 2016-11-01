import React from 'react';

const MovieItem = ({id}) => {
  const url = `/movie/${id}`;
  return (
      <a href={url} className="movies-item">Movie {id}</a>
  );
};

export default MovieItem;
