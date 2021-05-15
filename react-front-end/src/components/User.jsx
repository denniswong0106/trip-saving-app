import React, { useContext } from "react";
import TripItemList from "./User_tripItemList";
import DataContext from "../helperfunctions/DataContext";
import UserCard from "./UserCard";
import "./User.scss";

const User = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { getUserTrips, getUserById } = useContext(DataContext);

  const trips = getUserTrips(1);
  const user = { ...getUserById(1) };

  console.log("trips in get getUserTrips: ", trips);
  console.log("user in get userById: ", user);

  return (
    <main className="user-page">
        <UserCard />
        <div className="trips-info">
          <br/><br/><br/>
          <h1>Trips</h1>
          <br/>
          <TripItemList trips={trips} />
        </div>
    </main>
  );
};

export default User;
