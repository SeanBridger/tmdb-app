import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MovieItem = ({id, poster}) => {
  const url = `/movie/${id}`;
  return (
      <Link to={url} className="movies-item" style={{backgroundImage: 'url(' + poster + ')'}}></Link>
  );
};

MovieItem.defaultProps = {
  id: 0,
  poster: ''
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieItem;
