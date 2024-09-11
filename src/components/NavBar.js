import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg gamer-navbar">
      <a className="navbar-brand gamer-brand">PixelHub</a>
      
      <div className="navbar-collapse d-flex justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link gamer-link" href="#">Workstations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link gamer-link" href="#">Monitors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link gamer-link" href="#">Accessories</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;