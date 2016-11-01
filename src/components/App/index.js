import React from 'react';

import Header from '../Header';
import Movies from '../Movies';
import MovieItem from '../MovieItem';

import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="movies" >
        <input placeholder="Search movies" />
        <h1>Results</h1>
        <Movies>
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
        </Movies>
      </div>
    </div>
  );
};

export default App;
