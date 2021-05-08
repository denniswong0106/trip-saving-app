import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import "./User.scss";
import TripItemList from "./User_tripItemList";

// if user props passed in - has no user
// redirect back to homepage
// if user props passed in - has user
// display user info

// hardcode user data in props:

const props = {
  user: {
    name: "Joe the builder",
    email: "bobsfriend@builders.com",
    avatar_image: require("../pics/ryan-rey.png"),
    bank_account: "0000-0000-0000-0000",
    daily_prize: false,
  },
  trips: [
    {
      id: 1,
      savings: 550,
      daily_drip: 1,
      trip_name: "Iceland 2021",
      cost: 1000,
      location: "Iceland",
      description: "I love icelnad",
      stretch_goal: 500,
      user_id: 1,
      group_id: 1,
    },
    {
      id: 2,
      savings: 200,
      daily_drip: 1,
      trip_name: "Peru 2022",
      cost: 1000,
      location: "Peru",
      description: "I love Peru",
      stretch_goal: 500,
      user_id: 1,
      group_id: 2,
    },
  ],
};

const User = () => {
  return (
    <main className="user-page">
      <NavBar />

      <section className="user-display">
        <div className="user-avatar-info">
          <div>
            <img
              className="avatar"
              src={props.user.avatar_image}
              alt="avatar"
            />
          </div>
          <div className="username"> {props.user.name}</div>
        </div>
        <div className="trips-info">
          <h2>Trips</h2>
          <TripItemList trips={props.trips} />
        </div>
      </section>
    </main>
  );
};

export default User;
