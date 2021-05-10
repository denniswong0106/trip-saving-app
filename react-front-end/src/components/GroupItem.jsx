import React from 'react';
import LinearProgressWithLabel from "./helper_components/LinearProgressWithLabel";

const GroupItem = (props) => {
  return (
    <div className="group-progress">
      <img className="avatar-img" alt="user_avatar" src={props.avatar} />
      <h4>{props.name}</h4>
      <LinearProgressWithLabel value={props.progress} />
    </div>
  )
}

export default GroupItem;