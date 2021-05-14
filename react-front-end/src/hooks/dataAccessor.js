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

  // gets all the users that are not in the group array
  const getUsersIdNotInGroup = (groupId) => {
    
    const usersInGroup = getUsersIdByGroupId(groupId);
    const mappedIds = usersInGroup.map((user) => user.id)
    const allUsers = state.users;
    const usersNotIncluded = allUsers.filter((users) => !mappedIds.includes(users.id));
    
    return usersNotIncluded;
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

  // adds users to the group list
  const handleAdd = (id, tripName, price, locationName, description) => {
    console.log("price: ", price);
    console.log("tripName: ", tripName);
    console.log("id: ", id);
    console.log("locationName: ", locationName);
    console.log("description: ", description);

    const newTrip = { 
      id:999,
      savings: 0,
      daily_drip: 0,
      trip_name: tripName,
      cost: price,
      location: locationName,
      description: description,
      daily_prize: true,
      booking_date: "2021-11-20",
      stretch_goal: 0,
      user_id: id,
      group_id: 1
    };

    axios.put(`/api/trips`, {
      savings: 0,
      daily_drip: 0,
      trip_name: tripName,
      cost: price,
      location: locationName,
      description: description,
      daily_prize: true,
      booking_date: "2021-11-20",
      stretch_goal: 0,
      user_id: id,
      group_id: 1,
    }).then((result)=>{
      console.log("from the front in Group.jsx, res.data: ", result);
    });
    
    setState((prev) => ({...prev, trips: [ ...prev.trips, newTrip ]}));
  }

  const surpriseMechanic = (groupId, id) => {
    const userTrip = getTripByGroupAndUserId(groupId , id)
    const randomizedPrize = Number(userTrip.daily_drip * 2) + Number((Math.random() * 5).toFixed(2));
    const userSavings = Number(userTrip.savings) + Number(randomizedPrize)

    axios.post(`/api/trips`, {
      id: userTrip.id,
      savings: randomizedPrize,
      daily_prize: false
    }).then((result)=>{
      console.log("from the front in Canvas.jsx, res.data: ", result);
    });

    console.log("userTrip in surpriseMechanic: ", userTrip);
    console.log("randomizedPrize: ", randomizedPrize);
  }

  return {
    state,
    setState,
    handleAdd,
    fetchData,
    getUserById,
    getUserTrips,
    surpriseMechanic,
    getUsersIdByGroupId,
    getUsersIdNotInGroup,
    getTripByGroupAndUserId
  };
}