import React from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <div className="trickle-logo">
        <Link to="/">
          <h1>Trickle Trip </h1> 
        </Link>
      </div>
      <div className="login-trips">
        <Link to="/user">
          <h1>Login</h1>
        </Link>
        <Link to="/trip">
          <h1>Trips</h1> 
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;