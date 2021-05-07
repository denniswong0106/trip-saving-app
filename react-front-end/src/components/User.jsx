import { Container } from "@material-ui/core";
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
  trips: {},
};

const User = (props) => {
  return (
    <main class="user-info">
      <NavBar />

      <section>
        <div>image</div>
        <div>
          <h2>Trips</h2>
          <container>
            <article>trip</article>
          </container>
        </div>
      </section>
    </main>
  );
};

export default User;
