import React, { useContext, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/Menu";
import ListItem from "@material-ui/core/MenuItem";
import Avatar from '@material-ui/core/Avatar';
import Fade from "@material-ui/core/Fade";
import GroupItem from "./GroupItem";
import DataContext from "../helperfunctions/DataContext";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {
  calculatePercentage,
  daysRemaining,
  currentDay,
} from "../helperfunctions/calculateFunctions";

import "./Group.scss";

const Group = () => {
  // import DataContext functions
  const {
    getUsersIdByGroupId,
    getTripByGroupAndUserId,
    getUsersIdNotInGroup,
    handleAdd,
  } = useContext(DataContext);

  // assigns data to variables
  const trip = { ...getTripByGroupAndUserId(1, 1) };
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
  const groupFriendList = friendsList.map((friend) => {
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
  const addGroupFriendsList = allUsers.map((friend) => {
    const tripForEach = getTripByGroupAndUserId(1, 1);

    return (
      <ListItem
        key={friend.id}
        onClick={() => {
          handleAdd(
            friend.id,
            tripForEach.trip_name,
            tripForEach.cost,
            tripForEach.location,
            tripForEach.description
          );
          setAnchorEl(null);
        }}
      >
      <ListItemAvatar>
        <Avatar alt="avatar" src={friend.avatar} />
      </ListItemAvatar>
        {friend.name}
      </ListItem>
    );
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
      <ul className="progress-bars">{groupFriendList}</ul>
      <div id="add">
        <Fab
          size="large"
          color="primary"
          aria-label="add"
          onClick={handleClick}
        >
          <AddIcon fontSize="large" />
        </Fab>
        <List
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <ListSubheader component="div" id="nested-list-subheader">
            Add a friend
          </ListSubheader>
          {addGroupFriendsList}
          <ListItem onClick={handleClose}>
            <ListItemAvatar>
              <CancelOutlinedIcon color="secondary" style={{ fontSize: 35 }}/>
            </ListItemAvatar>
            Cancel
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Group;
