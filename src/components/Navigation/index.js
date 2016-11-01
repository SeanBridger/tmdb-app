import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <div id="Navigation">
      <nav>
        <ul>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/">TV</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
