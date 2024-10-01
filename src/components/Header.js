// components/Header.js
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">Navi</div>
        <div className="navbar-toggle" onClick={handleToggle}>
          ☰
        </div>
        <ul className={`navbar-links ${navbarOpen ? 'active' : ''}`}>
          <li><a href="#about-me" onClick={handleToggle}>About Me</a></li>
          <li><a href="#projects" onClick={handleToggle}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
