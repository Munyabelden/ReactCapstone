import React from 'react';
import logo from '../assets/logo.gif';
import './styles/Header.css';

function Header() {
  return (
    <div className="header" data-testid="home">
      <img src={logo} alt="Logo GIF" />
      <h1>Our World</h1>
    </div>
  );
}

export default Header;
