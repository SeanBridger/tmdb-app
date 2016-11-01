import React, { Component } from 'react';

import Navigation from '../Navigation';
import Movies from '../Movies';
import MovieItem from '../MovieItem';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <header id="Header">
          <div id="logo">
    				<h1><a href="/">TMDB</a></h1>
    			</div>
          <Navigation />
        </header>
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
  }
}

export default App;
