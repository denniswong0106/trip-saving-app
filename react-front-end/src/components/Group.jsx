import React from 'react';
import NavBar from './NavBar';
import LinearProgressWithLabel from "./helper_components/LinearProgressWithLabel";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import "./Group.scss"

const Group = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})



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
      <div className="group-progress">
        <img className="avatar-img" alt="rex" src="https://i.imgur.com/LpaY82x.png" />
        <h4>Rex Raptor</h4>
        <LinearProgressWithLabel value={75} />
      </div>
      
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
          <MenuItem onClick={handleClose}>Megan Mann</MenuItem>
          <MenuItem onClick={handleClose}>Weavile Underwood</MenuItem>
          <MenuItem onClick={handleClose}>Nema Toed</MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default Group;