import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header id="Header">
          <div id="logo">
    				<h1><a href="/">TMDB</a></h1>
    			</div>
          <div id="Navigation">
            <nav>
              <ul>
                <li>Movies</li>
                <li>TV</li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="movies" >
          <input value="Search movies" />
          <h1>Results</h1>
          <div className="movies-wrapper">
            <a href="/movie/1" className="movies-item">Movie 1</a>
            <a href="/movie/2" className="movies-item">Movie 2</a>
            <a href="/movie/3" className="movies-item">Movie 3</a>
            <a href="/movie/4" className="movies-item">Movie 4</a>
            <a href="/movie/5" className="movies-item">Movie 5</a>
            <a href="/movie/6" className="movies-item">Movie 6</a>
            <a href="/movie/7" className="movies-item">Movie 7</a>
            <a href="/movie/8" className="movies-item">Movie 8</a>
            <a href="/movie/9" className="movies-item">Movie 9</a>
            <a href="/movie/10" className="movies-item">Movie 10</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
