import React, { useState, useContext } from "react";

import TripItem from "./Home_tripItem";

const TripItemList = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

  console.log("props", props);
  return (
    <div className="trip-container">
      <TripItem />
    </div>
  );
};

export default TripItemList;
