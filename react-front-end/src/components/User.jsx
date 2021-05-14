import React, { useContext } from "react";
import TripItemList from "./User_tripItemList";
import DataContext from "../helperfunctions/DataContext";
import "./User.scss";
import { useParams, useHistory, Link } from "react-router-dom";

const User = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { getUserTrips, getUserById } = useContext(DataContext);

  const params = useParams();
  const trips = getUserTrips(parseInt(params.id));
  const user = { ...getUserById(parseInt(params.id)) };

  console.log("trips in get getUserTrips: ", trips);
  console.log("user in get userById: ", user);

  return (
    <main className="user-page">
      <div className="user-avatar-info">
        <img className="avatar" src={user.avatar} alt="avatar" />
        <h2 className="username"> {user.name}</h2>
      </div>
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
