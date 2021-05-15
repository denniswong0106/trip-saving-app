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
import { useParams, useHistory, Link } from "react-router-dom";
import "./Group.scss";

const Group = () => {
  // import DataContext functions
  const {
    getUsersIdByGroupId,
    getTripByGroupAndUserId,
    getUsersIdNotInGroup,
    handleAdd,
  } = useContext(DataContext);

  const history = useHistory();
  const { user_id, group_id } = useParams();
  // -----------------------------------------
  // State functions
  // state that the menu from material ui uses
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // -------------------------------------
  // Variables

  const groupId = parseInt(group_id);
  const userId = parseInt(user_id);

  const trip = {
    ...getTripByGroupAndUserId(groupId, userId),
  };
  const friendsList = getUsersIdByGroupId(groupId);
  const allUsers = getUsersIdNotInGroup(groupId);

  const date = new Date(trip.booking_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // --------------------------------------------
  // Click handler functions

  // click handler that the menu from material ui uses
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // closing click handler that the menu from material ui uses
  const handleClose = () => {
    setAnchorEl(null);
  };

  // -------------------------------------------
  // component helper functions

  // maps through an array of users that are already in the group
  const groupFriendList = friendsList.map((friend) => {
    // grabs the specific trip the group is on
    const tripForEach = getTripByGroupAndUserId(groupId, friend.id);
    console.log(tripForEach);
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
    return (
      <ListItem
        key={friend.id}
        onClick={() => {
          handleAdd(
            friend.id,
            trip.trip_name,
            trip.cost,
            trip.location,
            trip.description,
            groupId
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

  console.log(date);
  return (
    <>
      <div className="group-title">
        <h1>{trip.trip_name}</h1>
        <h2>Date: {date}</h2>
        <h4>Only {daysRemaining(date)} days to go!</h4>
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
