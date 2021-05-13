import React, { useContext, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GroupItem from "./GroupItem";
import DataContext from "../helperfunctions/DataContext";
import { calculatePercentage, daysRemaining, currentDay } from "../helperfunctions/calculateFunctions";
import axios from "axios";

import "./Group.scss";

const Group = () => {

  // import DataContext functions
  const { getUsersIdByGroupId, getTripByGroupAndUserId, getUsersIdNotInGroup, setState, handleAdd } = useContext(DataContext);

  // assigns data to variables
  const trip = {...getTripByGroupAndUserId(1, 1)};
  const friendsList = getUsersIdByGroupId(1);
  const allUsers = getUsersIdNotInGroup(1);

  // state that the menu from material ui uses
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // click handler that the menu from material ui uses
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // closing click handler that the menu from material ui uses
  const handleClose = () => {
    setAnchorEl(null);
  };
  
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
        onClick={() => {
          handleAdd(
            friend.id,
            tripForEach.trip_name,
            tripForEach.cost,
            tripForEach.location,
            tripForEach.description,
          )
          setAnchorEl(null)
        }}
      >
        {friend.name}
      </MenuItem>
    )
    
  });

  return (
    <>
      <div className="group-title">
        <h1>{trip.trip_name}</h1>
        <h2>Date: {currentDay()}</h2>
        <h4>Only {daysRemaining(trip.booking_date)} days to go!</h4>
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