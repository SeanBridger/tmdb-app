import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import MovieItem from '../MovieItem';
import { IMAGE_URL, PLACEHOLDER_URL } from '../../config';
import './styles.css';

const Movies = ({max, movies, title}) => {
  let items = '';
  if(movies) {
    items = movies.slice(0, max).map(function(item, i) {
      let poster = item.poster_path;
      if(!poster) {
        poster = `${PLACEHOLDER_URL}/300x450`;
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
        <CSSTransitionGroup transitionName="movies-item-trans" transitionEnterTimeout={200} transitionLeaveTimeout={200} >
          {items}
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

Movies.defaultProps = {
  max: '5',
  movies: [],
  title: ''
};

Movies.propTypes = {
  max: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movies;
