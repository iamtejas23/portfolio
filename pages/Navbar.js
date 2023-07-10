import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="menu">
      {/* <div className='logo'>Tejas</div> */}
        <div className="menu-item">
          <a href="/">Home</a>
        </div>
        <div className="menu-item">
          <a href="#about">About</a>
        </div>
        <div className="menu-item">
          <a href="#Projects">Projects</a>
        </div>
        <div className="menu-item">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
