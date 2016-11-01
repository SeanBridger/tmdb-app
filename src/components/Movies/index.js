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
      <h1>{title}</h1>
      <div className="movies-wrapper">
        {items}
      </div>
    </div>
  );
};

Movies.defaultProps = {
  max: 5
};

export default Movies;
