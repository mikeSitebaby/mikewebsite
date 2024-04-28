// Navbar.js
import React from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  return (
  <div className="container1">
      <div className='flexywrap'>
      <div className='headercontainer'>
      <a className="name" href="/">Michael Cobb</a>
      <p>Conductor</p>
      </div>
      </div>
        <Menu noOverlay right>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/projects">
            Projects
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
        </div>
  );
};

export default Navbar;






