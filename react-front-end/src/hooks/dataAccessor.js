import axios from "axios";
import { useState, useEffect } from "react";

export default function dataAccessor() {
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

  // function that generates array of userIds for a given groupId
  const getUsersIdByGroupId = (groupId) => {
    // first filter out trips with same group id
    const tripsInGroup = state.trips.filter(
      (trip) => trip.group_id === groupId
    );
    // next map each trip to only give user id
    const userIdInGroup = tripsInGroup.map((trip) => trip.user_id);

    // filters state.users, if user.id is not part of the user id array,
    // filter out the user.
    const usersInGroup = state.users.filter((user) => {
      return userIdInGroup.includes(user.id);
    });
    return usersInGroup;
  };

  const getTripByGroupAndUserId = (groupId, userId) => {
    const tripsInWithGroupId = state.trips.filter(
      (trip) => trip.group_id === groupId
    );
    
    const tripWithUserId = tripsInWithGroupId.filter(
      (trip) => trip.user_id === userId
    );

    return tripWithUserId[0];
  };

  // gives you the user trips for a given user - on each trip, append an array
  // of user objects of users with the same group_id.
  const getUserTrips = (userId) => {
    // filter out trips of given user
    const userTrips = state.trips.filter((trip) => trip.user_id === userId);

    return userTrips.map((trip) => {
      return {
        ...trip,
        group: getUsersIdByGroupId(trip.id),
      };
    });
  };

  const getUserById = (id) => {
    const user = state.users.filter((user) => user.id === id);
    console.log("user", user[0]);
    return user[0];
  };

  const fetchData = () => {
    axios
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API
      });
  };

  return {
    state,
    getUserTrips,
    getUserById,
    fetchData,
    getUsersIdByGroupId,
    getTripByGroupAndUserId
  };
}