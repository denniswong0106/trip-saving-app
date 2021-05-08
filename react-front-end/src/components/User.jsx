import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import "./User.scss";
import TripItemList from "./User_tripItemList";

// if user props passed in - has no user
// redirect back to homepage
// if user props passed in - has user
// display user info

// hardcode props data in props:
const props = {
  user: {
    name: "Joe the builder",
    email: "bobsfriend@builders.com",
    avatar_image: require("../pics/ryan-rey.png"),
    bank_account: "0000-0000-0000-0000",
  },
  trips: [
    {
      id: 1,
      savings: 550,
      daily_drip: 1,
      trip_name: "Iceland 2021",
      cost: 1000,
      location: "Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      stretch_goal: 500,
      daily_prize: false,
      user_id: 1,
      group: [
        {
          name: "Bob the builder",
          email: "bobssfriend@builders.com",
          avatar_image: require("../pics/ryan-rey.png"),
          bank_account: "0000-0000-0000-0000",
        },
        {
          name: "Jane the painter",
          email: "bobbfriend@builders.com",
          avatar_image: require("../pics/ryan-rey.png"),
          bank_account: "0000-0000-0000-0000",
        },
      ],
    },
    {
      id: 2,
      savings: 350,
      daily_drip: 1,
      trip_name: "Peru 2022",
      cost: 2000,
      location: "Peru",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      stretch_goal: 500,
      daily_prize: true,
      user_id: 1,
      group: [
        {
          name: "Bob the builder",
          email: "bobssfriend@builders.com",
          avatar_image: require("../pics/ryan-rey.png"),
          bank_account: "0000-0000-0000-0000",
        },
        {
          name: "Jane the painter",
          email: "bobbfriend@builders.com",
          avatar_image: require("../pics/ryan-rey.png"),
          bank_account: "0000-0000-0000-0000",
        },
      ],
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
          <h2 className="username"> {props.user.name}</h2>
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
