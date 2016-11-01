import React from 'react';
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

export default MovieInfo;
