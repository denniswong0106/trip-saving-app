import React, { useState, useContext } from "react";

const TripItem = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  return (
    <>
      <div className="text-and-heading">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt="waterfall" />
    </>
  );
};

export default TripItem;
