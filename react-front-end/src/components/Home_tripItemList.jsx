import React, { useState, useContext } from "react";

import TripItem from "./Home_tripItem";

const TripItemList = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

<<<<<<< HEAD
  // const newArray = props.trips.map((trip) => {
  //   console.log(trip);
  // });

=======
>>>>>>> ba405b43848cb88f0e3917b5a66ad28eba52aed6
  const tripsArray = Array.from(props.trips);
  const trips = tripsArray.map((trip, index) => {
    return (
      <TripItem
        key={index}
        name={trip.name}
        description={trip.description}
        image={trip.images[2].image_href}
        id={trip.id}
        key={trip.id}
      />
    );
  });

  return <div className="trip-container">{trips}</div>;
};

export default TripItemList;
