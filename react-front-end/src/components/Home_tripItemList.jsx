import React from "react";
import TripItem from "./Home_tripItem";

const TripItemList = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  // const { state, fetchData } = useContext(DataContext);

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
