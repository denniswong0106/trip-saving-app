import React from 'react';
import NavBar from './NavBar';
import LinearProgressWithLabel from "./helper_components/LinearProgressWithLabel";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "./Group.scss"

const Group = (props) => {

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
        <LinearProgressWithLabel value={55} />
      </div>
      <div>
        <AddCircleOutlineIcon />
      </div>

    </>
  );
}

export default Group;