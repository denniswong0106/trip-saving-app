import React, { useContext } from "react";
import TripItemList from "./User_tripItemList";
import DataContext from "../helperfunctions/DataContext";
import UserCard from "./UserCard";
import "./User.scss";
import { useParams, useHistory, Link } from "react-router-dom";

const User = (props) => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { getUserTrips, getUserById } = useContext(DataContext);

  const params = useParams();
  const trips = getUserTrips(parseInt(params.id));
  const user = { ...getUserById(parseInt(params.id)) };

  console.log("trips in get getUserTrips: ", trips);
  console.log("user in get userById: ", user);

  return (
    <main className="user-page">
      <UserCard />
      <div className="trips-info">
        <br />
        <br />
        <br />
        <h1>Trips</h1>
        <br />
        <TripItemList trips={trips} />
      </div>
    </main>
  );
};

export default User;
