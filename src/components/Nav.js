import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src="https://i.redd.it/tcintmzgcpkb1.jpg" alt="Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Product">Products</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
       
      </ul>
    </nav>
  );
};

export default Nav;
