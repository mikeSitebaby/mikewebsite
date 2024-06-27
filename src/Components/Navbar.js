// Navbar.js
import React from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {



  const [menuOpenState, setMenuOpenState] = useState(false)

  const handleStateChange = (state) => {
    setMenuOpenState(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpenState(false);
  }

  return (
  <div className="container1">
      <div className='flexywrap'>
      <div className='headercontainer'>
      <a className="name" href="/">Michael Cobb</a>
      <p>Conductor</p>
      </div>
      </div>
        <Menu noOverlay right isOpen={menuOpenState} onStateChange={handleStateChange} >
        <Link  onClick={closeMenu} to={'/'}>home</Link>
        <Link onClick={closeMenu} to={'/Biography'}>biography</Link>
        <Link onClick={closeMenu} to={'/MyWork'}>my work</Link>
        
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






