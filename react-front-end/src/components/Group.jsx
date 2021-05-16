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
import { requirePropFactory } from "@material-ui/core";

const Group = () => {
  // import DataContext functions
  const {
    getUsersIdByGroupId,
    getTripByGroupAndUserId,
    getUsersIdNotInGroup,
    handleAdd,
    pic,
    PDF
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
            groupId,
            trip.pic,
            trip.PDF
          );
          setAnchorEl(null);}}
      >
        <Avatar alt="avatar" src={friend.avatar} />
        {friend.name}
      </ListItem>
    );
  });

  console.log(date);
  return (
    <>
      <div className="top-container">
        <img src={trip.pic} alt="pic" />
        {/* <img src={require("../pics/trip_img.jpg")} alt="pic" /> */}
        <div className="text">
          <h1 className="group-title" >{trip.trip_name}</h1>
          <div className="group-details">
            <h5>{trip.location}{'\u00A0'}</h5>
            <h5 id="date">• Date: {date} •</h5>
            <h5>{'\u00A0'}{daysRemaining(date)} days remaining</h5>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <h1>Progress:</h1>
        <ul className="progress-bars">
          {groupFriendList}
        </ul>

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
              <CancelOutlinedIcon color="secondary" style={{ fontSize: 35 }}/>Cancel
            </ListItem>
          </List>
        </div>
      </div>
      <br/><br/><br/>
    </>
  );
};

export default Group;
