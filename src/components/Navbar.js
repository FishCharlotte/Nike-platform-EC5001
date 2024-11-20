import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src="logo.svg" alt="Nike" />
          </Link>
        </div>
        <div className="nav-center">
          <Link to="/">New & Featured</Link>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Sale</Link>
          <Link to="/">SNKRS</Link>
        </div>
        <div className="nav-right">
          <div className="search-container">
            <svg className="search-icon" fill="#757575" viewBox="0 0 24 24">
              <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
            </svg>
            <input type="search" placeholder="搜索" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; 