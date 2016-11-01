import React, { PropTypes } from 'react';
import Header from '../Header';
import './reset.css';
import './styles.css';

const App = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
