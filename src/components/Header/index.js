import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header id="Header">
      <div className="logo">
				<h1><a href="/">TMDB</a></h1>
			</div>
      <Navigation />
    </header>
  )
};

export default Header;
