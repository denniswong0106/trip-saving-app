import React, { useState, useContext } from "react";

const TripItem = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  return (
    <>
      <div class="trip-block">
        <div className="text-and-heading">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <img src={props.image} alt="waterfall" />
      </div>
      <br/>
    </>
  );
};

export default TripItem;
