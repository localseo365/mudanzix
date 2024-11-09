import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">MUDANZIX</a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
