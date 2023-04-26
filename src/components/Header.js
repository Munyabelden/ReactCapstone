import React from 'react';
import logo from '../assets/logo.gif';
import './styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={ logo } alt='Logo GIF'/>
      <h1>Our World</h1>
    </div>
  );
}

export default Header;
