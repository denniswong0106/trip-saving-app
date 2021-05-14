import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  const [loggedIn, setLoggedIn] = useState("Logout");

  function logout(element) {
    element.preventDefault();
    if (loggedIn === "Logout") {
      setLoggedIn("Login");
    } else {
      setLoggedIn("Logout");
    }
    // window.location.href="/";
  }

  return (
    <nav className="nav-bar">
      <div className="trickle-logo">
        <Link to="/">
          <img src={require("../pics/piggyAssets/2transparent.png")} alt="pic" ></img>
        </Link>
        <p>Trickle Trip</p>
      </div>
      <div className="login-trips">
        {loggedIn === "Login" && (<>
          <input type="text" value="Egg@Eggerson.com" name="name"/>
          <input type="password" value="Eggerson" name="name"/>
        </>)}
        <Button onClick={(e)=>{logout(e)}}>{loggedIn}</Button>
        {loggedIn === "Logout" && (<Button onClick={(e)=>{e.preventDefault(); window.location.href="/user/1"}}>My Trips</Button>)}
      </div>
    </nav>
  );
};

export default NavBar;
