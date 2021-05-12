import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GroupItem from "./GroupItem";
import DataContext from "../helperfunctions/DataContext";
import { calculatePercentage } from "../helperfunctions/calculateFunctions";
import axios from "axios";

import "./Group.scss";

const Group = () => {

  // import DataContext functions
  const { getUsersIdByGroupId, getTripByGroupAndUserId, getUsersIdNotInGroup } = useContext(DataContext);

  // assigns data to variables
  const trip = {...getTripByGroupAndUserId(1, 1)};
  const friendsList = getUsersIdByGroupId(1);
  const allUsers = getUsersIdNotInGroup(1);
 
  // grabs today's date and the trip date and calculates remaining days
  const today = new Date();
  const tripDay = new Date(trip.booking_date);
  
  const timeDiff = Math.abs(today - tripDay);
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
  // grabs today's date and converts it to a Month, Day, Year format
  const currentDay = today.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
  
  // state that the menu from material ui uses
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // click handler that the menu from material ui uses
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // closing click handler that the menu from material ui uses
  const handleClose = () => {
    setAnchorEl(null);
  };

  // adds users to the list
  const handleAdd = (id, tripName, price, locationName, description) => {
    console.log("price: ", price);
    console.log("tripName: ", tripName);
    console.log("id: ", id);
    console.log("locationName: ", locationName);
    console.log("description: ", description);

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
      console.log("from the front in Group.jsx, res.data: ", result.data.results);
    });

    setAnchorEl(null);
  }

  // maps through an array of users that are already in the group
  const groupFriendList = friendsList.map(friend => {
    
    // grabs the specific trip the group is on
    const tripForEach = getTripByGroupAndUserId(1, friend.id);
    // calculates the progress 
    const progress = calculatePercentage(tripForEach.savings, tripForEach.cost);
    
    return (
      <GroupItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        progress={progress}
      />
    );
  });

  // maps through an array of "friends" not yet added to the group
  const addGroupFriendsList = allUsers.map(friend => {
    
    const tripForEach = getTripByGroupAndUserId(1, 1);

    return (
      <MenuItem 
        key={friend.id}
        onClick={() => 
          handleAdd(
            friend.id,
            tripForEach.trip_name,
            tripForEach.cost,
            tripForEach.location,
            tripForEach.description,
          )}
      >
        {friend.name}
      </MenuItem>
    )
    
  });

  return (
    <>
      <div className="group-title">
        <h1>{trip.trip_name}</h1>
        <h2>Date: {currentDay}</h2>
        <h4>Only {daysRemaining} days to go!</h4>
      </div>
      <div>
        <h1>Progress:</h1>
      </div>
      <ul class="progress-bars">{groupFriendList}</ul>
      <div id="add">
        <Fab
          size="large"
          color="primary"
          aria-label="add"
          onClick={handleClick}
        >
          <AddIcon fontSize="large" />
        </Fab>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {addGroupFriendsList}
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Group;
