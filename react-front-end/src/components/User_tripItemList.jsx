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
        group={trip.group}
        daily_prize={trip.daily_prize}
        user_id={trip.user_id}
        key={trip.id}
        bookingDate={trip.booking_date}
        groupId={trip.group_id}
      />
    );
  });

  return (
    <div>
      <article>{trips}</article>
    </div>
  );
};

export default TripItemList;
