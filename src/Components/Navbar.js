// Navbar.js
import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
      setActiveLink(link);
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
        <Link
                    to="/"
                    onClick={() => handleLinkClick('about')}
                    className={`navbar-link ${activeLink === 'about' ? 'active-link' : ''}`}
                >home</Link>
        <Link
                    to="/Biography"
                    onClick={() => handleLinkClick('biography')}
                    className={`navbar-link ${activeLink === 'about' ? 'active-link' : ''}`}
                >biography</Link>
          <a className="menu-item" href="/">
            my work
          </a>
          <a className="menu-item" href="/">
            future dates
          </a>
          <a className="menu-item" href="/">
            cello
          </a>
        </Menu>
        </div>
  );
};

export default Navbar;






