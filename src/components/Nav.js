import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../App.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/services">Products</Link></li>
        <li><Link to="/home">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

