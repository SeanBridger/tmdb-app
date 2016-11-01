import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router';
import './styles.css';

const Header = () => {
  return (
    <header id="Header">
      <div className="logo">
				<h1><Link to="/">TMDB</Link></h1>
			</div>
      <Navigation />
    </header>
  )
};

export default Header;
