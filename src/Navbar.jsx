import React, { useState } from 'react';
import './App.css';
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>Pravin</span>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li onClick={ toggleMenu}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={ toggleMenu}>
          <Link to='/About'>About</Link>
        </li>
        <li onClick={ toggleMenu}>
          <Link to='/Info'>Info</Link>
        </li>
        <li onClick={ toggleMenu}>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
      <div className="sign-in">
        <button>Sign In</button>
      </div>
      <div className="burger" onClick={toggleMenu}> 
         { isOpen ? <FaTimes className='icon'/> : <FaBars  className='icon'/> }
      </div>
    </nav>
    </>

  );
}

export default Navbar;
