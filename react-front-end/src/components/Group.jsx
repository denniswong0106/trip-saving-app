import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GroupItem from "./GroupItem";
import DataContext from "../helperfunctions/DataContext";
import { calculatePercentage } from "../helperfunctions/calculateFunctions";

import "./Group.scss"

// hardcode for now
const addFriendsList = [
  {name: "Egg Eggerson"},
  {name: "Bob Belcher"},
  {name: "Brandom Neym"}
]

const Group = () => {

  // import DataContext functions
  const { getUsersIdByGroupId, getTripByGroupAndUserId } = useContext(DataContext);

  // assigns data to variables
  const trip = {...getTripByGroupAndUserId(1, 1)};
  const friendsList = getUsersIdByGroupId(1);

  console.log("trip", trip);
 
  // grabs today's date and converts it to a Month, Day, Year format
  const today = new Date();
  const tripDay = new Date(trip.booking_date);

  console.log("today ", today);
  console.log("tripDay ", tripDay);

  const timeDiff = Math.abs(today - tripDay);
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
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

  // maps through an array of users that are already in the group
  const groupFriendList = friendsList.map(friend => {
    
    // grabs the specific trip the group is on
    const trip = getTripByGroupAndUserId(1, friend.id);
    // calculates the progress 
    const progress = calculatePercentage(trip.savings, trip.cost);
    
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
  const addGroupFriendsList = addFriendsList.map(friend => <MenuItem>{friend.name}</MenuItem>);

  return(
    <>
      <div className="group-title">
        <h1>{trip.trip_name}</h1>
        <h2>Date: {currentDay}</h2>
        <h4>Only {daysRemaining} days to go!</h4>
      </div>
      <div>
        <h1>Progress:</h1>
      </div>
      <ul>
        {groupFriendList}
      </ul>
      <div>
        <Fab size="large" color="primary" aria-label="add" onClick={handleClick}>
          <AddIcon fontSize="large"/>
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
        </Menu>
      </div>
    </>
  );
}

export default Group;