import React from 'react';

const Movies = ({children}) => {
  return (
      <div className="movies-wrapper">
        {children}
      </div>
  );
};

export default Movies;
