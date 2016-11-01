import React from 'react';

import Header from '../Header';
import MoviesContainer from '../../containers/Movies';

import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <MoviesContainer max='5'/>
    </div>
  );
};

export default App;
