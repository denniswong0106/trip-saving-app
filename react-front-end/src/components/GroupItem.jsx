import React from 'react';
import LinearProgressWithLabel from "./helper_components/LinearProgressWithLabel";

const GroupItem = (props) => {
  return (
    <>
    <div className="group-titles">
      <h4>{props.name}</h4>
    </div>
    <div className="image-and-bar">
      <img className="avatar-img" alt="user_avatar" src={props.avatar} />
      <LinearProgressWithLabel className="bar" value={props.progress} />
    </div>
    </>
  )
}

export default GroupItem;