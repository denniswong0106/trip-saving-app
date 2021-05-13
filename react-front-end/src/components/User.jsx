import React, { useContext } from "react";
import TripItemList from "./User_tripItemList";
import DataContext from "../helperfunctions/DataContext";
import "./User.scss";

// if user props passed in - has no user
// redirect back to homepage
// if user props passed in - has user
// display user info

// hardcode props data in props:
// const props = {
//   user: {
//     name: "Joe the builder",
//     email: "bobsfriend@builders.com",
//     avatar: require("../pics/ryan-rey.png"),
//     bank_account: "0000-0000-0000-0000",
//   },
//   trips: [
//     {
//       id: 1,
//       savings: 550,
//       daily_drip: 1,
//       trip_name: "Iceland 2021",
//       cost: 1000,
//       location: "Iceland",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
//       stretch_goal: 500,
//       daily_prize: false,
//       user_id: 1,
//       group: [
//         {
//           name: "Bob the builder",
//           email: "bobssfriend@builders.com",
//           avatar: require("../pics/ryan-rey.png"),
//           bank_account: "0000-0000-0000-0000",
//         },
//         {
//           name: "Jane the painter",
//           email: "bobbfriend@builders.com",
//           avatar: require("../pics/ryan-rey.png"),
//           bank_account: "0000-0000-0000-0000",
//         },
//       ],
//     },
//     {
//       id: 2,
//       savings: 350,
//       daily_drip: 1,
//       trip_name: "Peru 2022",
//       cost: 2000,
//       location: "Peru",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
//       stretch_goal: 500,
//       daily_prize: true,
//       user_id: 1,
//       group: [
//         {
//           name: "Bob the builder",
//           email: "bobssfriend@builders.com",
//           avatar: require("../pics/ryan-rey.png"),
//           bank_account: "0000-0000-0000-0000",
//         },
//         {
//           name: "Jane the painter",
//           email: "bobbfriend@builders.com",
//           avatar: require("../pics/ryan-rey.png"),
//           bank_account: "0000-0000-0000-0000",
//         },
//       ],
//     },
//   ],
// };

const User = () => {
  // uses useContext to grab the appropriate functions to use it instead of prop drilling
  const { getUserTrips, getUserById } = useContext(DataContext);
  
  const trips = getUserTrips(1);
  const user = {...getUserById(1)};
  
  console.log("trips in get getUserTrips: ", trips);
  console.log("user in get userById: ", user);

  return (
    <main className="user-page">
      <section className="user-display">
        <div className="user-avatar-info">
            <img className="avatar" src={user.avatar} alt="avatar" />
            <h2 className="username"> {user.name}</h2>
        </div>
        <div className="trips-info">
          <br/><br/><br/>
          <h1>Trips</h1>
          <br/>
          <TripItemList trips={trips} />
        </div>
      </section>
    </main>
  );
};

export default User;
