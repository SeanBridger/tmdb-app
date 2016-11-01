import React from 'react';
import MovieItem from '../MovieItem';

const Movies = ({max, movies, title}) => {
  let items = '';
  if(movies) {
    items = movies.slice(0, max).map(function(item, i) {
      console.log('here');
      let poster = item.poster_path;
        if(!poster) {
          poster = 'http://placehold.it/600x900';
        } else {
          poster = `http://image.tmdb.org/t/p/original${poster}`;
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
