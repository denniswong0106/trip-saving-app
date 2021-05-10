import React from "react";
import Trip from "./components/Trip";
import User from "./components/User";
import Home from "./components/Home";
import Group from "./components/Group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataContext from "./helperfunctions/DataContext";
import dataAccessor from "./hooks/dataAccessor";
import NavBar from "./components/NavBar";
import "./App.scss";

export default function Application(props) {

  // separated the data fetching logic to ./hooks/dataAccessor
  const { 
    state, 
    getUserTrips, 
    getUserById, 
    fetchData 
  } = dataAccessor();
  
  return (
    <DataContext.Provider value={{
      state, 
      getUserTrips, 
      getUserById, 
      fetchData 
      }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/trip"  component={Trip}  />
          <Route path="/user"  component={User}  />
          <Route path="/group" component={Group} />
          <Route path="/"      component={Home}  />
        </Switch>
      </Router>
    </DataContext.Provider>
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
