import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {

  

  return (
    <nav className="nav-bar">
      <div className="trickle-logo">
        <Link to="/">
          <img src={require("../pics/piggyAssets/2transparent.png")} alt="pic" ></img>
        </Link>
        <p>Trickle Trip</p>
      </div>
      <div className="login-trips">
        <Button onClick={(e)=>{e.preventDefault(); window.location.href="/"}}>Logout</Button>
        <Button onClick={(e)=>{e.preventDefault(); window.location.href="/user/1"}}>My Trips</Button>
      </div>
    </nav>
  );
};

export default NavBar;
