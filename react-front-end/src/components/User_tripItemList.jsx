import { Container } from "@material-ui/core";
import React from "react";
import TripItem from "./User_tripsItem";

const TripItemList = (props) => {
  const trips = props.trips.map((trip) => {
    return (
      <TripItem
        id={trip.id}
        daily_drip={trip.daily_drip}
        savings={trip.savings}
        trip_name={trip.trip_name}
        cost={trip.cost}
        stretch_goal={trip.stretch_goal}
        description={trip.description}
        location={trip.location}
        group_id={trip.group_id}
        user_id={trip.user_id}
        key={trip.id}
      />
    );
  });

  return (
    <div className="trips-container">
      <article>{trips}</article>
    </div>
  );
};

export default TripItemList;
