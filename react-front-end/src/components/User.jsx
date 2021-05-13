import React, { useContext } from "react";
import TripItemList from "./User_tripItemList";
import DataContext from "../helperfunctions/DataContext";
import "./User.scss";

const User = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { getUserTrips, getUserById } = useContext(DataContext);

  const trips = getUserTrips(1);
  const user = { ...getUserById(1) };

  console.log("trips in get getUserTrips: ", trips);
  console.log("user in get userById: ", user);

  return (
    <main className="user-page">
      <section className="user-display">
        <div className="user-avatar-info">
          <div>
            <img className="avatar" src={user.avatar} alt="avatar" />
          </div>
          <h2 className="username"> {user.name}</h2>
        </div>
        <div className="trips-info">
          <h2>Trips</h2>
          <TripItemList trips={trips} />
        </div>
      </section>
    </main>
  );
};

export default User;
