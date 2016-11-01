import React from 'react';
import Header from '../Header';

import './styles.css';

const App = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
