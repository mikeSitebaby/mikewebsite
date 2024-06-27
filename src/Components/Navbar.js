// Navbar.js
import React from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const location = useLocation();

  const [menuOpenState, setMenuOpenState] = useState(false)

  const handleStateChange = (state) => {
    setMenuOpenState(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpenState(false);
    window.scrollTo(0, 0);
  }

  const handleFutureDatesClick = () => {
    if (location.pathname !== '/') {
      closeMenu();
    }
  };

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
        {location.pathname === '/' ? (
          <ScrollLink
            to="calendar-section"
            smooth={true}
            duration={1500}
            onClick={closeMenu}
            className="menu-item"
            style={{ cursor: 'pointer' }}
          >
            future dates
          </ScrollLink>
        ) : (
          <HashLink onClick={handleFutureDatesClick} to="/#calendar-section" className="menu-item" style={{ cursor: 'pointer' }}>
            future dates
          </HashLink>
        )}
        
        
          <a className="menu-item" href="/">
            contact me
          </a>
        </Menu>
        </div>
  );
};

export default Navbar;






