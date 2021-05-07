import React from "react";
import NavBar from "./NavBar";

// if user props passed in - has no user
// redirect back to homepage
// if user props passed in - has user
// display user info

// hardcode user data in props:

const props = {
  user: {
    name: "Joe the builder",
    email: "bobsfriend@builders.com",
    bank_account: "0000-0000-0000-0000",
    daily_prize: false,
  },
};

const User = () => {
  return (
    <div>
      <NavBar />
      <h3>User!</h3>
    </div>
  );
};

export default User;
