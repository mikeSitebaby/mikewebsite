// Navbar.js
import React from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const Navbar = ({isAnimating, setIsAnimating}) => {

  const handleClick = () => {
   
    setIsAnimating(!isAnimating);

  };

  return (
  <div className="container1">
      <div className='flexywrap'>
      <div className='headercontainer'>
      <a className="name" href="/">Michael Cobb</a>
      <p>Conductor</p>
      </div>
      </div>
        <Menu noOverlay right>
        <Link  onClick={handleClick} to={!isAnimating ? '/' : '#'} >home</Link>
        <Link to={!isAnimating ? "/Biography" : '#'} onClick={handleClick}>biography</Link>
        <Link to={!isAnimating ? "/MyWork" : '#'} onClick={handleClick}>my work</Link>
        
          <a className="menu-item" href="/">
            future dates
          </a>
          <a className="menu-item" href="/">
            contact me
          </a>
        </Menu>
        </div>
  );
};

export default Navbar;






