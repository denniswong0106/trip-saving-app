import React from 'react';
import { Link } from 'react-router-dom'
import "./NavBar.scss";
import Button from '@material-ui/core/Button';


const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <div className="trickle-logo">
        <Link to="/">
          <Button color="primary">Trickle Trip </Button> 
        </Link>
      </div>
      <div className="login-trips">
        <Link to="/user">
          <Button color="primary">Login</Button>
        </Link>
        <Link to="/trip">
          <Button color="primary">Trips</Button> 
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;