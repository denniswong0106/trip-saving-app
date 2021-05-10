import React from 'react';
import NavBar from './NavBar';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import GroupItem from "./GroupItem";

import "./Group.scss"

// hardcode for now
const friendsList = [
  {
    id: 1,
    name: 'Rex Raptor',
    avatar: 'https://i.imgur.com/LpaY82x.png',
    progress: 65
  },
  {
    id: 2,
    name: 'Megan Mann',
    avatar: 'https://i.imgur.com/TdOAdde.jpg',
    progress: 33
  }, 
  {
    id: 3,
    name: 'Weavile Underwood',
    avatar: 'https://i.imgur.com/FK8V841.jpg',
    progress: 57
  }
]

// hardcode for now
const addFriendsList = [
  {name: "Egg Eggerson"},
  {name: "Bob Belcher"},
  {name: "Brandom Neym"}
]

const Group = (props) => {

  // grabs today's date and converts it to a Mont, Day, Year format
  const today = new Date();
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
    return (
      <GroupItem 
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        progress={friend.progress}
      />
    )
  });

  // maps through an array of "friends" not yet added to the group
  const addGroupFriendsList = addFriendsList.map(friend => <MenuItem>{friend.name}</MenuItem>);

  return(
    <>
      <NavBar />
      <div className="group-title">
        <h1>Iceland 2077!</h1>
        <h2>Date: {currentDay}</h2>
        <h4>Only 364 days to go!</h4>
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