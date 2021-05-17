import React from "react";
import Trip from "./components/Trip";
import User from "./components/User";
import Home from "./components/Home";
import Group from "./components/Group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataContext from "./helperfunctions/DataContext";
import dataAccessor from "./hooks/dataAccessor";
import apiAccessor from "./hooks/apiAccessor";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/helper_components/ScrollToTop";
import ScrollToTopButton from "./components/helper_components/ScrollToTopButton";
import "./App.scss";

export default function Application(props) {
  // separated the data fetching logic to ./hooks/dataAccessor
  const {
    state,
    setState,
    handleAdd,
    fetchData,
    getUserById,
    getUserTrips,
    surpriseMechanic,
    getGroupByGroupId,
    getUsersIdByGroupId,
    getUsersIdNotInGroup,
    getTripByGroupAndUserId,
  } = dataAccessor();

  const {
    data,
    empty,
    search,
    loading,
    remaining,
    setData,
    setSearch,
    loadRemainingData,
  } = apiAccessor();

  return (
    <DataContext.Provider
      value={{
        data,
        state,
        empty,
        search,
        loading,
        remaining,
        setData,
        setState,
        setSearch,
        fetchData,
        handleAdd,
        getUserById,
        getUserTrips,
        surpriseMechanic,
        loadRemainingData,
        getGroupByGroupId,
        getUsersIdByGroupId,
        getUsersIdNotInGroup,
        getTripByGroupAndUserId,
      }}
    >
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/user/:user_id/group/:group_id" component={Group} />
          <Route path="/trip/:id" component={Trip} />
          <Route path="/user/:id" component={User} />
          <Route path="/group" component={Group} />
          <Route path="/" component={Home} />
        </Switch>
        <ScrollToTopButton />
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
