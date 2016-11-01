import React from 'react';
import MovieItem from '../MovieItem';
import { IMAGE_URL } from '../../config';

const Movies = ({max, movies, title}) => {
  let items = '';
  if(movies) {
    items = movies.slice(0, max).map(function(item, i) {
      let poster = item.poster_path;
        if(!poster) {
          poster = 'http://placehold.it/600x900';
        } else {
          poster = `${IMAGE_URL}${poster}`;
        }
        return (
          <MovieItem key={item.id} id={item.id} poster={poster} />
        );
    });
  }
  return (
    <div className="movies">
      <input placeholder="Search movies" />
      <h1>Results</h1>
      <div className="movies-wrapper">
        {items}
      </div>
    </div>
  );
};

export default Movies;
