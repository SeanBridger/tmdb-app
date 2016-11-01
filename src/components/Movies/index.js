import React from 'react';

import MovieItem from '../MovieItem';

const Movies = () => {
  return (
    <div className="movies">
      <input placeholder="Search movies" />
      <h1>Results</h1>
      <div className="movies-wrapper">
        <MovieItem id="1" />
        <MovieItem id="2" />
        <MovieItem id="3" />
        <MovieItem id="4" />
        <MovieItem id="5" />
        <MovieItem id="6" />
        <MovieItem id="7" />
        <MovieItem id="8" />
        <MovieItem id="9" />
        <MovieItem id="10" />
      </div>
    </div>
  );
};

export default Movies;
