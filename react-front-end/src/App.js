import React, { Component } from "react";
import Trip from "./components/Trip";
import User from "./components/User";
import Home from "./components/Home";
import Group from "./components/Group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

export default function Application(props) {
  const initialState = {
    users: [],
    trips: [],
    groups: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const usersUrl = "/api/users";
    const tripsUrl = "/api/trips";
    const groupsUrl = "/api/groups";

    Promise.all([
      axios.get(usersUrl),
      axios.get(tripsUrl),
      axios.get(groupsUrl),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        trips: all[1].data,
        groups: all[2].data,
      }));
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/trip" component={Trip} />
        <Route path="/user" component={User} />
        <Route path="/group" component={Group} />
        <Route path="/">
          <Home state={state} />
        </Route>
      </Switch>
    </Router>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: 'Click the button to load data!'
//     }
//   }

//   fetchData = () => {
//     axios.get('/api/users') // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data) // The entire response from the Rails API

//       console.log(response.data.message) // Just the message
//       this.setState({
//         message: response.data.message
//       });
//     })
//   }

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/trip" component={Trip} />
//           <Route path="/user" component={User} />
//           <Route path="/group" component={Group} />
//           <Route path="/">
//             <Home state={this.state} fetchData={this.fetchData} />
//           </Route>
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;
