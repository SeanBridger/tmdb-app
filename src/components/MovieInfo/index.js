import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const MovieInfo = ({title, release_date, overview, backdrop}) => {
  return (
    <div id="mainInfo" style={{backgroundImage: `url(${backdrop})`}}>
      <div className="details">
        <div className="btn" onClick={browserHistory.goBack}>Back</div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <p>{overview}</p>
      </div>
      <div className="overlayTop"></div>
      <div className="overlayBottom"></div>
    </div>
  );
};

MovieInfo.defaultProps = {
  title: '',
  release_date: '',
  overview: '',
  backdrop: ''
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
};

export default MovieInfo;
