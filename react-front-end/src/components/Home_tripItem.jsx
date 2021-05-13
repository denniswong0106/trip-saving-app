import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Trip from "./Trip";

const TripItem = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  return (
    <>
      <Link to={`/trip/${props.id}`}>
        <div class="trip-block">
          <div className="text-and-heading">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
          <img src={props.image} alt="waterfall" />
        </div>
      </Link>
      <br />
    </>
  );
};

export default TripItem;
